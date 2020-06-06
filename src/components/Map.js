import React from "react";

// Блок 'Карта', находится под блоком поиска в первой строке

const Map = (props) => {
  return(
    <div className="map">
    <h3>{props.title}</h3>
    <p>Расписания</p>
  </div>
  );
};

export default Map;
