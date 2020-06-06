import React from "react";
import "./App.css";

import {
  currencyList,
  tabsList,
  newsData,
  icon,
  menuItems,
  adv_image,
  weather,
  tv,
  live,
  visited
} from "./components/data";

import News from "./components/News";
import Watch from "./components/Watch";
import Search from "./components/Search";
import Weather from "./components/Weather";
import Map from "./components/Map";
import Tv from "./components/Tv";
import Visited from './components/Visited';

function App() {
  const tvTitle = () => {
    return (
      <>
        <div>Телепрограмма</div>
        <button>Эфир</button>
      </>
    );
  };
  return (
    <div className="container">
      <div className="background-element"> </div>{" "}
      <div className="highlight-window">
        <div className="highlight-overlay"> </div>{" "}
      </div>{" "}
      <div className="window">
        <News tabsList={tabsList} news={newsData} currencyList={currencyList} />

        <Watch
          icon={icon}
          title="Работа над ошибками"
          text="Смотрите на Яндексе и запоминайте"
        />

        <Search
          browserName={icon}
          menu={menuItems}
          text="фазы луны сегодня"
          advertising={adv_image}
        />

        <div className="other_blocks">
          <Weather title="Погода" icon={icon} weather={weather} />
          <Map title="Карта Германии" />
          <Tv title={tvTitle()} items={tv} />
          <Tv title='Эфир' items={live} />
          <Visited title='Посещаемое' items={visited} />
        </div>
      </div>{" "}
    </div>
  );
}

export default App;
