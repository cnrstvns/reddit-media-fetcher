const express = require('express');
const Reddit = require('../services/reddit.service');
const mediaHelper = require('../helpers/media.helper');

const router = express.Router();

router.get('/:type/:resource', async (req, res) => {
  try {
    const response = await Reddit.get(req.params.type, req.params.resource, req.query.limit || 100);
    const data = mediaHelper.find(response.data.children);
    res.send(data);
  } catch (err) {
    res.sendStatus(502);
  }
});

module.exports = router;
