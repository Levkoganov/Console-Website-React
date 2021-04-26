const products = require('../models/products');
const pagination = require('../models/pagination');

const playStation = async (req, res) => {
  let data;
  let page = parseInt(req.query.start);
  let previouspage = page - 5;
  let nextpage = page + 5;
  let max = await pagination.countAllPS4();
  max = max[0][0].max / 5;

  try {
    if (page) {
      data = await pagination.selectPagePS4(page, 5);
      res.send({
        playStationData: data[0],
        playStationPage: page,
        playStationMaxPage: max,
        playStationNextPage: nextpage < 20 ? page + 5 : undefined,
        playStationPrevPage: previouspage >= 0 ? page - 5 : undefined,
      });
    } else {
      data = await products.selectAllPS4();
      nextpage = 5;
      res.send({
        playStationData: data[0],
        playStationPage: page,
        playStationMaxPage: max,
        playStationNextPage: nextpage,
        playStationPrevPage: previouspage >= 0 ? page - 5 : undefined,
      });
    }
  } catch (err) {
    console.log('ERROR: ', err);
  }
};

module.exports.playStation = playStation;
