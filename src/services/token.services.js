require("dotenv").config();
const { sign } = require("jsonwebtoken");

class TokenService {
  async generateToken(info) {
    return sign(info, process.env.SECRET, {
      expiresIn: 300, //5min
    });
  }
  async validateToken() {
    const token = json(token);
  }
}

module.exports = new TokenService();
