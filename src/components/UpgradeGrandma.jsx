export default function UpgradeGrandma({ buyGrandma, grandmaCount }) {
  return (
    <div className="upgradeOptions">
      <div>Grandma</div>
      <div>10</div>
      <div>+1</div>

      <div>
        <button id="grandma-btn" onClick={buyGrandma}>
          <img
            src="src/assets/grandma.png"
            width={50}
            height={50}
            alt="Grandma"
            title="Buy a Grandma - click here!"
          />
        </button>
      </div>
      <div>{grandmaCount}</div>
    </div>
  );
}
