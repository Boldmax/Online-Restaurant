require('dotenv').config();
const express = require("express");
const productRoutes = require('./routes/productRoutes');
const connectDB = require('./config/db');


connectDB();

const app = express();

app.use(express.json());
/* app.get("/", (req, res) => {
    res.json({ message: "API running..."})
}) */

app.use('/menus', productRoutes);

const PORT = process.env.PORT || 5001

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));