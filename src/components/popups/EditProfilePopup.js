import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      isOpen={isOpen}
      onClose={onClose}
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
  );
}

export default EditProfilePopup;
