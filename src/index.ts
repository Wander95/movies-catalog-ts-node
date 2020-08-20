import app from './app'
import { startConnection } from './database';



const main = async ()=>{
    startConnection();
    const PORT = app.get('port');
    app.listen(PORT,()=>{
        console.log(`server running on port ${PORT}...`)
    })
};


main();