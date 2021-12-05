import React, { useState } from "react";
import "./LinkForm.css";
import LinkData from "../LinkData/LinkData";
import linkService from "../../services/LinkService";

const LinkForm = () => {
  const [error, setError] = useState("");
  const [link, setLink] = useState("");
  const [linkData, setLinkData] = useState("");

  const shortener = async () => {
    linkService
      .shortener(link)
      .then((res) => {
        setError("");
        setLink("");
        setLinkData(res.data);
      })
      .catch((err) => setError(err.response.data.error));
  };

  return (
    <div className="LinkForm">
      <span className="LinkForm__heading">Сокращение ссылок</span>
      <form className="LinkForm__form" onSubmit={(e) => e.preventDefault()}>
        <input
          className="LinkForm__input"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <button className="LinkForm__btn" onClick={shortener}>
          Сократить
        </button>
      </form>
      {error && <p className="LinkForm__error">{error}</p>}
      {linkData && <LinkData linkData={linkData} />}
    </div>
  );
};

export default LinkForm;
