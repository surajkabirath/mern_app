import mongoose, { connect } from "mongoose";

export const mongoDB = () => {
  mongoose
    .connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Congratulation! MongoDb is Connected Successfully and it is working on PORT:${process.env.PORT} `);
    });
   
};
