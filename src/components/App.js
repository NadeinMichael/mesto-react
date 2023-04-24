import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import api from '../utils/Api';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  const [selectedCard, setSelectedCard] = useState(null);

  const [cards, setCards] = useState([]);

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  };

  const IsAnyPopupOpen =
    isEditProfilePopupOpen ||
    isAddPlacePopupOpen ||
    isEditAvatarPopupOpen ||
    selectedCard;

  useEffect(() => {
    function handleEscClose(event) {
      if (event.key === 'Escape') {
        closeAllPopups();
      }
    }
    if (IsAnyPopupOpen) {
      document.addEventListener('keyup', handleEscClose);
    }

    return () => {
      document.removeEventListener('keyup', handleEscClose);
    };
  }, [IsAnyPopupOpen]);

  useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([resCards, resUser]) => {
        setUserName(resUser.name);
        setUserDescription(resUser.about);
        setUserAvatar(resUser.avatar);

        const cardList = resCards.map((card) => card);
        setCards(cardList);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={() => {
            setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
          }}
          onEditProfile={() => {
            setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
          }}
          onAddPlace={() => {
            setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
          }}
          userName={userName}
          userDescription={userDescription}
          userAvatar={userAvatar}
          cards={cards}
          onCardClick={(link) => {
            setSelectedCard(link);
          }}
        />
        <Footer />
      </div>
      <PopupWithForm
        title="Редактировать профиль"
        name="edit-profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__text"
          type="text"
          name="name"
          id="popup-name"
          minLength="2"
          maxLength="40"
          placeholder="Введите имя"
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
          placeholder="Введите профессию"
          required
        />
        <span className="popup__text-error popup-profession-error"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        name="add-place"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
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
        <input
          className="popup__text"
          type="url"
          name="popup-link"
          id="popup-link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__text-error popup-link-error"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Вы уверены?"
        name="delete-card"
        buttonText="Да"
      ></PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        name="edit-avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__text"
          type="url"
          name="link"
          id="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__text-error link-error"></span>
      </PopupWithForm>
      <ImagePopup
        isOpen={selectedCard}
        selectedCard={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
