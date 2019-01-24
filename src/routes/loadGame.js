import express from 'express';
import GameModel from '../models/game.model';

const router = express.Router();
router.get('/api/loadGame', (req, res) => {
  GameModel.find()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

export default router;
