const jwt = require("jsonwebtoken");

const CreateToken = (email) => {
  try {
    const secret_key=process.env.JWT_SECRET
    const token = jwt.sign({ email }, secret_key, { expiresIn: "1h" });
    console.log(secret_key);
    return token;
  } catch (error) {
    return error;
  }
};
module.exports = { CreateToken };
