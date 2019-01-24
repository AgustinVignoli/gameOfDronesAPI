import mongoose from 'mongoose';
import { USER, SERVER, DB, PASSWORD } from '../constants';

mongoose.connect(`mongodb://${USER}:${PASSWORD}@${SERVER}/${DB}`);

const gameSchema = new mongoose.Schema({
  looser: String,
  rounds: [
    {
      winner: String,
      looser: String,
      movement: { killer: String, killed: String },
    },
  ],
  winner: String,
});

export default mongoose.model('Game', gameSchema);
