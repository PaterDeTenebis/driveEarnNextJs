function bumperList() {
  let content = ` 
  <div id="carouselExampleControls2" class="carousel slide" data-bs-ride="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="itemPreview flexRowCenter">
          <div class="itemPreview_side">
            <div class="previeBg"></div>
            <img src="img/spoiler.png" alt="spoiler" class="bigIcon" />
          </div>
          <div class="itemPreview_side">
            <div class="carsCard_header_item flexRowCenter boxShadow">
              <div class="btnRound btnPink">
                <img src="img/e-lable.png" alt="currency icon" class="icon" />
              </div>
              <div class="textLight textMd">2500 drv</div>
            </div>
            <button class="btnMain btnPink ttu textLight fwb textMd">buy</button>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="itemPreview flexRowCenter">
          <div class="itemPreview_side">
            <div class="previeBg"></div>
            <img src="img/spoiler.png" alt="spoiler" class="bigIcon" />
          </div>
          <div class="itemPreview_side">
            <div class="carsCard_header_item flexRowCenter boxShadow">
              <div class="btnRound btnPink">
                <img src="img/e-lable.png" alt="currency icon" class="icon" />
              </div>
              <div class="textLight textMd">3300 drv</div>
            </div>
            <button class="btnMain btnPink ttu textLight fwb textMd">buy</button>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`;

  $('#spoilers').removeClass('btnBlue');
  $('#wheels').removeClass('btnBlue');
  $('#hood').removeClass('btnBlue');
  $(this).addClass('btnBlue');
  $('#visualDescr_card').html(content);
}

function wheelsList() {
  let content = ` 
  <div id="carouselExampleControls2" class="carousel slide" data-bs-ride="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="itemPreview flexRowCenter">
          <div class="itemPreview_side">
            <div class="previeBg"></div>
            <img src="img/spoiler.png" alt="spoiler" class="bigIcon" />
          </div>
          <div class="itemPreview_side">
            <div class="carsCard_header_item flexRowCenter boxShadow">
              <div class="btnRound btnPink">
                <img src="img/e-lable.png" alt="currency icon" class="icon" />
              </div>
              <div class="textLight textMd">4500 drv</div>
            </div>
            <button class="btnMain btnPink ttu textLight fwb textMd">buy</button>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="itemPreview flexRowCenter">
          <div class="itemPreview_side">
            <div class="previeBg"></div>
            <img src="img/spoiler.png" alt="spoiler" class="bigIcon" />
          </div>
          <div class="itemPreview_side">
            <div class="carsCard_header_item flexRowCenter boxShadow">
              <div class="btnRound btnPink">
                <img src="img/e-lable.png" alt="currency icon" class="icon" />
              </div>
              <div class="textLight textMd">3300 drv</div>
            </div>
            <button class="btnMain btnPink ttu textLight fwb textMd">buy</button>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`;

  $('#spoilers').removeClass('btnBlue');
  $(this).addClass('btnBlue');
  $('#hood').removeClass('btnBlue');
  $('#bumper').removeClass('btnBlue');
  $('#visualDescr_card').html(content);
}

function hoodList() {
  let content = ` 
  <div id="carouselExampleControls2" class="carousel slide" data-bs-ride="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="itemPreview flexRowCenter">
          <div class="itemPreview_side">
            <div class="previeBg"></div>
            <img src="img/spoiler.png" alt="spoiler" class="bigIcon" />
          </div>
          <div class="itemPreview_side">
            <div class="carsCard_header_item flexRowCenter boxShadow">
              <div class="btnRound btnPink">
                <img src="img/e-lable.png" alt="currency icon" class="icon" />
              </div>
              <div class="textLight textMd">5500 drv</div>
            </div>
            <button class="btnMain btnPink ttu textLight fwb textMd">buy</button>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="itemPreview flexRowCenter">
          <div class="itemPreview_side">
            <div class="previeBg"></div>
            <img src="img/spoiler.png" alt="spoiler" class="bigIcon" />
          </div>
          <div class="itemPreview_side">
            <div class="carsCard_header_item flexRowCenter boxShadow">
              <div class="btnRound btnPink">
                <img src="img/e-lable.png" alt="currency icon" class="icon" />
              </div>
              <div class="textLight textMd">3300 drv</div>
            </div>
            <button class="btnMain btnPink ttu textLight fwb textMd">buy</button>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`;

  $('#spoilers').removeClass('btnBlue');
  $('#wheels').removeClass('btnBlue');
  $(this).addClass('btnBlue');
  $('#bumper').removeClass('btnBlue');
  $('#visualDescr_card').html(content);
}

