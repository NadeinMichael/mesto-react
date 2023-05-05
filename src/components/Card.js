import { useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  function handleCardClick() {
    onCardClick(card.link);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card._id);
  }

  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `btn-like ${isLiked && 'btn-like_active'}`;

  return (
    <div className="gallery__element">
      {isOwn && (
        <button
          className="btn-trash"
          type="button"
          aria-label="удалить"
          onClick={handleDeleteClick}
        />
      )}
      <img className="gallery__img" src={card.link} onClick={handleCardClick} />
      <div className="gallery__info">
        <h2 className="gallery__title">{card.name}</h2>
        <div className="gallery__like-wrapper">
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="лайкнуть"
            onClick={handleLikeClick}
          />
          <span className="gallery__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
