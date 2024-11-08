import CookieImage from "../assets/XmasCookie.png";
import sleighBells from "../assets/jingle-bells.mp3";

export default function DisplayCookie({ incrementCookies }) {
  const clickSound = new Audio(sleighBells);
  const handleClick = () => {
    clickSound.play();
    incrementCookies();
  };

  return (
    <button className="cookie-btn">
      <img
        src={CookieImage}
        width={100}
        height={100}
        alt="A Cookie"
        title="Buy a Cookie - click here!"
        onClick={handleClick}
      />
    </button>
  );
}
