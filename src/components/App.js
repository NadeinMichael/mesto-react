import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          handleEditAvatarClick={() => {
            const PopupEditAvatar = document.querySelector(
              '.popup_type_edit-avatar'
            );
            PopupEditAvatar.classList.add('popup_opened');
          }}
          handleEditProfileClick={() => {
            const PopupEditProfile = document.querySelector(
              '.popup_type_edit-profile'
            );
            PopupEditProfile.classList.add('popup_opened');
          }}
          handleAddPlaceClick={() => {
            const PopupAddPlace = document.querySelector(
              '.popup_type_add-place'
            );
            PopupAddPlace.classList.add('popup_opened');
          }}
        />
        <Footer />
      </div>
      <div className="popup popup_type_edit-profile">
        <div className="popup__container popup__overlay">
          <button
            className="popup__btn-close"
            type="button"
            aria-label="закрыть"
          ></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" name="edit-profile" noValidate>
            <input
              className="popup__text"
              type="text"
              name="name"
              id="popup-name"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__text-error popup-name-error"></span>
            <input
              className="popup__text"
              type="text"
              name="about"
              id="popup-profession"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__text-error popup-profession-error"></span>
            <button className="popup__submit" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_add-place">
        <div className="popup__container popup__overlay">
          <button
            className="popup__btn-close"
            type="button"
            aria-label="закрыть"
          ></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form" name="add-place" noValidate>
            <div className="popup__item">
              <input
                className="popup__text"
                type="text"
                name="popup-place"
                id="popup-place"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
              />
              <span className="popup__text-error popup-place-error"></span>
            </div>
            <div className="popup__item">
              <input
                className="popup__text"
                type="url"
                name="popup-link"
                id="popup-link"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="popup__text-error popup-link-error"></span>
            </div>
            <button className="popup__submit" type="submit">
              Создать
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_fullscreen-photo">
        <div className="popup__container-fullscreen-photo popup__overlay">
          <button
            className="popup__btn-close"
            type="button"
            aria-label="закрыть"
          ></button>
          <img className="popup__img" />
          <p className="popup__caption-img"></p>
        </div>
      </div>
      <div className="popup popup_type_delete-card">
        <div className="popup__container popup__overlay">
          <button
            className="popup__btn-close"
            type="button"
            aria-label="закрыть"
          ></button>
          <h2 className="popup__title popup__title_delete-card">Вы уверены?</h2>
          <button className="popup__submit" type="submit">
            Да
          </button>
        </div>
      </div>
      <div className="popup popup_type_edit-avatar">
        <div className="popup__container popup__overlay">
          <button
            className="popup__btn-close"
            type="button"
            aria-label="закрыть"
          ></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form" name="edit-avatar" noValidate>
            <div className="popup__item">
              <input
                className="popup__text"
                type="url"
                name="link"
                id="link"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="popup__text-error link-error"></span>
            </div>
            <button className="popup__submit" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <template id="card-template">
        <div className="gallery__element">
          <button
            className="btn-trash"
            type="button"
            aria-label="удалить"
          ></button>
          <img className="gallery__img" />
          <div className="gallery__info">
            <h2 className="gallery__title"></h2>
            <div className="gallery__like-wrapper">
              <button
                className="btn-like"
                type="button"
                aria-label="лайкнуть"
              ></button>
              <span className="gallery__like-counter">0</span>
            </div>
          </div>
        </div>
      </template>
    </div>
  );
}

export default App;
