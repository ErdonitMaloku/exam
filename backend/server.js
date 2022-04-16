const cors = require("cors");
const express = require("express");

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

require("./server/configs/mongoose.config");
const AllRoutes = require("./server/routes/vote.routs");
AllRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );
