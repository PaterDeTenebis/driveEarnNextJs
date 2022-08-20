import Link from 'next/link';

export default function Menu() {
  return (
    <div className="menu">
      <Link href={'/statistic'}>
        <a className="bodylink">
          <div className="menuItem">
            <img src="img/stat.svg" alt="statitic" className="menuItem_img" />
            <span className="menuItem_text textLight textSm ttu">statistic</span>
          </div>
        </a>
      </Link>
      <Link href={'/wallet'}>
        <a className="bodylink">
          <div className="menuItem">
            <img src="img/wallet.svg" alt="wallte" className="menuItem_img" />
            <span className="menuItem_text textLight textSm ttu">wallet</span>
          </div>
        </a>
      </Link>
      <Link href={'/'}>
        <a className="bodylink">
          <div className="menuItem">
            <img src="img/dash.svg" alt="statitic" className="menuItem_img" />
            <span className="menuItem_text textLight textSm ttu">dashboard</span>
          </div>
        </a>
      </Link>
      <Link href={'#'}>
        <a className="bodylink">
          <div className="menuItem">
            <img src="img/star.svg" alt="statitic" className="menuItem_img" />
            <span className="menuItem_text textLight textSm ttu">pvp</span>
          </div>
        </a>
      </Link>
      <Link href={'/store'}>
        <a className="bodylink">
          <div className="menuItem">
            <img src="img/car.svg" alt="statitic" className="menuItem_img" />
            <span className="menuItem_text textLight textSm ttu">store</span>
          </div>
        </a>
      </Link>
    </div>
  );
}
