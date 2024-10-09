import bodyParser from "body-parser";
import cluster from "cluster";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import os from "os";
import UserRouter from "./routers/userRouter.js";
import mongoose from "./config/dbConfig.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());



// Test server configuration
app.get('/', (req, res) => {
    // Add your response logic here
    res.sendStatus(200);
  });


app.use('/api/users', UserRouter);


const PORT = 5000

const numCpu = os.cpus().length;

if (process.env.SERVER_TYPE === "production") {
    if (cluster.isPrimary) {
      console.log(`Primary ${process.pid} is running`);
      for (let i = 0; i < numCpu; i++) {
        cluster.fork();
      }
      cluster.on("exit", (worker, code, signal) => {
        console.log(`${worker.process.pid} has exited`);
        cluster.fork();
      });
    } else {
      app.listen(PORT, () =>
        console.log(`Server ${process.pid} is running successfully on PORT ${PORT}`)
      );
    }
    
}else{
    app.listen(PORT, () =>
        console.log(`Server ${process.pid} is running successfully on PORT ${PORT}`)
      );
}


export default app