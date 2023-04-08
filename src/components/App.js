// import logo from "./logo.svg";
// // import "./App.css";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const onEditProfile = () => {
    document
      .querySelector(".popup_update-avatar")
      .classList.add("popup_opened");
  };

  // function handleEditProfileClick() {
  //   document.querySelector('.popup_edit-profle').classList.add('popup_opened')

  // }

  // function handleAddPlaceClick() {
  //   document.querySelector('.popup_add-card').classList.add('popup_opened')

  // }

  return (
    <body className="page">
      <Header />
      <Main />
      <Footer />

      {/* Редактировать профиль  */}
      <PopupWithForm name="edit-profle" title="Редактировать профиль">
        <input
          id="popupNameInput"
          name="name"
          type="text"
          className="popup__text popup__text_type_name"
          placeholder="Имя"
          minlength="2"
          maxlength="40"
          required
        />
        <span id="popupNameInput-error" className="popup__input-error"></span>
        <input
          id="popupJobInput"
          name="about"
          type="text"
          className="popup__text popup__text_type_about"
          placeholder="О себе"
          minlength="2"
          maxlength="200"
          required
        />
        <span id="popupJobInput-error" className="popup__input-error"></span>
      </PopupWithForm>

      {/* Добавить карточку  */}
      <PopupWithForm name="add-card" title="Новое место">
        <input
          id="popupDesignationInput"
          name="name"
          type="text"
          className="popup__text popup__text_type_name"
          placeholder="Название"
          minlength="2"
          maxlength="30"
          required
        />
        <span
          id="popupDesignationInput-error"
          className="popup__input-error"
        ></span>
        <input
          id="popupPlaceInput"
          name="link"
          type="url"
          className="popup__text popup__text_type_about"
          placeholder="Ссылка на картинку"
          required
        />
        <span id="popupPlaceInput-error" className="popup__input-error"></span>
      </PopupWithForm>

      {/*Обновить аватар*/}
      <PopupWithForm name="update-avatar" title="Обновить аватар">
        <input
          className="popup__text"
          name="avatar"
          id="inputAvatarPopup"
          placeholder="Ссылка на фото"
          type="url"
          required
        />
        <span id="inputAvatarPopup-error" className="popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm name="delete" title="Вы уверены?" />
      <ImagePopup />

      {/* Шаблон */}
      <template id="element-template" className="cards-template">
        <li className="element">
          <img src="#" alt="_" className="element__picture" />
          <button
            className="element__button-delete"
            title="Удалить"
            type="button"
          ></button>
          <h2 className="element__title"></h2>
          <div className="element__group">
            <button
              type="button"
              className="element__like"
              name="like"
            ></button>
            <p className="element__count">15</p>
          </div>
        </li>
      </template>
    </body>
  );
}

export default App;
