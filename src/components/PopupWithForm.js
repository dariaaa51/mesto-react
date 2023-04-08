function PopupWithForm(props) {
    return (
      <div className={`popup popup_${props.name}`}>
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <h3 className="popup__title">{props.title}</h3>
          <form className="popup__form" name={props.name} novalidate>
            {props.children}
            <button className="popup__submit-btn" type="submit" name="save">
              Сохранить
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default PopupWithForm;
