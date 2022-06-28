import React, { useState, useEffect } from "react";
import "./styled.css";

const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, []);

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="slideshow">
      <img className="mainImg" src={imgs[index]} />
      <div className="actions">
        <button onClick={prev}>👈</button>
        <button onClick={next}>👉</button>
      </div>
    </div>
  );
};

function OtherPeople() {
  return (
    <div className="OtherPeople">
      <Slideshow
        imgs={[
          "https://kp-blog.s3.amazonaws.com/wp-content/uploads/2018/04/27173649/p%C3%B3s-venda-o-segredo-dos-casamentos-felizes-com-seus-clientes.jpg",
          "https://www.blink-it.pt/wp-content/uploads/2020/02/78_Clientes-satisfeitos.jpg",
          "https://i2.wp.com/blog.mundomidia.com/wp-content/uploads/2020/04/clientes-felizes.png?fit=900%2C900&ssl=1",
          "https://br.hubspot.com/hubfs/media/relatoriodevendas.jpeg",
        ]}
      />
    </div>
  );
}

export default OtherPeople;
