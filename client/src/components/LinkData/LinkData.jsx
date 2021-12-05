import React from "react";
import "./LinkData.css";

const LinkData = ({ linkData }) => {
  return (
    <div className="LinkData">
      <p>
        Сокращенная ссылка:{" "}
        {`${process.env.REACT_APP_CLIENT_URL}/${linkData.shortLink}`}
      </p>
      <p>Оригинальная ссылка: {linkData.originalLink}</p>
    </div>
  );
};

export default LinkData;
