const mongoose =require('mongoose');
const DB_URI ='mongodb://localhost:27017/checkpoint-rest-api';

const connectDB =async()=>{
    try {
    await mongoose.connect( DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true})
        console.log('data base is connected')
    } catch (err) {
    console.log(`can not connect to database ${err}`)
    }
}
module.exports= connectDB