import mongoose from "mongoose";

const Connection = async(username,password)=>{
    const URL = `mongodb://${username}:${password}@ac-ve3vmez-shard-00-00.4afuzw3.mongodb.net:27017,ac-ve3vmez-shard-00-01.4afuzw3.mongodb.net:27017,ac-ve3vmez-shard-00-02.4afuzw3.mongodb.net:27017/?ssl=true&replicaSet=atlas-fmkbgo-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL,{ useNewUrlParser: true });
        console.log("Database connnected successfully");
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }

}
export default Connection;