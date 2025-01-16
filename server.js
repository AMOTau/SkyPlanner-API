const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const activitiesRoutes = require('./routes/activitiesRoutes');
const weatherRoutes = require('./routes/weatherRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api/users', userRoutes);
app.use('/api/activities', activitiesRoutes);
app.use('/api/weather', weatherRoutes);
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
