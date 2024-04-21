//server/src/controllers/controller.js
// import Cookies from "js-cookie";
import UserService from "../services/userService.js";
export default class UserController {
  async register(req, res) {
    try {
      const { username, email, password } = req.body;
      const newUser = await UserService.serviceRegister(
        username,
        email,
        password
      );
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    try {
      const token = await UserService.serviceLogin(email, password);
      console.log(`ThisIsToken :${token}`);
      res
        .cookie("Authorization", `Bearer ${token}`)
        .status(201)
        .json({ success: true, message: "User logged in successfully" });
      console.log(`res:${JSON.stringify(res)}`);
    } catch (error) {
      console.log(error);
    }
  }
}
