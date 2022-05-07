import mongoose from 'mongoose';
import config from './config';

(async _ =>{
   try {
      const db = await mongoose.connect(config.mongodbURL);
      console.log(`database is connected to : ${db.connection.name}`);
   } catch (error) {
      console.log(error);
   }
})();