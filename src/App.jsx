import { useState, useEffect } from "react";
import DisplayCookie from "./components/DisplayCookie";
import TableHeader from "./components/TableHeader";
import UpgradeGrandma from "./components/UpgradeGrandma";
import UpgradeFarm from "./components/UpgradeFarm";
import UpgradeFactory from "./components/UpgradeFactory";
import HitReset from "./components/HitReset";

export default function App() {
  const [cookies, setCookies] = useState(() => {
    return Number(localStorage.getItem("cookies")) || 0;
  });
  const [cps, setCps] = useState(() => {
    return Number(localStorage.getItem("cps")) || 0;
  });
  const [grandmaCount, setGrandmaCount] = useState(() => {
    return Number(localStorage.getItem("grandmaCount")) || 0;
  });
  const [farmCount, setfarmCount] = useState(() => {
    return Number(localStorage.getItem("farmCount")) || 0;
  });
  const [factoryCount, setfactoryCount] = useState(() => {
    return Number(localStorage.getItem("factoryCount")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("cookies", cookies);
    localStorage.setItem("cps", cps);
    localStorage.setItem("grandmaCount", grandmaCount);
    localStorage.setItem("farmCount", farmCount);
    localStorage.setItem("factoryCount", factoryCount);
  }, [cookies, cps, grandmaCount, farmCount, factoryCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCookies((current) => current + cps);
    }, 1000);

    return () => clearInterval(interval);
  }, [cps]);

  function incrementCookies() {
    setCookies(cookies + 1);
  }

  function buyGrandma() {
    if (cookies >= 10) {
      setCps(cps + 1);
      setCookies(cookies - 10);
      setGrandmaCount(grandmaCount + 1);
    }
  }

  function buyFarm() {
    if (cookies >= 50) {
      setCps(cps + 10);
      setCookies(cookies - 50);
      setfarmCount(farmCount + 1);
    }
  }

  function buyFactory() {
    if (cookies >= 500) {
      setCps(cps + 100);
      setCookies(cookies - 500);
      setfactoryCount(factoryCount + 1);
    }
  }

  function resetTotal() {
    setCps(0);
    setCookies(0);
    setGrandmaCount(0);
    setfarmCount(0);
    setfactoryCount(0);
    localStorage.removeItem("cookies");
    localStorage.removeItem("cps");
    localStorage.removeItem("grandmaCount");
    localStorage.removeItem("farmCount");
    localStorage.removeItem("factoryCount");
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
      <UpgradeGrandma buyGrandma={buyGrandma} grandmaCount={grandmaCount} />
      <UpgradeFarm buyFarm={buyFarm} farmCount={farmCount} />
      <UpgradeFactory buyFactory={buyFactory} factoryCount={factoryCount} />
      <HitReset resetTotal={resetTotal} />
    </div>
  );
}
