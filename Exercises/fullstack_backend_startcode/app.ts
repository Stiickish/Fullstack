import express = require('express');
import morgan = require('morgan');
import mechanicRouter from './routes/mechanicRouter';
import carRouter from './routes/carRouter'
import reviewRouter from './routes/reviewRouter'

const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log('Development mode...');
}

app.use(express.json()); // Body parser for JSON data
app.use(express.static(`${__dirname}/public`)); // Serve static files

app.use('/api/v1/mechanics', mechanicRouter);
app.use('/api/v1/cars', carRouter);
app.use('/api/v1/reviews', reviewRouter)

export default app;