function spoilersList() {
  let content = ` 
  <div id="carouselExampleControls2" class="carousel slide" data-bs-ride="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="itemPreview flexRowCenter">
          <div class="itemPreview_side">
            <div class="previeBg"></div>
            <img src="img/spoiler.png" alt="spoiler" class="bigIcon" />
          </div>
          <div class="itemPreview_side">
            <div class="carsCard_header_item flexRowCenter boxShadow">
              <div class="btnRound btnPink">
                <img src="img/e-lable.png" alt="currency icon" class="icon" />
              </div>
              <div class="textLight textMd">1500 drv</div>
            </div>
            <button class="btnMain btnPink ttu textLight fwb textMd">buy</button>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="itemPreview flexRowCenter">
          <div class="itemPreview_side">
            <div class="previeBg"></div>
            <img src="img/spoiler.png" alt="spoiler" class="bigIcon" />
          </div>
          <div class="itemPreview_side">
            <div class="carsCard_header_item flexRowCenter boxShadow">
              <div class="btnRound btnPink">
                <img src="img/e-lable.png" alt="currency icon" class="icon" />
              </div>
              <div class="textLight textMd">3300 drv</div>
            </div>
            <button class="btnMain btnPink ttu textLight fwb textMd">buy</button>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`;

  $('#spoilers').addClass('btnBlue');
  $('#wheels').removeClass('btnBlue');
  $('#hood').removeClass('btnBlue');
  $('#bumper').removeClass('btnBlue');
  $('#visualDescr_card').html(content);
}

$('#spoilers').on('click', spoilersList);
$('#bumper').on('click', bumperList);
$('#wheels').on('click', wheelsList);
$('#hood').on('click', hoodList);

//technical tuning scripts ----->

function engineList() {
  let content = ` 
  <div id="carouselExampleControls3" class="carousel slide" data-bs-ride="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="itemPreview flexRowCenter">
          <div class="itemPreview_side">
            <div class="previeBg"></div>
            <img src="img/engine.png" alt="spoiler" class="bigIcon" />
          </div>
          <div class="itemPreview_side">
            <div class="carsCard_header_item flexRowCenter boxShadow">
              <div class="btnRound btnPink">
                <img src="img/e-lable.png" alt="currency icon" class="icon" />
              </div>
              <div class="textLight textMd">1500 drv</div>
            </div>
            <div class="carsCard_header_item flexRowCenter boxShadow">
              <div class="btnRound boxShadow">
                <img src="img/star.svg" alt="currency icon" class="icon" />
              </div>
              <div class="textLight ttu textMd">1 level</div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
      <div class="itemPreview flexRowCenter">
      <div class="itemPreview_side">
        <div class="previeBg"></div>
        <img src="img/engine.png" alt="spoiler" class="bigIcon" />
      </div>
      <div class="itemPreview_side">
        <div class="carsCard_header_item flexRowCenter boxShadow">
          <div class="btnRound btnPink">
            <img src="img/e-lable.png" alt="currency icon" class="icon" />
          </div>
          <div class="textLight textMd">2500 drv</div>
        </div>
        <div class="carsCard_header_item flexRowCenter boxShadow">
          <div class="btnRound boxShadow">
            <img src="img/star.svg" alt="currency icon" class="icon" />
          </div>
          <div class="textLight ttu textMd">2 level</div>
        </div>
      </div>
    </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`;

  $('#engine').addClass('btnBlue');
  $('#turbine').removeClass('btnBlue');
  $('#gasTanks').removeClass('btnBlue');
  $('#visualDescr_card2').html(content);
}

