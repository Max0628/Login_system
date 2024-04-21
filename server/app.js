//server/app.js
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json " assert { type: "json" };
import cors from "cors";
import router from "./src/routes/route.js";

const app = express();
const port = 8080;

//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/user", router);

app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(swaggerDocument));

//errorHandler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("server error");
});

app.listen(port, () => {
  console.log(`伺服器正在監聽${port}`);
});
