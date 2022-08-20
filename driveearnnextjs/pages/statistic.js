import { useState, useEffect } from 'react';
import $ from 'jquery';
import Menu from '../components/menu';
import Header from '../components/header';
import StatInfo from '../components/statInfo';
export default function Statistic() {
  const [propsInfo, setPropsInfo] = useState(false);

  const clickHandler = async (data) => {
    setPropsInfo({
      ernRecieved: data.ernRecieved,
      ernRecievedPercent: data.ernRecievedPercent,
      drvRecieved: data.drvRecieved,
      drvRecievedPercent: data.drvRecievedPercent,
      distance: data.distance,
      distancePrcent: data.distancePrcent,
      ernTotal: data.ernTotal,
      drvTotal: data.drvTotal,
    });
  };
  useEffect(() => {
    setPropsInfo({
      ernRecieved: 2500,
      ernRecievedPercent: 15,
      drvRecieved: 1500,
      drvRecievedPercent: 25,
      distance: 230,
      distancePrcent: 5,
      ernTotal: 12000,
      drvTotal: 9000,
    });
  }, []);
  return (
    <div className="wrapper">
      <Header heading="statistic" img="img/stat.svg" />
      <main className="main">
        <div className="visualSection">
          <div className="vlWrapper">
            <div className="visualList d-flex w100">
              <button
                className="visualList_item btnMain boxShadow  btnInfo textLight textMd ttu fwb btnWhite"
                id="today"
                onClick={(e) => {
                  e.preventDefault();
                  clickHandler({
                    ernRecieved: 2500,
                    ernRecievedPercent: 15,
                    drvRecieved: 1500,
                    drvRecievedPercent: 25,
                    distance: 230,
                    distancePrcent: 5,
                    ernTotal: 12000,
                    drvTotal: 9000,
                  });
                  $('.btnInfo').removeclassName('btnWhite');
                  $(e.currentTarget).addclassName('btnWhite');
                }}>
                today
              </button>
              <button
                className="visualList_item btnMain boxShadow btnInfo textLight textMd ttu fwb"
                id="month"
                onClick={(e) => {
                  e.preventDefault();
                  clickHandler({
                    ernRecieved: 20500,
                    ernRecievedPercent: 19,
                    drvRecieved: 10500,
                    drvRecievedPercent: 2.5,
                    distance: 2030,
                    distancePrcent: 15,
                    ernTotal: 19000,
                    drvTotal: 19000,
                  });
                  $('.btnInfo').removeclassName('btnWhite');
                  $(e.currentTarget).addclassName('btnWhite');
                }}>
                month
              </button>
              <button
                className="visualList_item btnMain boxShadow btnInfo textLight textMd ttu fwb"
                id="all"
                onClick={(e) => {
                  e.preventDefault();
                  clickHandler({
                    ernRecieved: 40500,
                    ernRecievedPercent: 17,
                    drvRecieved: 40500,
                    drvRecievedPercent: 13.5,
                    distance: 4030,
                    distancePrcent: 15.6,
                    ernTotal: 140000,
                    drvTotal: 24000,
                  });
                  $('.btnInfo').removeclassName('btnWhite');
                  $(e.currentTarget).addclassName('btnWhite');
                }}>
                all
              </button>
            </div>
          </div>
          <div className="visualDescr">
            <div id="visualDescr_card3">
              {propsInfo && (
                <StatInfo
                  ernRecieved={propsInfo.ernRecieved}
                  ernRecievedPercent={propsInfo.ernRecievedPercent}
                  drvRecieved={propsInfo.drvRecieved}
                  drvRecievedPercent={propsInfo.drvRecievedPercent}
                  distance={propsInfo.distance}
                  distancePrcent={propsInfo.distancePrcent}
                  ernTotal={propsInfo.ernTotal}
                  drvTotal={propsInfo.drvTotal}
                />
              )}
            </div>
          </div>
        </div>
      </main>
      <Menu />
    </div>
  );
}
