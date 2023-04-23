export const popupFormEdit = document.forms["popup-form_edit"];
export const userNameInput = popupFormEdit.querySelector('[name="name"]');
export const userJobInput = popupFormEdit.querySelector('[name="about"]');
export const profileProfession = document.querySelector(".profile__profession");
export const editProfileButton = document.querySelector(
  ".profile__edit-button"
);
export const profileName = document.querySelector(".profile__name");
export const profileAvatar = document.querySelector(".profile__avatar");
export const addPhotoButton = document.querySelector(".profile__add-button");
export const popupFormPhoto = document.forms["popup-form_photo"];
export const popupAvatarEdit = document.forms["popup-form_avatar"];
export const editAvatarButton = document.querySelector(
  ".profile__avatar-wrapper"
);
export const avatarImg = document.querySelector(".profile__avatar");

export const validationConfig = {
  formElement: ".popup__form",
  inputElement: ".popup__text",
  buttonElement: ".popup__submit",
  inputErrorClass: "popup__text_type_error",
  inactiveButtonClass: "popup__submit_disabled",
};
