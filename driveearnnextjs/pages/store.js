import Menu from '../components/menu';
import Header from '../components/header';
import $ from 'jquery';

export default function Store() {
  return (
    <div className="wrapper">
      <Header heading="store" img="img/car.svg" />
      <main className="main">
        <div className="carsSection">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="false">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="carsCard">
                  <div className="carsCard_header flexRowCenter">
                    <div className="carsCard_header_item flexRowCenter boxShadow">
                      <div className="btnRound btnPink">
                        <img src="img/e-lable.png" alt="currency icon" className="icon" />
                      </div>
                      <div className="textLight textMd">2500 drv</div>
                    </div>
                    <div className="carsCard_header_item flexRowCenter boxShadow">
                      <div className="btnRound boxShadow">
                        <img src="img/wallet.svg" alt="currency icon" className="icon" />
                      </div>
                      <div className="textLight textMd">2500 drv</div>
                    </div>
                    <div className="carsCard_header_item flexCenter boxShadow">
                      <div className="textLight textMd">0 level</div>
                    </div>
                  </div>
                  <div className="carsCard_img">
                    <img className="bigIcon" src="img/level1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carsCard">
                  <div className="carsCard_header flexRowCenter">
                    <div className="carsCard_header_item flexRowCenter boxShadow">
                      <div className="btnRound btnPink">
                        <img src="img/e-lable.png" alt="currency icon" className="icon" />
                      </div>
                      <div className="textLight textMd">2700 drv</div>
                    </div>
                    <div className="carsCard_header_item flexRowCenter boxShadow">
                      <div className="btnRound boxShadow">
                        <img src="img/wallet.svg" alt="currency icon" className="icon" />
                      </div>
                      <div className="textLight textMd">2500 drv</div>
                    </div>
                    <div className="carsCard_header_item flexCenter boxShadow">
                      <div className="textLight textMd">1 level</div>
                    </div>
                  </div>
                  <div className="carsCard_img">
                    <img className="bigIcon" src="img/level1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carsCard">
                  <div className="carsCard_header flexRowCenter">
                    <div className="carsCard_header_item flexRowCenter boxShadow">
                      <div className="btnRound btnPink">
                        <img src="img/e-lable.png" alt="currency icon" className="icon" />
                      </div>
                      <div className="textLight textMd">3500 drv</div>
                    </div>
                    <div className="carsCard_header_item flexRowCenter boxShadow">
                      <div className="btnRound boxShadow">
                        <img src="img/wallet.svg" alt="currency icon" className="icon" />
                      </div>
                      <div className="textLight textMd">2500 drv</div>
                    </div>
                    <div className="carsCard_header_item flexCenter boxShadow">
                      <div className="textLight textMd">2 level</div>
                    </div>
                  </div>
                  <div className="carsCard_img">
                    <img className="bigIcon" src="img/level1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="shortstats">
            <div className="shortstats_item">
              <div className="btnRound btnBlue">
                <img className="icon" src="img/canister.png" alt="fuel tank" />
              </div>
              <div className="textMd textLight">4.5</div>
            </div>
            <div className="shortstats_item">
              <div className="btnRound btnRed">
                <img className="icon" src="img/timer.png" alt="timer" />
              </div>
              <div className="textMd textLight">7.5</div>
            </div>
            <div className="shortstats_item">
              <div className="btnRound btnGreen">
                <img className="icon" src="img/speedometer.png" alt="speedmeter" />
              </div>
              <div className="textMd textLight">4.4</div>
            </div>
            <button className="btnMain btnBlue ttu textLight fwb textMd">buy</button>
          </div>
        </div>
        <div className="visualSection">
          <div className="textLg textLight ttu">visual tuning</div>
          <div className="vlWrapper">
            <div className="visualList flexRowCenter">
              <button
                className="visualList_item btnMain boxShadow textLight textMd ttu fwb"
                id="spoilers">
                spoilers
              </button>
              <button
                className="visualList_item btnMain boxShadow textLight textMd ttu fwb"
                id="bumper">
                bumper
              </button>
              <button
                className="visualList_item btnMain boxShadow textLight textMd ttu fwb"
                id="wheels">
                wheels
              </button>
              <button
                className="visualList_item btnMain boxShadow textLight textMd ttu fwb"
                id="hood">
                hood
              </button>
            </div>
          </div>
          <div className="visualDescr">
            <div className="cardDark" id="visualDescr_card"></div>
          </div>
        </div>
        <div className="visualSection">
          <div className="textLg textLight ttu">technical tuning</div>
          <div className="vlWrapper">
            <div className="visualList d-flex w100">
              <button
                className="visualList_item btnMain boxShadow textLight textMd ttu fwb"
                id="engine">
                engine
              </button>
              <button
                className="visualList_item btnMain boxShadow textLight textMd ttu fwb"
                id="turbine">
                turbine
              </button>
              <button
                className="visualList_item btnMain boxShadow textLight textMd ttu fwb"
                id="gasTanks">
                gas tanks
              </button>
            </div>
          </div>
          <div className="visualDescr">
            <div className="cardDark" id="visualDescr_card2"></div>
          </div>
          <div className="shortstats">
            <div className="shortstats_item">
              <div className="btnRound btnBlue">
                <img className="icon" src="img/canister.png" alt="fuel tank" />
              </div>
              <div className="textMd textLight">4.5</div>
            </div>
            <div className="shortstats_item">
              <div className="btnRound btnRed">
                <img className="icon" src="img/timer.png" alt="timer" />
              </div>
              <div className="textMd textLight">7.5</div>
            </div>
            <div className="shortstats_item">
              <div className="btnRound btnGreen">
                <img className="icon" src="img/speedometer.png" alt="speedmeter" />
              </div>
              <div className="textMd textLight">4.4</div>
            </div>
            <button className="btnMain btnPink ttu textLight fwb textMd">buy</button>
          </div>
        </div>
      </main>
      <Menu />
    </div>
  );
}
