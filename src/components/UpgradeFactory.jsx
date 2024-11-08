export default function UpgradeFactory({ buyFactory, factoryCount }) {
  return (
    <div className="upgradeOptions">
      <div>Cookie Factory</div>
      <div>500</div>
      <div>+100</div>

      <div>
        <button id="factory-btn" onClick={buyFactory}>
          <img
            src="src/assets/factory.png"
            width={50}
            height={50}
            alt="A Factory"
            title="Buy a Factory - click here!"
          />
        </button>
      </div>
      <div>{factoryCount}</div>
    </div>
  );
}
