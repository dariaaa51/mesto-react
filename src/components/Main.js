function Main(props) {
  function handleEditAvatarClick() {
    document
      .querySelector(".popup_update-avatar")
      .classList.add("popup_opened");
  }

  function handleEditProfileClick() {
    document.querySelector(".popup_edit-profle").classList.add("popup_opened");
  }

  function handleAddPlaceClick() {
    document.querySelector(".popup_add-card").classList.add("popup_opened");
  }

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-area">
          <img src="#" className="profile__avatar" alt="Аватар профиля" />
          <button
            className="profile__avatar-edit"
            onClick={handleEditAvatarClick}
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name"></h1>
          <p className="profile__description"></p>
          <button
            className="button profile__button profile__button_type_edit"
            type="button"
            onClick={handleEditProfileClick}
          ></button>
        </div>
        <button
          className="button profile__button profile__button_type_add"
          type="button"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="elements"></section>
    </main>
  );
}

export default Main;
