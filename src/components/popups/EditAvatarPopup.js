import PopupWithForm from './PopupWithForm';
import { useRef } from 'react';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const ref = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      link: ref.current.value,
    });

    ref.current.value = null;
  }
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="edit-avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={ref}
        className="popup__text"
        type="url"
        name="link"
        id="link"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__text-error link-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
