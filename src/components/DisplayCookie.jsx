import CookieImage from "../assets/XmasCookie.png";
export default function DisplayCookie({ incrementCookies }) {
  return (
    <button className="cookie-btn">
      <img
        src={CookieImage}
        width={100}
        height={100}
        alt="A Cookie"
        title="Buy a Cookie - click here!"
        onClick={incrementCookies}
      />
    </button>
  );
}
