function PopupWithForm({ name, title, children, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button className="popup__button-close" type="button" aria-label="Закрыть форму" onClick={onClose}></button>
        <h2 className="popup__title">{`${title}`}</h2>
        <form className="popup__form" name={`main-form-${name}`} novalidate>
          <fieldset className="popup__set">
            {children}
            <button className="popup__submit" type="submit" aria-label="Подтвердить">Сохранить</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
