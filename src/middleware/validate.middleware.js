const types = [
  'r',
  'u',
];

module.exports = (req, res, next) => {
  if (types.includes(req.params.type)) return next();
  res.sendStatus(404);
};
