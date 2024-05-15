const express = require('express');
const app = express();
const body_parser = require('body-parser')
const TaskRouter = require('./src/router/TaskRoutes') 
const {checkDbConnect} = require('./src/dbConfig')

const PORT = 9091;

app.use(body_parser.json());

// enable routes
app.use('/',TaskRouter);


app.listen(PORT,async()=>{
 console.log(`server is running on https://localhost:${PORT}`);
 await checkDbConnect();
})

