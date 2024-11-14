// import mongoose from 'mongoose';

// let cached = global.mongoose || { connection: null, promise: null };
// // let isConnected: boolean = false;

// export const connect = async () => {
//   if (cached.connection) {
//     console.log('=> using existing database connection');
//     return cached.connection;
//   }
//   mongoose.set('strictQuery', true);

//   if (!'mongodb+srv://matiasevillar:pillan@cluster0.3oylo.mongodb.net/') {
//     throw new Error('MONGO_URI is not defined');
//   }

//   cached.promise =
//     cached.promise ||
//     mongoose.connect(
//       'mongodb+srv://matiasevillar:pillan@cluster0.3oylo.mongodb.net/',
//       {
//         dbName: 'CRMdb',
//         bufferCommands: false,
//       }
//     );

//   cached.connection = await cached.promise;

//   return cached.connection;
// };
