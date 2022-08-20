export default function Carousel(props) {
    return(
        <div id="carousel" className="carousel slide" data-bs-ride="false">
            <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="itemPreview flexRowCenter">
                <div className="itemPreview_side">
                    <div className="previeBg"></div>
                    <img src={props.img1} alt="" className="bigIcon" />
                </div>
                <div className="itemPreview_side">
                    <div className="carsCard_header_item flexRowCenter boxShadow">
                    <div className="btnRound btnPink">
                        <img src="img/e-lable.png" alt="currency icon" className="icon" />
                    </div>
                    <div className="textLight textMd">{props.price1}</div>
                    </div>
                    <button className="btnMain btnPink ttu textLight fwb textMd">buy</button>
                </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="itemPreview flexRowCenter">
                <div className="itemPreview_side">
                    <div className="previeBg"></div>
                    <img src={props.img2} alt="" className="bigIcon" />
                </div>
                <div className="itemPreview_side">
                    <div className="carsCard_header_item flexRowCenter boxShadow">
                    <div className="btnRound btnPink">
                        <img src="img/e-lable.png" alt="currency icon" className="icon" />
                    </div>
                    <div className="textLight textMd">{props.price2}</div>
                    </div>
                    <button className="btnMain btnPink ttu textLight fwb textMd">buy</button>
                </div>
                </div>
            </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}