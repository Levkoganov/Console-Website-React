import axios from 'axios';
import { useEffect, useState } from 'react';

function XboxCards() {
  useEffect(() => {
    getXboxData();
  }, [window.location.search]);

  // SAVE SERVER DATA IN A STATE
  const [dataOutPut, setDataOutPut] = useState([]);

  // GET DATA FROM SERVER
  const getXboxData = async () => {
    try {
      let res = await axios.get(`/xbox/${window.location.search}`);
      let getData = res.data.xboxData;
      setDataOutPut(getData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="xbox-items-header">XBOX GAMES</h1>
      <div className="xbox-items">
        {dataOutPut &&
          dataOutPut.map((item) => (
            <div key={item.idproducts}>
              <div className="card text-white bg-success mb-3 xbox-card">
                <div className="card-img">
                  <img
                    src="/images/xbox pics/xbox_logo.png"
                    className="card-img-top"
                    alt="xboximg"
                  />
                </div>
                <div className="card-header">
                  <h6 className="text-center">{item.productname}</h6>
                </div>
                <div className="card-body card-price-xbox">
                  <h6 className="text-center">{item.productprice}$</h6>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default XboxCards;
