const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db")
const cors = require("cors");
mongoDB();

app.use(cors())
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 
// app.use((req,res,next)=>{
//     res.header("Access-Control-Allow-Origin","*");// react app address
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     )
//     next();
// })

app.get('/',(req,res)=>{
    res.send('Hello World')
})
// using app.use() middleware
app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));
app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
});
