import mongoose from '../dbConnection';

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
