import React from "react";

// Блок "Смотрите на Яндексе"

const Watch = (props) => {
  return (
    <div className="all_watch">
      <img src={props.icon} className="watch_image" alt="watch_icon" />
      <h3 className='watch_title'>{props.title}</h3>
      <p className='watch_text'>{props.text}</p>
    </div>
  );
};

export default Watch;
