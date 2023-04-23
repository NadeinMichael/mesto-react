function PopupWithForm({ title, name, buttonText, isOpen, onClose, children }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen}`} onClick={onClose}>
      <div
        className="popup__container popup__overlay"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="popup__btn-close"
          type="button"
          aria-label="закрыть"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name} noValidate>
          {children}
          <button className="popup__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
