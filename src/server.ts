import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import path from "path";
import mainRouter from "./routes/main.routes";
import sliderRouter from "./routes/slider.routes";
import loginRoutes from "./routes/login.routes";
import singupRoutes from "./routes/singup.routes";
import { variables } from "./environments/variables";

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api", sliderRouter);
app.use("/api", loginRoutes);
app.use("/api", singupRoutes);

app.use("/", mainRouter);

app.listen(variables.PORT, () => {
  console.log(`Serve on port ${variables.PORT}`);
});

export default app;