function turbineList() {
  let content = ` 
  <div id="carouselExampleControls3" class="carousel slide" data-bs-ride="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="itemPreview flexRowCenter">
          <div class="itemPreview_side">
            <div class="previeBg"></div>
            <img src="img/engine.png" alt="spoiler" class="bigIcon" />
          </div>
          <div class="itemPreview_side">
            <div class="carsCard_header_item flexRowCenter boxShadow">
              <div class="btnRound btnPink">
                <img src="img/e-lable.png" alt="currency icon" class="icon" />
              </div>
              <div class="textLight textMd">2500 drv</div>
            </div>
            <div class="carsCard_header_item flexRowCenter boxShadow">
              <div class="btnRound boxShadow">
                <img src="img/star.svg" alt="currency icon" class="icon" />
              </div>
              <div class="textLight ttu textMd">1 level</div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
      <div class="itemPreview flexRowCenter">
      <div class="itemPreview_side">
        <div class="previeBg"></div>
        <img src="img/engine.png" alt="spoiler" class="bigIcon" />
      </div>
      <div class="itemPreview_side">
        <div class="carsCard_header_item flexRowCenter boxShadow">
          <div class="btnRound btnPink">
            <img src="img/e-lable.png" alt="currency icon" class="icon" />
          </div>
          <div class="textLight textMd">3500 drv</div>
        </div>
        <div class="carsCard_header_item flexRowCenter boxShadow">
          <div class="btnRound boxShadow">
            <img src="img/star.svg" alt="currency icon" class="icon" />
          </div>
          <div class="textLight ttu textMd">2 level</div>
        </div>
      </div>
    </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`;

  $(this).addClass('btnBlue');
  $('#engine').removeClass('btnBlue');
  $('#gasTanks').removeClass('btnBlue');
  $('#visualDescr_card2').html(content);
}

function gasTanksList() {
  let content = ` 
  <div id="carouselExampleControls3" class="carousel slide" data-bs-ride="false">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="itemPreview flexRowCenter">
          <div class="itemPreview_side">
            <div class="previeBg"></div>
            <img src="img/engine.png" alt="spoiler" class="bigIcon" />
          </div>
          <div class="itemPreview_side">
            <div class="carsCard_header_item flexRowCenter boxShadow">
              <div class="btnRound btnPink">
                <img src="img/e-lable.png" alt="currency icon" class="icon" />
              </div>
              <div class="textLight textMd">4500 drv</div>
            </div>
            <div class="carsCard_header_item flexRowCenter boxShadow">
              <div class="btnRound boxShadow">
                <img src="img/star.svg" alt="currency icon" class="icon" />
              </div>
              <div class="textLight ttu textMd">1 level</div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
      <div class="itemPreview flexRowCenter">
      <div class="itemPreview_side">
        <div class="previeBg"></div>
        <img src="img/engine.png" alt="spoiler" class="bigIcon" />
      </div>
      <div class="itemPreview_side">
        <div class="carsCard_header_item flexRowCenter boxShadow">
          <div class="btnRound btnPink">
            <img src="img/e-lable.png" alt="currency icon" class="icon" />
          </div>
          <div class="textLight textMd">5500 drv</div>
        </div>
        <div class="carsCard_header_item flexRowCenter boxShadow">
          <div class="btnRound boxShadow">
            <img src="img/star.svg" alt="currency icon" class="icon" />
          </div>
          <div class="textLight ttu textMd">2 level</div>
        </div>
      </div>
    </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`;

  $(this).addClass('btnBlue');
  $('#engine').removeClass('btnBlue');
  $('#turbine').removeClass('btnBlue');
  $('#visualDescr_card2').html(content);
}

$('#engine').on('click', engineList);
$('#turbine').on('click', turbineList);
$('#gasTanks').on('click', gasTanksList);

// stat tabs scripts ----->

function todayList() {
  let content = `
  <div class="statHolder">
    <div class="cardDark">
      <div class="btnRound btnPink">
        <img src="img/e-lable.png" class="icon" />
      </div>
      <div class="textSec textMd">ern recieved</div>
      <div class="textLight textLg">
        +266 <span class="textSuccess textSm">+20.4%</span>
      </div>
    </div>
    <div class="cardDark">
      <div class="btnRound btnBlue">
        <img src="img/D.png" class="icon" />
      </div>
      <div class="textSec textMd">drv recieved</div>
      <div class="textLight textLg">
        +2660 <span class="textSuccess textSm">+20.4%</span>
      </div>
    </div>
    <div class="cardDark">
      <div class="btnRound btnPurple">
        <img src="img/location.png" class="icon" />
      </div>
      <div class="textSec textMd">distance (km)</div>
      <div class="textLight textLg">
        +15 <span class="textSuccess textSm">+20.4%</span>
      </div>
    </div>
    <div class="cardDark">
      <div class="textSec textMd">assets</div>
      <div class="w100 flexRowCenter">
        <div class="textLight textLg bBlue">
            ern
        </div>
        <div class="textLight textLg">
            1500
        </div>
      </div>
      <div class="w100 flexRowCenter">
        <div class="textLight textLg bPurp">
            drv
        </div>
        <div class="textLight textLg">
            1500
        </div>
      </div>
      <button class="btnMain btnBlue textLg textLight ttu fwb w100">withdraw</button>
    </div>
  </div>`;

  $('#all').removeClass('btnWhite');
  $('#month').removeClass('btnWhite');
  $('#today').addClass('btnWhite');
  $('#visualDescr_card3').html(content);
}

