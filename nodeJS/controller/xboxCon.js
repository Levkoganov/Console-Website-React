const products = require('../models/products');
const pagination = require('../models/pagination');

const xbox = async (req, res) => {
  let data;
  let page = parseInt(req.query.start);
  let previouspage = page - 5;
  let nextpage = page + 5;
  let max = await pagination.countAll();
  max = max[0][0].max / 5;

  try {
    if (page) {
      console.log('IF', page);

      data = await pagination.selectPage(page, 5);
      res.send({
        xboxData: data[0],
        xboxPage: page,
        xboxMaxPage: max,
        xboxNextPage: nextpage < 20 ? page + 5 : undefined,
        xboxPrevPage: previouspage >= 0 ? page - 5 : undefined,
      });
    } else {
      console.log('ELSE', page);
      data = await products.selectAll();
      nextpage = 5;
      res.send({
        xboxData: data[0],
        xboxPage: page,
        xboxMaxPage: max,
        xboxNextPage: nextpage,
        xboxPrevPage: previouspage >= 0 ? page - 5 : undefined,
      });
    }
  } catch (err) {
    console.log('ERROR: ', err);
  }
};

module.exports.xbox = xbox;
