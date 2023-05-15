import app from './src/app';
import * as dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
import mongoose from 'mongoose';

const DB = process.env.DATABASE_DEV!.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD!,
);

const port = process.env.PORT;
mongoose.connect(DB, {}).then(() => console.log('DB connection succesfull!'));

app.listen(port, () => {
  console.log(`Person API on http://localhost:${port}/api/v1/people`);
  console.log(`Person API on http://localhost:${port}/api/v1/address`);
  console.log(`Person API on http://localhost:${port}/graphql`);
});

