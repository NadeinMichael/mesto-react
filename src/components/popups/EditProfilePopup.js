import PopupWithForm from './PopupWithForm';
import { useState, useEffect, useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__text"
        type="text"
        name="name"
        id="popup-name"
        minLength="2"
        maxLength="40"
        value={name}
        onChange={(event) => setName(event.target.value)}
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
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />
      <span className="popup__text-error popup-profession-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
