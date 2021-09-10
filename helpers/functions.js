const { sign } = require("jsonwebtoken");

function validateProps(obj = {}, props = []) {
  let faltan = props.length;
  props.forEach((p) => {
    if (obj[p] !== "") {
      faltan--;
    }
  });
  const email = obj["email"];
  if (email) {
    if (!email.includes("@") || !email.includes(".")) {
      faltan++;
    }
  }
  console.log("faltan: ", faltan);
  return faltan == 0;
}

function generateToken(user = {}) {
  return sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRECT, {
    expiresIn: "1h",
  });
}

module.exports = { validateProps, generateToken };
