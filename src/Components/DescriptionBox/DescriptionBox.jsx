import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox-navigator">
        <div className="descriptionBox-nav-box">Описание</div>
        <div className="descriptionBox-nav-box fade">Отзывы (122)</div>
      </div>
      <div className="descriptionBox-description">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          voluptates, maiores error minima asperiores aspernatur est alias
          recusandae ut rerum nulla a quis! Impedit voluptatem, nulla dolore
          maxime exercitationem hic tempora aliquam autem ut dicta in facilis
          atque neque quidem odio fugiat consequuntur enim dolor. Explicabo quod
          nam corporis ipsum?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
          tempora sit molestiae dolore impedit soluta autem qui quo ab aliquam.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
