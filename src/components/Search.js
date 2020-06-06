import React from "react";

// Блок поиска - включает в себя
// - символ браузера, 
// - ссылки на разные категории (MenuItems)
// - поисковую строку, 
// - кнопку поиска,
// - поле для рекламы

const Search = (props) => {
  const MenuItems = () => {
    return (
      <div className="menu">
        {props.menu.map((item, index) => (
          <p key={index} className="menu_items">
            {item}
          </p>
        ))}
      </div>
    );
  };
  return (
    <div className="search">
      <MenuItems />
      <div className="search_block">
        <img
          src={props.browserName}
          alt="browser_name"
          className="browser_name"
        />
        <input className="search_input" type="text" />
        <button onClick={() => console.log("find")} className="search_button">
          Найти
        </button>
      </div>
      <p className="example">Найдется все. Например, </p>
      <p className="example_text">{props.text}</p>
      <img src={props.advertising} alt="advertising" className="advertising" />
    </div>
  );
};

export default Search;
