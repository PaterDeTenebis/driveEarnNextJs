import Head from 'next/head';
import Image from 'next/image';
import Menu from '../components/menu';
import Header from '../components/header';

export default function Home() {
  return (
    <div className="wrapper">
      <Header heading="dashboard" img="img/dashboard_icon.png" />
      <main className="main">
        <div className="carCard">
          <div className="carCard_top">
            <button className="curBtn btnRound">
              <img className="icon" src="img/dashboard_icon.png" alt="dollar" />
            </button>
            <div className="holder">
              <div className="holder_top">
                <div className="textMd textSec">my balance (ern/drv)</div>
              </div>
              <div className="holder_bot">
                <button className="btnMain btnBlue textLight">ern - 2255 +</button>
                <button className="btnMain btnBlue textLight">drv - 2255 +</button>
              </div>
            </div>
          </div>
          <div className="carCard_bot">
            <div className="carCard_botImg">
              <img className="carCard_botImg_item" src="../img/level1.png" alt="car level 1" />
            </div>
          </div>
        </div>
        <div className="shortstats">
          <div className="shortstats_item">
            <div className="btnRound btnBlue">
              <img className="icon" src="img/canister.png" alt="fuel tank" />
            </div>
            <div className="textSm textLight">4.5</div>
          </div>
          <div className="shortstats_item">
            <div className="btnRound btnRed">
              <img className="icon" src="img/timer.png" alt="timer" />
            </div>
            <div className="textSm textLight">7.5</div>
          </div>
          <div className="shortstats_item">
            <div className="btnRound btnGreen">
              <img className="icon" src="img/speedometer.png" alt="speedmeter" />
            </div>
            <div className="textSm textLight">4.4</div>
          </div>
          <button className="btnMain btnBlue textLight textSm">upgrade</button>
        </div>
        <div className="statsSingle">
          <div className="statsSingle_icon btnRound btnBlue">
            <img className="icon" src="../img/fuel-pump.png" alt="fuel pump" />
          </div>
          <div className="statsSingle_info">
            <div className="textLight textMd">fuel left</div>
            <div className="range">
              <input
                className="rangeInput"
                id="rangeFuel"
                type="range"
                min="0"
                max="15"
                value="4"
              />
              <div className="rangeMin rangeInd" id="fuelMin"></div>
              <div className="rangeMax rangeInd" id="fuelMax"></div>
            </div>
          </div>
          <div className="statsSingle_add">
            <img className="bigIcon" src="img/plus.png" alt="add fuel" />
          </div>
        </div>
        <div className="statsSingle">
          <div className="statsSingle_icon btnRound boxShadow">
            <span className="textLight textSm">24 h</span>
          </div>
          <div className="statsSingle_info">
            <div className="textLight textMd">fuel left</div>
            <div className="range">
              <input
                className="rangeInput"
                id="rangeDistance"
                type="range"
                min="0"
                max="1000"
                value="4"
              />
              <div className="rangeMin rangeInd" id="distanceMin"></div>
              <div className="rangeMax rangeInd" id="distanceMax"></div>
            </div>
          </div>
          <div className="statsSingle_add">
            <img className="bigIcon" src="img/plus.png" alt="add fuel" />
          </div>
        </div>
        <div className="statsSingle singleEarned">
          <div className="statsSingle_icon btnRound btnPink">
            <img className="icon" src="img/e-lable.png" alt="earned lable" />
          </div>
          <div className="statsSingle_info singleEarned_info">
            <div className="textSec textMd">total earned (ern/drv)</div>
            <div className="textLight textMd">
              drv + 266 <span className="textSuccess textSm">+20.4%</span>
            </div>
          </div>
        </div>
        <Menu />
      </main>
    </div>
  );
}
