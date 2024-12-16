import mongoose from "mongoose";
export const dbConnections = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect('mongodb://127.0.0.1:27017/demo')
        .then(() => console.log('Database Connected!'))
        .catch(err => console.log('error in database', err));
}
