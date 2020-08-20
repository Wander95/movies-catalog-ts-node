import { connect } from 'mongoose';

export const startConnection = async ()=>{
    await connect('mongodb://localhost/movies-catalog',{
        useNewUrlParser:true,
        useUnifiedTopology: true
    })

    console.log('database connected');
}
