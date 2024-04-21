//server/src/models/userModel.js
import prisma from "../libs/db.js";
export default class UserModel {
  async createUserInPrisma(username, email, password) {
    try {
      const newUser = await prisma.user.create({
        data: { username, email, password },
      });
      return newUser;
    } catch (error) {
      console.log(`createUserInPrisma error : ${error}`);
      return error;
    }
  }

  async getLoginFromPrisma(email, password) {
    try {
      const loginUser = await prisma.user.findUnique({
        where: { email, password },
      });
      return loginUser;
    } catch (error) {
      console.log(`getLoginFromPrisma:${error}`);
      return error;
    }
  }
}
