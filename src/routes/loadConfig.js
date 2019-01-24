import express from 'express';
import ConfigModel from '../models/config.model';

const router = express.Router();
router.get('/api/loadGame/config', (req, res) => {
  ConfigModel.find()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

export default router;
