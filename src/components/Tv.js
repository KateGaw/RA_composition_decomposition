import React from "react";

// Блок для отображения записей формата "время/иконка название описание"
// используется для отображения блоков Телепрограмма и Эфир

const Tv = (props) => {
  return (
    <div className="tv">
      <div className="tv_header">{props.title}</div>
      <div className="tv_block">
        {props.items.map((item, index) =>
          index < 3 ? (
            <div key={index} className="item">
              <p className="tv_time">{item.time}</p>
              <p className="tv_title">{item.title}</p>
              <p className="tv_desc">{item.desc}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Tv;
