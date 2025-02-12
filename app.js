const express = require('express'),
    cors = require('cors'),
    path = require('path');

const app = express();

app.use(cors());

app.use('/', require('./routes/root'));

app.get('/media/*', (req, res) => { res.sendFile(path.join(__dirname, '/public/media/', req.params[0])) });
app.get('/js/*', (req, res) => { res.sendFile(path.join(__dirname, '/public/js/', req.params[0])) });
app.get('/css/*', (req, res) => { res.sendFile(path.join(__dirname, '/public/css/', req.params[0])) });

// specifying server port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});