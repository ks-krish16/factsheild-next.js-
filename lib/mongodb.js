import mongoose from "mongoose"

const MONGODB_URL=  process.env.MONGODB_URL;

if (!MONGODB_URL){
    console.log("please define env variable")
}

let cached=global.mongoose;

if(!cached){
    cached=global.mongoose={conn : null , promise : null};
}

export default async function dbconnect(){
    if(cached.conn){
        return cached.conn
    }

    if(!cached.conn){
        cached.promise=mongoose.connect(MONGODB_URL);
    }

    cached.conn= await cached.promise;
    return cached.conn
}