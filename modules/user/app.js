const express = require('express');

const { connectDB } = require('./configs/db');

const routes = require('./routes')
const app = express();
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    console.log(`MongoDB is connected`)
});



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', routes);

app.use((req, res, next) => {
    return res.status(404).send({
        success: false,
        message: 'Url not found'
    });
});

app.use((err, req, res, next) => {
    return res.status(500).send({
        success: false,
        message: 'Internal server error',
        error: err.message
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
