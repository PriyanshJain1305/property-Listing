const express = require('express');
const PropertiesRouter = express.Router();
const auth = require("../Middleware/authMiddleware");
const multer = require("multer");
const { getAllProperties, create, update, delete: deleteProp } = require("../Controllers/propertyController");

const upload = multer ({ dest: "uploads/" });

PropertiesRouter.get("/getProperties", auth, getAllProperties);
PropertiesRouter.post("/createProperties", auth, upload.single("image"), create);
PropertiesRouter.put("/updateProperties/:id", auth, upload.single("image"), update);
PropertiesRouter.delete("/:id", auth, deleteProp);

module.exports = PropertiesRouter;