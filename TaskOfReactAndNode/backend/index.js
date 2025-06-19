const express = require("express");
require('dotenv').config();
const app = express();
const cors = require('cors');
const PropertiesRouter = require("./Routes/PropertyRoutes");
const AuthRouter = require("./Routes/AuthRoutes");

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use("/api/properties", PropertiesRouter);
app.use("/api/auth", AuthRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});