function  Card ({ name, link, likes, onCardClick }) {

  function handleCardClick() {
    onCardClick({ name, link });
  }

  return (
    <article className="card">
      <img className="card__image" src={link} alt={name}  onClick={handleCardClick}/>
      <button className="card__trash-button" type="button" aria-label="Удалить карточку"></button>
      <div className="card__group">
        <h2 className="card__title overflow-text">{name}</h2>
        <div>
          <button className="card__like-button" type="button" aria-label="иконка лайк со счетчиком"></button>
          <p className="card__like-counter">{likes.length}</p>
        </div>
      </div>
    </article>
  );
};

export default Card;
