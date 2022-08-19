export default function Menu() {
  return (
    <div className="menu">
      <a href="#" className="bodylink">
        <div className="menuItem">
          <img src="img/stat.svg" alt="statitic" className="menuItem_img" />
          <span className="menuItem_text textLight textSm ttu">statitic</span>
        </div>
      </a>
      <a href="/wallet" className="bodylink">
        <div className="menuItem">
          <img src="img/wallet.svg" alt="statitic" className="menuItem_img" />
          <span className="menuItem_text textLight textSm ttu">wallet</span>
        </div>
      </a>
      <a href="/dashboard" className="bodylink">
        <div className="menuItem">
          <img src="img/dash.svg" alt="statitic" className="menuItem_img" />
          <span className="menuItem_text textLight textSm ttu">dashboard</span>
        </div>
      </a>
      <a href="#" className="bodylink">
        <div className="menuItem">
          <img src="img/star.svg" alt="statitic" className="menuItem_img" />
          <span className="menuItem_text textLight textSm ttu">pvp</span>
        </div>
      </a>
      <a href="/store" className="bodylink">
        <div className="menuItem">
          <img src="img/car.svg" alt="statitic" className="menuItem_img" />
          <span className="menuItem_text textLight textSm ttu">store</span>
        </div>
      </a>
    </div>
  );
}
