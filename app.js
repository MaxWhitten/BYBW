// Example using Express.js
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());

const rootRouter = require('./routes/root');
const mediaRouter = require('./media/dn');
const jsRouter = require('./js/dn');
const cssRouter = require('./css/dn');
const contBlogRouter = require('./content/blog/blog');
const contProjectsRouter = require('./content/projects/projects');
// const projectsRouter = require('./routes/projects')

app.use('/', rootRouter);
app.use('/media', mediaRouter);
app.use('/js', jsRouter);
app.use('/css', cssRouter);
app.use('/content/blog', contBlogRouter);
app.use('/content/projects', contProjectsRouter);
// app.use('/projects', projectsRouter);

// specifying server port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});