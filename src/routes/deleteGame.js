import express from 'express';
import GameModel from '../models/game.model';

const router = express.Router();
router.delete('/api/deleteGame', (req, res) => {
  if (!req.query.id) {
    return res.status(400).send('Missing URL parameter: id');
  }
  return GameModel.findOneAndRemove({ _id: req.query.id })
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

export default router;
