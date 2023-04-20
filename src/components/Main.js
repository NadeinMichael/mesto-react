function Main({
  handleEditAvatarClick,
  handleEditProfileClick,
  handleAddPlaceClick,
}) {
  return (
    <main className="main">
      <section className="profile">
        <div
          onClick={handleEditAvatarClick}
          className="profile__avatar-wrapper"
        >
          <img
            className="profile__avatar"
            src="images/cuzco-avatar.jpg"
            alt="аватар"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name"></h1>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="исправить"
            onClick={handleEditProfileClick}
          ></button>
          <p className="profile__profession"></p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="добавить"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="gallery"></section>
    </main>
  );
}

export default Main;
