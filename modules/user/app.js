const express = require('express');

const { connectDB } = require('./configs/db')
const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
connectDB().then(() => {
    console.log(`MongoDB is connected`)
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
