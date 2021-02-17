import Mongoose from "mongoose";
import { variables } from "./environments/variables";

const options: Mongoose.ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const Database = async () => {
  await Mongoose.connect(variables.DATABASE_URI as string, options, () => {
    console.log("Database is connected");
  });
};

export default Database;
