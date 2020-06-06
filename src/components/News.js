import React from "react";
import moment from "moment";
import "moment/locale/ru";
moment.locale("ru");

// Блок новостей - верхняя часть страницы. Разделено на несколько подблоков:
// - верхняя страница вкладок (Tabs)
// - список новостей (в блоке News)
// - курс валюты (Currency)

const News = (props) => {
  const date = moment(new Date()).format("LLLL");
  const Tabs = () => {
    return (
      <div className="tabs">
        {props.tabsList.map((item, index) =>
          index < 3 ? (
            <p className="tabs_item" key={index}>
              {item}
            </p>
          ) : null
        )}
        <p className="tabs_item tabs_date">{date}</p>
      </div>
    );
  };

  const Currency = () => {
    return (
      <div className="currency">
        {props.currencyList.map((item, index) =>
          index < 3 ? (
            <div key={index} className='currency_block'>
              <p className="currency_main">{item.main}</p>
              <p className="currency_value">{item.value}</p>
              <p className="currency_diff">{item.diff}</p>
            </div>
          ) : null
        )}
      </div>
    );
  };

  return (
    <div className='all_news'>
      <Tabs />
      <div className="news">
        {props.news.map((item, index) =>
          index < 5 ? (
            <div key={index} className='news_block'>
              <img src={item.icon} className='noicon' alt="icon" />
              <p className='news_text'>{item.text}</p>
            </div>
          ) : null
        )}
      </div>
      <Currency />
    </div>
  );
};

export default News;
