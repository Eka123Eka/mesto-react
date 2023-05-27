import { api } from "../utils/Api";
import { useState, useEffect } from "react";
import Card from "./Card";

function Main( { onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfoServer()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        setCards([...res]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <section className="profile" aria-label="Редактирование профиля">
        <div className="profile__container">
          <div className="profile__avatar">
            <img className="profile__avatar-photo" src = {userAvatar} alt="Аватарка пользователя."/>
            <button className="profile__avatar-button" type="button"
              aria-label="Обновление аватарки пользователя" onClick={onEditAvatar}></button>
          </div>
          <div className="profile__info">
            <div className="profile__edit">
              <h1 className="profile__name overflow-text">{userName}</h1>
              <button className="profile__edit-button" type="button"
                aria-label="Кнопка редактирования профиля." onClick={onEditProfile}></button>
            </div>
            <p className="profile__career overflow-text">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button"
          aria-label="Кнопка добавления фото." onClick={onAddPlace}></button>
      </section>
      <section className="cards" aria-label="секция с фотографиями посещенных мест">
        {cards.map((item) => (
          <Card
            name  = {item.name}
            link  = {item.link}
            likes = {[...item.likes]}
            onCardClick={onCardClick}
            key   = {item._id}
          />
        ))}
      </section>
    </main>
  )
}

export default Main;
