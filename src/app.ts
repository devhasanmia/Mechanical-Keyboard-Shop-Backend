import express, { Application, Request, Response } from "express";
import cors from "cors";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173" }));
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    message: "Server is up and running!",
    version: "1.0.0",
    author: {
      name: "Md. Hasan Mia",
      email: "hasanmiadev@gmail.com",
      mobile: "+8801740398196",
    },
  });
});
app.use("/api", router);
app.use(notFound);
app.use(globalErrorHandler);

export default app;
