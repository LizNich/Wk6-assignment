export default function UpgradeFarm({ buyFarm, farmCount }) {
  return (
    <div className="upgradeOptions">
      <div>Cookie Farm</div>
      <div>50</div>
      <div>+10</div>

      <div>
        <button id="farm-btn" onClick={buyFarm}>
          <img
            src="src/assets/tractor.png"
            width={50}
            height={50}
            alt="A Farm"
            title="Buy a Farm - click here!"
          />
        </button>
      </div>
      <div>{farmCount}</div>
    </div>
  );
}
