import React from "react";
import vector from "../../sass/block/header/Vector.png";
import vector2 from "../../sass/block/header/Vector2.png";
import form1 from "../../sass/block/main/form1.png";
import circle1 from "../../sass/block/main/circle1.png";
import form2 from "../../sass/block/main/form2.png";
import circle2 from "../../sass/block/main/circle2.png";
import form3 from "../../sass/block/main/form3.png";
import circle3 from "../../sass/block/main/circle3.png";

export default function Main() {
  const Card = (props) => {
    return (
      <div className="card_container">
        <div>
          <div className="img_container">
            <img src={props.src} alt="" />
            <img src={props.srcCircle} alt="" />
            <div style={{ backgroundColor: props.color }}>
              <span>{props.num}</span>
            </div>
          </div>
          <p>{props.srcText}</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="50px"
          height="3px"
        >
          <path
            fillRule="evenodd"
            fill="rgb(190, 203, 216)"
            d="M0.000,-0.000 L50.000,-0.000 L50.000,3.000 L0.000,3.000 L0.000,-0.000 Z"
          />
        </svg>
        <p>{props.mainText}</p>
      </div>
    );
  };
  return (
    <main className="container">
      <div className="main__header d-flex  flex-column ">
        <div className="d-flex align-items-end justify-content-center ">
          <img src={vector} alt="" />
          <img src={vector2} alt="" />
        </div>
        <div className="main__header_head d-flex align-items-center  justify-content-center flex-column text-center">
          <p>Грибок – это опасная инфекция</p>
          <p>которая угрожает вам и вашим близким, ведь с каждым днем грибок</p>
        </div>
      </div>
      <div className="main__card d-flex row justify-content-center ">
        <Card
          src={form1}
          srcCircle={circle1}
          color="#ec9a6a"
          num="1"
          srcText="Сложным формам аллергии"
          mainText="Может появится сильная реакция
          на на привычную пищу, одежду,
          средства гигиены
          "
        />
        <Card
          src={form2}
          srcCircle={circle2}
          color="#e47643"
          num="2"
          srcText="Сложным формам аллергии"
          mainText="Может появится сильная реакция
          на на привычную пищу, одежду,
          средства гигиены
          "
        />
        <Card
          src={form3}
          srcCircle={circle3}
          color="#ec5b19"
          num="3"
          srcText="Сложным формам аллергии"
          mainText="Может появится сильная реакция
          на на привычную пищу, одежду,
          средства гигиены
          "
        />
      </div>
    </main>
  );
}
