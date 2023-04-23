import Card from './Card';

function Main({
  onCardClick,
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  userName,
  userDescription,
  userAvatar,
  cards,
}) {
  return (
    <main className="main">
      <section className="profile">
        <div onClick={onEditAvatar} className="profile__avatar-wrapper">
          <img className="profile__avatar" src={userAvatar} alt="аватар" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="исправить"
            onClick={onEditProfile}
          ></button>
          <p className="profile__profession">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="добавить"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="gallery">
        {cards.length ? (
          cards.map((card) => (
            <Card key={card._id} {...card} onCardClick={onCardClick} />
          ))
        ) : (
          <p> Картинок нет</p>
        )}
      </section>
    </main>
  );
}

export default Main;
