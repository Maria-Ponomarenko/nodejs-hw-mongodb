// xf7HwQhZxn1vGnlA;

//mashaponomarenko:xf7HwQhZxn1vGnlA@cluster0.qgtwo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// 8PbOYVadbikU07YA

//mashaponomarenko:<db_password>@cluster0.qgtwo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// 92VNW7l5H2Sqq4wT

//Maria:<db_password>@cluster0.0y8jc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

import mongoose from 'mongoose';
import { env } from '../utils/env.js';

export const initMongoConnection = async () => {
  try {
    const user = env('MONGODB_USER');
    const password = env('MONGODB_PASSWORD');
    const url = env('MONGODB_URL');
    const db = env('MONGODB_DB');

    await mongoose.connect(
      `mongodb+srv://${user}:${password}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`,
    );

    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.log(`Error connect database with message ${error.message}`);
    throw error;
  }
};
