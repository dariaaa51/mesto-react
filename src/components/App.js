// import logo from "./logo.svg";
// // import "./App.css";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfile] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlace] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatar] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    setEditProfile(true);
  }

  function handleEditAvatarClick() {
    setEditAvatar(true);
  }

  function handleAddPlaceClick() {
    setAddPlace(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfile(false);
    setEditAvatar(false);
    setAddPlace(false);
    setSelectedCard({});
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        {/* Редактировать профиль  */}
        <PopupWithForm
          name="edit-profle"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText='Сохранить'
        >
          <input
            id="popupNameInput"
            name="name"
            type="text"
            className="popup__text popup__text_type_name"
            defaultValue=""
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span id="popupNameInput-error" className="popup__input-error"></span>
          <input
            id="popupJobInput"
            name="about"
            type="text"
            className="popup__text popup__text_type_about"
            defaultValue=""
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            required
          />
          <span id="popupJobInput-error" className="popup__input-error"></span>
        </PopupWithForm>

        {/* Добавить карточку  */}
        <PopupWithForm
          name="add-card"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText='Создать'
        >
          <input
            id="popupDesignationInput"
            name="name"
            type="text"
            className="popup__text popup__text_type_name"
            placeholder="Название"
            minLength="2"
            defaultValue=""
            maxLength="30"
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
            defaultValue=""
            className="popup__text popup__text_type_about"
            placeholder="Ссылка на картинку"
            required
          />
          <span
            id="popupPlaceInput-error"
            className="popup__input-error"
          ></span>
        </PopupWithForm>

        {/*Обновить аватар*/}
        <PopupWithForm
          name="update-avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText='Сохранить'
        >
          <input
            className="popup__text"
            name="avatar"
            id="inputAvatarPopup"
            placeholder="Ссылка на фото"
            defaultValue=""
            type="url"
            required
          />
          <span
            id="inputAvatarPopup-error"
            className="popup__input-error"
          ></span>
        </PopupWithForm>

        <PopupWithForm name="delete" title="Вы уверены?" buttonText='Сохранить' />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </>
  );
}

export default App;
