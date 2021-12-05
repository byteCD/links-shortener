import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Home.css";
import LinkForm from "../../components/LinkForm/LinkForm";
import linkService from "../../services/LinkService";

const Home = () => {
  const params = useParams();
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    if (params.id) {
      setIsLoaded(false);

      linkService
        .getLink(params.id)
        .then((res) => (window.location.href = res.data.originalLink))
        .catch((err) => {
          setError(err.response.data.error);
          setIsLoaded(true);
        });
    }
  }, []);

  return (
    <div className="Home">
      {error && <h1 className="Home__error">{error}</h1>}
      {!isLoaded && <h1>Пожалуйста, подождите...</h1>}
      {!error && isLoaded && <LinkForm />}
    </div>
  );
};

export default Home;
