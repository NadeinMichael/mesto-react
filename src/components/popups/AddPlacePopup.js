import PopupWithForm from './PopupWithForm';
import { useState, useEffect } from 'react';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name,
      link,
    });
  }

  useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Новое место"
      name="add-place"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__text"
        type="text"
        name="popup-place"
        id="popup-place"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <span className="popup__text-error popup-place-error"></span>
      <input
        className="popup__text"
        type="url"
        name="popup-link"
        id="popup-link"
        placeholder="Ссылка на картинку"
        value={link}
        onChange={(event) => setLink(event.target.value)}
        required
      />
      <span className="popup__text-error popup-link-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
