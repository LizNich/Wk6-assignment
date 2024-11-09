import { useState, useEffect } from "react";
import DisplayCookie from "./components/DisplayCookie";
import TableHeader from "./components/TableHeader";
import UpgradeGreen from "./components/UpgradeGreen";
import UpgradeBlue from "./components/UpgradeBlue";
import UpgradePink from "./components/UpgradePink";
import HitReset from "./components/HitReset";

export default function App() {
  const [cookies, setCookies] = useState(() => {
    return Number(localStorage.getItem("cookies")) || 0;
  });
  const [cps, setCps] = useState(() => {
    return Number(localStorage.getItem("cps")) || 0;
  });
  const [greenCount, setGreenCount] = useState(() => {
    return Number(localStorage.getItem("greenCount")) || 0;
  });
  const [blueCount, setblueCount] = useState(() => {
    return Number(localStorage.getItem("blueCount")) || 0;
  });
  const [pinkCount, setpinkCount] = useState(() => {
    return Number(localStorage.getItem("pinkCount")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("cookies", cookies);
    localStorage.setItem("cps", cps);
    localStorage.setItem("greenCount", greenCount);
    localStorage.setItem("blueCount", blueCount);
    localStorage.setItem("pinkCount", pinkCount);
  }, [cookies, cps, greenCount, blueCount, pinkCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCookies((current) => current + cps);
    }, 1000);

    return () => clearInterval(interval);
  }, [cps]);

  function incrementCookies() {
    setCookies(cookies + 1);
  }

  function buyGreen() {
    if (cookies >= 10) {
      setCps(cps + 1);
      setCookies(cookies - 10);
      setGreenCount(greenCount + 1);
    }
  }

  function buyBlue() {
    if (cookies >= 50) {
      setCps(cps + 10);
      setCookies(cookies - 50);
      setblueCount(blueCount + 1);
    }
  }

  function buyPink() {
    if (cookies >= 500) {
      setCps(cps + 100);
      setCookies(cookies - 500);
      setpinkCount(pinkCount + 1);
    }
  }

  function resetTotal() {
    setCps(0);
    setCookies(0);
    setGreenCount(0);
    setblueCount(0);
    setpinkCount(0);
    localStorage.removeItem("cookies");
    localStorage.removeItem("cps");
    localStorage.removeItem("greenCount");
    localStorage.removeItem("blueCount");
    localStorage.removeItem("pinkCount");
  }

  return (
    <div>
      <h1>
        Lets Make <em>Christmas</em> Cookies!
      </h1>

      <div className="container">
        <div className="box box-one">
          <DisplayCookie incrementCookies={incrementCookies} />
        </div>
        <div className="box box-two">
          <div className="sub-box">
            <p>Cookies: {cookies}</p>
          </div>
          <div className="sub-box">
            <p>Cookies Per Second: {cps}</p>
          </div>
        </div>
      </div>

      <TableHeader />
      <UpgradeGreen buyGreen={buyGreen} greenCount={greenCount} />
      <UpgradeBlue buyBlue={buyBlue} blueCount={blueCount} />
      <UpgradePink buyPink={buyPink} pinkCount={pinkCount} />
      <HitReset resetTotal={resetTotal} />
    </div>
  );
}
