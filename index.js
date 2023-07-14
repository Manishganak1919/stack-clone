import  express  from "express";
import mongoose from "mongoose";
import Connection from "./database/db.js";
import cors from 'cors'
import userRoutes from "./routes/users.js";
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'
import dotenv from 'dotenv';
import path from "path";



const __dirname = path.resolve();

const app =express();

dotenv.config();
app.use(express.json({limit:"30mb",extended:"true"}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

app.get('/',(req,res)=>{
    res.send("This is a stack overflow clone API")
})
mongoose.set('strictQuery', true); 
app.use('/user',userRoutes);
app.use('/questions',questionRoutes);
app.use('/answer',answerRoutes);

app.use(express.static(path.join(__dirname,"./client/build")));

app.get('*',function(_,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"),function(err){
        res.status(500).send(err);
    });

});

const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`server is running at port no ${PORT}`);
})

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

