import React from "react";
import { api } from "../utilits/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfoApi(), api.getCardsApi()])
      .then(([user, cards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards);
      })
      .catch((err) => {
        console.log(`Возникла глобальная ошибка - ${err}`);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-area">
          <img
            src={userAvatar}
            className="profile__avatar"
            alt="Аватар профиля"
          />
          <button
            className="profile__avatar-edit"
            onClick={props.onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__description">{userDescription}</p>
          <button
            className="button profile__button profile__button_type_edit"
            type="button"
            onClick={props.onEditProfile}
          ></button>
        </div>
        <button
          className="button profile__button profile__button_type_add"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
      {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={props.onCardClick} />
          ))}
      </section>
    </main>
  );
}

export default Main;
