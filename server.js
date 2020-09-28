import express from "express";
import bodyParser from "body-parser";
import route from "./serverside/Router/noteRoutes";

import db from "./serverside/db";

const port = 5001;
import routes from "./serverside/Router/noteRoutes";
const app = express();
app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => {
  console.log(`server started at port no ${port}`);
});
