const mongoose = require("mongoose");
const { MongoURI } = require("./config");

mongoose
  .connect(MongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err.message));
