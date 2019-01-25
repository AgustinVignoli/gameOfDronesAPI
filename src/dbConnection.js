import mongoose from 'mongoose';
import { USER, SERVER, DB, PASSWORD } from './constants';

mongoose.connect(`mongodb://${USER}:${PASSWORD}@${SERVER}/${DB}`, { useNewUrlParser: true });

export default mongoose;
