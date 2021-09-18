const router = require('express').Router();
const path = require ('path');

router.get('/stats', async (req, res) => {
    // try {
      console.log(path.join(__dirname, '../public/stats.html'));
      res.sendFile( path.join(__dirname, '../public/stats.html'));
    // } catch (err) {
    //   console.log(err);
    //   res.status(500).json(err);
    // }
  });

  router.get('/', async (req, res) => {
    // try {
      res.sendFile( path.join(__dirname, '../public/index.html'));
    // } catch (err) {
    //   console.log(err);
    //   res.status(500).json(err);
    // }
  });

  router.get('/exercise', async (req, res) => {
    // try {
      res.sendFile( path.join(__dirname, '../public/exercise.html'));
    // } catch (err) {
    //   console.log(err);
    //   res.status(500).json(err);
    // }
  });

  module.exports = router;