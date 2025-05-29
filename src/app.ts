import express, { Request, Response } from 'express';
import cors from 'cors';
import apiRoutes from './routes/api.routes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

// Health check
app.get('/health', (req, res) => { res.json({ status: 'ok' }) });


export default app;