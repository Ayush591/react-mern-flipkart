import mongoose from "mongoose";

export const Connection = async (USERNAME, PASSWORD) => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-xr0jvpq-shard-00-00.qcecarr.mongodb.net:27017,ac-xr0jvpq-shard-00-01.qcecarr.mongodb.net:27017,ac-xr0jvpq-shard-00-02.qcecarr.mongodb.net:27017/?ssl=true&replicaSet=atlas-padnn0-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log("Database Connected Successfully");
    } catch (error){
        console.log('Error while connecting with database ', error.message);
    }
}

export default Connection;