import mongoose from 'mongoose';

import { url } from '../config/config';

(async () => {

    try {

        const connection = await mongoose.connect(url!)
    
        if(connection.STATES.connected) {
            console.log("Database is connected");
        }
        
    } catch (error) {
        console.log(error);
    }


})()