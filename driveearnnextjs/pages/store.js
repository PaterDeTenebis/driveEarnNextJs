import { useState, useEffect } from 'react';
import $ from 'jquery';
import Menu from '../components/menu';
import Header from '../components/header';
import Carousel from '../components/carousel';
import CarouselTech from '../components/carouselTech';

export default function Store() {
  const [propsCarousel, setPropsCarousel] = useState(false);
  const [propsCarousel2, setPropsCarousel2] = useState(false);

  const clickHandler = async (data) => {
    setPropsCarousel({
      img1: data.img1,
      price1: data.price1,
      img2: data.img2,
      price2: data.price2,
    });
  };

  const clickHandler2 = async (data) => {
    setPropsCarousel2({
      img1: data.img1,
      price1: data.price1,
      img2: data.img2,
      price2: data.price2,
    });
  };

  useEffect(() => {
    setPropsCarousel({
      img1: 'img/spoiler.png',
      price1: 1500,
      img2: 'img/spoiler.png',
      price2: 2500,
    });
    setPropsCarousel2({
      img1: 'img/spoiler.png',
      price1: 1500,
      img2: 'img/spoiler.png',
      price2: 2500,
    });
  }, []);

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
                className="visualList_item btnMain boxShadow btnCarousel textLight textMd ttu fwb btnBlue"
                id="spoilers"
                onClick={(e) => {
                  e.preventDefault();
                  clickHandler({
                    img1: 'img/spoiler.png',
                    price1: 2500,
                    img2: 'img/spoiler.png',
                    price2: 3500,
                  });
                  $('.btnCarousel').removeClass('btnBlue');
                  $(e.currentTarget).addClass('btnBlue');
                }}>
                spoilers
              </button>
              <button
                className="visualList_item btnMain boxShadow btnCarousel textLight textMd ttu fwb"
                id="bumper"
                onClick={(e) => {
                  e.preventDefault();
                  clickHandler({
                    img1: 'img/spoiler.png',
                    price1: 4500,
                    img2: 'img/spoiler.png',
                    price2: 5500,
                  });
                  $('.btnCarousel').removeClass('btnBlue');
                  $(e.currentTarget).addClass('btnBlue');
                }}>
                bumper
              </button>
              <button
                className="visualList_item btnMain boxShadow btnCarousel textLight textMd ttu fwb"
                id="wheels"
                onClick={(e) => {
                  e.preventDefault();
                  clickHandler({
                    img1: 'img/spoiler.png',
                    price1: 6500,
                    img2: 'img/spoiler.png',
                    price2: 7500,
                  });
                  $('.btnCarousel').removeClass('btnBlue');
                  $(e.currentTarget).addClass('btnBlue');
                }}>
                wheels
              </button>
              <button
                className="visualList_item btnMain boxShadow btnCarousel textLight textMd ttu fwb"
                id="hood"
                onClick={(e) => {
                  e.preventDefault();
                  clickHandler({
                    img1: 'img/spoiler.png',
                    price1: 8500,
                    img2: 'img/spoiler.png',
                    price2: 9500,
                  });
                  $('.btnCarousel').removeClass('btnBlue');
                  $(e.currentTarget).addClass('btnBlue');
                }}>
                hood
              </button>
            </div>
          </div>
          <div className="visualDescr">
            <div className="cardDark" id="visualDescr_card">
              {propsCarousel && (
                <Carousel
                  img1={propsCarousel.img1}
                  price1={propsCarousel.price1}
                  img2={propsCarousel.img2}
                  price2={propsCarousel.price2}
                />
              )}
            </div>
          </div>
        </div>
        <div className="visualSection">
          <div className="textLg textLight ttu">technical tuning</div>
          <div className="vlWrapper">
            <div className="visualList d-flex w100">
              <button
                className="visualList_item btnMain boxShadow btnCarousel2 textLight textMd ttu fwb btnBlue"
                id="engine"onClick={(e) => {
                  e.preventDefault();
                  clickHandler2({
                    img1: 'img/spoiler.png',
                    price1: 10500,
                    img2: 'img/spoiler.png',
                    price2: 11500,
                  });
                  $('.btnCarousel2').removeClass('btnBlue');
                  $(e.currentTarget).addClass('btnBlue');
                }}>
                engine
              </button>
              <button
                className="visualList_item btnMain boxShadow btnCarousel2 textLight textMd ttu fwb"
                id="turbine"onClick={(e) => {
                  e.preventDefault();
                  clickHandler2({
                    img1: 'img/spoiler.png',
                    price1: 12500,
                    img2: 'img/spoiler.png',
                    price2: 13500,
                  });
                  $('.btnCarousel2').removeClass('btnBlue');
                  $(e.currentTarget).addClass('btnBlue');
                }}>
                turbine
              </button>
              <button
                className="visualList_item btnMain boxShadow btnCarousel2 textLight textMd ttu fwb"
                id="gasTanks"onClick={(e) => {
                  e.preventDefault();
                  clickHandler2({
                    img1: 'img/spoiler.png',
                    price1: 8500,
                    img2: 'img/spoiler.png',
                    price2: 9500,
                  });
                  $('.btnCarousel2').removeClass('btnBlue');
                  $(e.currentTarget).addClass('btnBlue');
                }}>
                gas tanks
              </button>
            </div>
          </div>
          <div className="visualDescr">
            <div className="cardDark" id="visualDescr_card2">
            {propsCarousel2 && (
                <CarouselTech
                  img1={propsCarousel2.img1}
                  price1={propsCarousel2.price1}
                  img2={propsCarousel2.img2}
                  price2={propsCarousel2.price2}
                />
              )}
            </div>
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
