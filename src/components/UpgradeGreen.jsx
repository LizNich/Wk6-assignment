import GreenImage from "../assets/oneelfgreen.png";
export default function UpgradeGreen({ buyGreen, greenCount }) {
  return (
    <div className="upgradeOptions">
      <div>Lazy Green Elf</div>
      <div>10</div>
      <div>+1</div>

      <div>
        <button id="green-btn" onClick={buyGreen}>
          <img
            src={GreenImage}
            width={50}
            height={50}
            alt="Green Elf"
            title="Buy a Green Elf - click here!"
          />
        </button>
      </div>
      <div>{greenCount}</div>
    </div>
  );
}
