import express from 'express';
import carRoute from './routes/carRoute';
import 'express-async-errors';
import motorcyclerRoute from './routes/motorcycleRoute';

const app = express();
app.use(express.json());
app.use(carRoute);
app.use(motorcyclerRoute);

export default app;
