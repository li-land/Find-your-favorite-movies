import React from "react";

export function Movie(props) {
  const { Title, Year, Type, Plot, Poster } = props;

  return (
    <div className="page__card card">
      <div className="card__item">
        <div className="card__image">
          <img src={Poster} alt={Title} />
        </div>
        <div className="card__description">
          <div className="card__title">{Title}</div>
          <div className="card__year">{Year}</div>
          <div className="card__plot">{Plot}</div>
          <div className="card__type">{Type}</div>
        </div>
      </div>
    </div>
  );
}
