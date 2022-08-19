import Menu from "../components/menu";
import Header from "../components/header";

export default function Wallet() {
  return (
    <div className="wrapper">
     <Header heading="wallet" img="img/wallet.svg" />
      <main className="main">
        <div className="carouselWrapper">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="false">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="carInd active"
                aria-current="true"
                aria-label="Slide 1"></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                className="carInd"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="walletCard">
                  <div className="walletCard_top">
                    <div className="walletCard_topItem">
                      <span className="textLight textMd">my drv account</span>
                      <div className="textSec textMd">1 km = 1 drv</div>
                    </div>
                    <div className="walletCard_topItem">
                      <button className="btnMain textLight textMd">statistic</button>
                    </div>
                  </div>
                  <div className="walletBalance">
                    <div className="textLight textXl">
                      1000 <span className="textMd">drv</span>
                    </div>
                  </div>
                  <div className="walletCard_top">
                    <div className="walletCard_topItem">
                      <div className="textSec textMd">
                        drv multiplyer <button className="btnSmall textLight">?</button>
                      </div>
                      <span className="textLight textMd">x1</span>
                    </div>
                    <div className="walletCard_topItem">
                      <button className="btnRound btnBlue textLight textMd">
                        <img src="img/e-lable.png" alt="e-lable" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="walletCard">
                  <div className="walletCard_top">
                    <div className="walletCard_topItem">
                      <span className="textLight textMd">my drv account 2</span>
                      <div className="textSec textMd">1 km = 2 drv</div>
                    </div>
                    <div className="walletCard_topItem">
                      <button className="btnMain textLight textMd">statistic</button>
                    </div>
                  </div>
                  <div className="walletBalance">
                    <div className="textLight textXl">
                      3000 <span className="textMd">drv</span>
                    </div>
                  </div>
                  <div className="walletCard_top">
                    <div className="walletCard_topItem">
                      <div className="textSec textMd">
                        drv multiplyer <button className="btnSmall textLight">?</button>
                      </div>
                      <span className="textLight textMd">x2</span>
                    </div>
                    <div className="walletCard_topItem">
                      <button className="btnRound btnBlue textLight textMd">
                        <img src="img/e-lable.png" alt="e-lable" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="walletLog">
          <div className="textLight textLg">today</div>
          <div className="statsSingle">
            <div className="statsSingle_icon btnRound btnBlue">
              <span className="textLight textLg">D</span>
            </div>
            <div className="statsSingle_info singleEarned_info">
              <div className="textLight textLg">25000 drv</div>
              <div className="textSec textMd">Jul 19, 12:30</div>
            </div>
            <div className="d-flex align-items-center">
              <div className="textLight textLg mr">+25000</div>
              <div className="statsSingle_add bordered">
                <img className="icon" src="img/e-small.png" alt="e-currency" />
              </div>
            </div>
          </div>
          <div className="statsSingle">
            <div className="statsSingle_icon btnRound btnBlue">
              <span className="textLight textLg">D</span>
            </div>
            <div className="statsSingle_info singleEarned_info">
              <div className="textLight textLg">25000 drv</div>
              <div className="textSec textMd">Jul 19, 12:30</div>
            </div>
            <div className="d-flex align-items-center">
              <div className="textLight textLg mr">+25000</div>
              <div className="statsSingle_add bordered">
                <img className="icon" src="img/e-small.png" alt="e-currency" />
              </div>
            </div>
          </div>
          <div className="statsSingle">
            <div className="statsSingle_icon btnRound btnBlue">
              <span className="textLight textLg">D</span>
            </div>
            <div className="statsSingle_info singleEarned_info">
              <div className="textLight textLg">25000 drv</div>
              <div className="textSec textMd">Jul 19, 12:30</div>
            </div>
            <div className="d-flex align-items-center">
              <div className="textLight textLg mr">+25000</div>
              <div className="statsSingle_add bordered">
                <img className="icon" src="img/e-small.png" alt="e-currency" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Menu />
    </div>
  );
}
