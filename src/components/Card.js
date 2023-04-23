function Card({ name, link, likes, onCardClick }) {
  function handleCardClick() {
    onCardClick({ link });
  }
  return (
    <div className="gallery__element">
      <button className="btn-trash" type="button" aria-label="удалить"></button>
      <img className="gallery__img" src={link} onClick={handleCardClick} />
      <div className="gallery__info">
        <h2 className="gallery__title">{name}</h2>
        <div className="gallery__like-wrapper">
          <button
            className="btn-like"
            type="button"
            aria-label="лайкнуть"
          ></button>
          <span className="gallery__like-counter">{likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
