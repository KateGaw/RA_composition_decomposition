import React from "react";

// Блок "Посещаемое", находится под блоком поиска, во второй строке

const Visited = (props) => {
  return (
    <div className="visited">
      <div className="visited_header">{props.title}</div>
      <div className="visited_block">
        {props.items.map((item, index) =>
          index < 3 ? (
            <div key={index} className="item">
              <p className="visited_name">{item.name}&nbsp;</p>
              <p className="visited_desc"> - {item.desc}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Visited;
