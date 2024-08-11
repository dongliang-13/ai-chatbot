import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import aiRoutes from './routes/aiRoutes.js';

// loads the .env variables
dotenv.config();

// loads express instance
const app = express();

// load the port from .env
const port = process.env.PORT || 3000;

// starts the server
app.listen(port, ()=>{
    console.log(`Server is now running on port ${port}`);
});

//handles program termination
process.on('SIGINT', ()=>{
    console.log('Received SIGINT. Closing server gracefully...');
    server.close(()=>{
        console.log('Server closed. Exiting process');
        process.exit(0);
    })
});

// setting up middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mount routes for api calls
app.use("/api", aiRoutes);