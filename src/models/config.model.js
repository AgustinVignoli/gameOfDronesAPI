import mongoose from '../dbConnection';

const configSchema = new mongoose.Schema({ moves: [{ move: String, kills: String }] });

export default mongoose.model('Config', configSchema);
