import mongoose from 'mongoose';
import { USER, SERVER, DB, PASSWORD } from '../constants';

mongoose.connect(`mongodb://${USER}:${PASSWORD}@${SERVER}/${DB}`);

const configSchema = new mongoose.Schema({ moves: [{ move: String, kills: String }] });

export default mongoose.model('Config', configSchema);
