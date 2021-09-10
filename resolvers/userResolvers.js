const User = require("../models/User");
const { hash, compare } = require("bcrypt");
const { validateProps, generateToken } = require("../helpers/functions");

const findByEmail = async (email = "") => {
  return await User.findOne({ email });
};

module.exports = {
  Query: {
    async getUsers() {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    async register(_, { input }) {
      if (!validateProps(input, ["password", "email", "username"]))
        throw new Error("faltan parametros");

      try {
        const userExist = await findByEmail(input.email);
        console.log("userExist:", userExist);
        if (userExist)
          throw new Error("Ya existe una cuenta con el email provisto");

        const hashPasswd = await hash(input.password, 12);
        const user = await User.create({
          ...input,
          password: hashPasswd,
        });
        const token = generateToken(user)
        return { user, token };
      } catch (error) {
        throw error;
      }
    },
    async login(_, { input: { email, password } }) {
      if (!validateProps({ email, password }, ["email", "password"]))
        throw new Error("Faltan parametros o son invalidos");

      try {
        const user = await findByEmail(email);
        if (!user) return false;
        const match = await compare(password, user.password); 
        return {
            match,
            token: match && generateToken(user)
        }
      } catch (error) {
        throw error;
      }
    },
    async deleteNullUsers() {
      await User.deleteMany({ username: "" });
      return await User.find();
    },
  },
};
