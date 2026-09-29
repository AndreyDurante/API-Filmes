import mongoose from "mongoose";

async function conectaNaDataBase() {
    mongoose.connect(process.env.MONGODB_URL)

    return mongoose.connection
}

export default conectaNaDataBase;