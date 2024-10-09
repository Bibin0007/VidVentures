import express from 'express';
import { verifyAdmin } from '../controllers/adminController';


const adminRouter = express.Router();


adminRouter.post('/verifyAdmin',verifyAdmin)