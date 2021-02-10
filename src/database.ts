import Mongoose from "mongoose";

const options: Mongoose.ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const Database = async () => {
  await Mongoose.connect(`mongodb://localhost:27017/Pizzeria`, options, () => {
    console.log("Database is connected");
  });
};

export default Database;
