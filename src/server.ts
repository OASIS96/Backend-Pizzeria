import express, { Request, Response } from "express";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import mainRouter from './routes/main.routes';
import { variables } from "./environments/variables";

const app = express();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(helmet());
app.use(express.json());

app.use("/",mainRouter);

app.listen(variables.PORT, () => {
  console.log(`Serve on port ${variables.PORT}`);
});

export default app;