function monthList() {
  let content = `
  <div class="statHolder">
    <div class="cardDark">
      <div class="btnRound btnPink">
        <img src="img/e-lable.png" class="icon" />
      </div>
      <div class="textSec textMd">ern recieved</div>
      <div class="textLight textLg">
        +1266 <span class="textSuccess textSm">+20.4%</span>
      </div>
    </div>
    <div class="cardDark">
      <div class="btnRound btnBlue">
        <img src="img/D.png" class="icon" />
      </div>
      <div class="textSec textMd">drv recieved</div>
      <div class="textLight textLg">
        +2660 <span class="textSuccess textSm">+20.4%</span>
      </div>
    </div>
    <div class="cardDark">
      <div class="btnRound btnPurple">
        <img src="img/location.png" class="icon" />
      </div>
      <div class="textSec textMd">distance (km)</div>
      <div class="textLight textLg">
        +15 <span class="textSuccess textSm">+20.4%</span>
      </div>
    </div>
    <div class="cardDark">
      <div class="textSec textMd">assets</div>
      <div class="w100 flexRowCenter">
        <div class="textLight textLg bBlue">
            ern
        </div>
        <div class="textLight textLg">
            3500
        </div>
      </div>
      <div class="w100 flexRowCenter">
        <div class="textLight textLg bPurp">
            drv
        </div>
        <div class="textLight textLg">
            2500
        </div>
      </div>
      <button class="btnMain btnBlue textLg textLight ttu fwb w100">withdraw</button>
    </div>
  </div>`;

  $('#all').removeClass('btnWhite');
  $('#today').removeClass('btnWhite');
  $('#month').addClass('btnWhite');
  $('#visualDescr_card3').html(content);
}

function allList() {
  let content = `
  <div class="statHolder">
    <div class="cardDark">
      <div class="btnRound btnPink">
        <img src="img/e-lable.png" class="icon" />
      </div>
      <div class="textSec textMd">ern recieved</div>
      <div class="textLight textLg">
        +2266 <span class="textSuccess textSm">+20.4%</span>
      </div>
    </div>
    <div class="cardDark">
      <div class="btnRound btnBlue">
        <img src="img/D.png" class="icon" />
      </div>
      <div class="textSec textMd">drv recieved</div>
      <div class="textLight textLg">
        +3660 <span class="textSuccess textSm">+20.4%</span>
      </div>
    </div>
    <div class="cardDark">
      <div class="btnRound btnPurple">
        <img src="img/location.png" class="icon" />
      </div>
      <div class="textSec textMd">distance (km)</div>
      <div class="textLight textLg">
        +15 <span class="textSuccess textSm">+20.4%</span>
      </div>
    </div>
    <div class="cardDark">
      <div class="textSec textMd">assets</div>
      <div class="w100 flexRowCenter">
        <div class="textLight textLg bBlue">
            ern
        </div>
        <div class="textLight textLg">
            4500
        </div>
      </div>
      <div class="w100 flexRowCenter">
        <div class="textLight textLg bPurp">
            drv
        </div>
        <div class="textLight textLg">
            6500
        </div>
      </div>
      <button class="btnMain btnBlue textLg textLight ttu fwb w100">withdraw</button>
    </div>
  </div>`;

  $('#month').removeClass('btnWhite');
  $('#today').removeClass('btnWhite');
  $('#all').addClass('btnWhite');
  $('#visualDescr_card3').html(content);
}

$('#today').on('click', todayList);
$('#month').on('click', monthList);
$('#all').on('click', allList);

// range setter scipt ------>

function setRange() {
  var fuelMin = $('#rangeFuel').attr('min');
  var fuelMax = $('#rangeFuel').attr('max');
  $('#fuelMin').html(fuelMin);
  $('#fuelMax').html(fuelMax);

  var distanceMin = $('#rangeDistance').attr('min');
  var distanceMax = $('#rangeDistance').attr('max');
  $('#distanceMin').html(distanceMin + '&nbspkm');
  $('#distanceMax').html(distanceMax + '&nbspkm');
}

$(document).ready(setRange, spoilersList(), engineList(), todayList());
