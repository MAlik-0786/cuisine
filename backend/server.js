import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import recipeRoutes from './routes/recipeRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT && process.env.PORT != 3000 ? process.env.PORT : 3000;

app.use(cors());
app.use(express.json());

// default
app.get('/', (req, res) => {
    res.json({ status: 'OK', message: 'Backend is up and running' });
});
// Main Routes
app.use('/api', recipeRoutes);



app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});


