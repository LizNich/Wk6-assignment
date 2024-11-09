import BlueImage from "../assets/twoelfblue.png";
import squeakSound from "../assets/squeak.mp3";

export default function UpgradeBlue({ buyBlue, blueCount }) {
  const clickSound = new Audio(squeakSound);
  const handleClick = () => {
    clickSound.play();
    buyBlue();
  };
  return (
    <div className="upgradeOptions">
      <div>Happy Blue Elf</div>
      <div>50</div>
      <div>+10</div>

      <div>
        <button id="blue-btn" onClick={handleClick}>
          <img
            src={BlueImage}
            width={50}
            height={50}
            alt="A Blue Elf"
            title="Buy a Blue Elf - click here!"
          />
        </button>
      </div>
      <div>{blueCount}</div>
    </div>
  );
}
