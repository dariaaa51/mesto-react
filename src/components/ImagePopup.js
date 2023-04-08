function ImagePopup(props) {
  return (
    <div
      className={`popup popup__image-box ${
        props.card.name ? "popup_opened" : ""
      }`}
    >
      <figure className="popup__figure">
        <button
          className="popup__close-button"
          type="button"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__image"
          src={props.card.link}
          alt={props.card.name}
        />
        <figcaption className="popup__image-caption">
          {props.card.name}
        </figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
