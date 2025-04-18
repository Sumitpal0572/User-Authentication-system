const express = require('express');
const mongoose = require('./config/db');
const authRoutes = require('./routes/auth.routes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
