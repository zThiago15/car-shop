import express from 'express';
import carRoute from './routes/carRoute';
import 'express-async-errors';

const app = express();
app.use(express.json());
app.use(carRoute);

export default app;
