export default function StatInfo(props) {
  return (
    <div class="statHolder">
      <div class="cardDark">
        <div class="btnRound btnPink">
          <img src="img/e-lable.png" class="icon" />
        </div>
        <div class="textSec textMd">ern recieved</div>
        <div class="textLight textLg">
          {props.ernRecieved} <span class="textSuccess textSm">{props.ernRecievedPercent+'%'}</span>
        </div>
      </div>
      <div class="cardDark">
        <div class="btnRound btnBlue">
          <img src="img/D.png" class="icon" />
        </div>
        <div class="textSec textMd">drv recieved</div>
        <div class="textLight textLg">
        {props.drvRecieved} <span class="textSuccess textSm">{props.drvRecievedPercent+'%'}</span>
        </div>
      </div>
      <div class="cardDark">
        <div class="btnRound btnPurple">
          <img src="img/location.png" class="icon" />
        </div>
        <div class="textSec textMd">distance (km)</div>
        <div class="textLight textLg">
          {props.distance} <span class="textSuccess textSm">{props.distancePrcent+'%'}</span>
        </div>
      </div>
      <div class="cardDark">
        <div class="textSec textMd">assets</div>
        <div class="w100 flexRowCenter">
          <div class="textLight textLg bBlue">ern</div>
          <div class="textLight textLg">{props.ernTotal}</div>
        </div>
        <div class="w100 flexRowCenter">
          <div class="textLight textLg bPurp">drv</div>
          <div class="textLight textLg">{props.drvTotal}</div>
        </div>
        <button class="btnMain btnBlue textLg textLight ttu fwb w100">withdraw</button>
      </div>
    </div>
  );
}
