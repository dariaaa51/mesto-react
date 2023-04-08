function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    // <template id="element-template" className="cards-template">
    <li className="element">
      <img
        src={card.link}
        alt="Picture"
        className="element__picture"
        onClick={handleClick}
      />
      <button
        className="element__button-delete"
        title="Удалить"
        type="button"
      ></button>
      <h2 className="element__title">{card.name}</h2>
      <div className="element__group">
        <button type="button" className="element__like" name="like"></button>
        <p className="element__count">{card.likes.length}</p>
      </div>
    </li>
    // </template>
  );
}

export default Card;
