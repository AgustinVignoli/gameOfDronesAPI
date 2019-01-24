import express from 'express';
import { isNil, isEmpty } from 'lodash';
import GameModel from '../models/game.model';
import ConfigModel from '../models/config.model';

const router = express.Router();

router.post('/api/saveGame/config', (req, res) => {
  if (!req.body) {
    return res.status(400).send('Game configuration data is missing');
  }

  ConfigModel.findOneAndUpdate({}, { $set: req.body.data }, { new: true }, (err, doc) => {
    res.send({ error: err, moves: doc.moves });
  });
});

router.post('/api/saveGame', (req, res) => {
  if (!req.body) {
    return res.status(400).send('Game data is missing');
  }

  const model = new GameModel(req.body.data);
  model
    .save()
    .then((doc) => {
      if (isNil(doc) || isEmpty(doc)) {
        return res.status(500).send(doc);
      }
      return res.status(201).send(doc);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

export default router;
