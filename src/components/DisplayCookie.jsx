export default function DisplayCookie({ incrementCookies }) {
  return (
    <button className="cookie-btn">
      <img
        src="src/assets/XmasCookie.png"
        width={100}
        height={100}
        alt="A Cookie"
        title="Buy a Cookie - click here!"
        onClick={incrementCookies}
      />
    </button>
  );
}
