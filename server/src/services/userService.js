//server/src/services/userService.js
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "../models/userModel.js";

class UserService {
  constructor() {
    this.userModel = new UserModel();
  }

  async serviceRegister(username, email, password) {
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const newRegisterUser = await this.userModel.createUserInPrisma(
        username,
        email,
        hashedPassword
      );
      return newRegisterUser;
    } catch (error) {
      throw new Error(`Register error: ${error.message}`);
    }
  }

  async serviceLogin(email, password) {
    const user = await this.userModel.getLoginFromPrisma(email);
    if (!user) {
      throw new Error(`User not found`);
    }
    //bcrypt.compare會回傳布林值
    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) {
      throw new Error(`Invalid password`);
    }

    try {
      const { username, email } = user;
      const payload = { username, email };
      const mySecret = process.env.JWT_SECRET;
      const token = jwt.sign(payload, mySecret);
      console.log(
        `User Login Successfully ,username: ${username},token:${token}`
      );
      const decodedJWT = jwt.verify(token, mySecret);
      console.log(`decodedJWT:${JSON.stringify(decodedJWT)}`);
      return token;
    } catch (error) {
      console.log(`login error :${error}`);
      throw new Error(`Login error`);
    }
  }
}

export default new UserService();
