import PopupWithForm from './PopupWithForm';

function ConfirmPopup({ isOpen, onClose, onDeleteCard }) {
  function handleSubmit(event) {
    event.preventDefault();
    onDeleteCard();
  }
  return (
    <PopupWithForm
      title="Вы уверены?"
      name="delete-card"
      buttonText="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    ></PopupWithForm>
  );
}

export default ConfirmPopup;
