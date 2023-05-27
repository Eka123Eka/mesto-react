import {useState} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen]       = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen]   = useState(false);
  const [selectedCard, setSelectedCard]                     = useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditAvatar ={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace   ={handleAddPlaceClick}
          onCardClick  ={handleCardClick}
        />
        <Footer />
        <PopupWithForm name='edit-profile' title='Редактировать профиль' isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups} buttonText = 'Сохранить'>
          <label className="popup__label">
            <input className="popup__input-field" name="name-input"   type="text" placeholder="Имя"
              minLength="2" maxLength="40" required />
            <span className="popup__input-error"></span>
          </label>
          <label className="popup__label">
            <input className="popup__input-field" name="career-input" type="text" placeholder="Род занятий"
              minLength="2" maxLength="200" required />
            <span className="popup__input-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm name='add-photo' title='Новое место' isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups} buttonText = 'Добавить'>
          <label className="popup__label">
            <input className="popup__input-field"   name="place-input"    type="text" placeholder="Назовите место"
              minLength="2" maxLength="30" required />
            <span className="popup__input-error"></span>
          </label>
          <label className="popup__label">
            <input className="popup__input-field"   name="urlImage-input" type="url"
              placeholder="Вставьте ссылку на фото места" required />
            <span className="popup__input-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm name='change-avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups} buttonText = 'Сохранить'>
          <label className="popup__label">
            <input className="popup__input-field"   name="urlAvatar-input" type="url"
              placeholder="Вставьте ссылку на новый аватар" required />
            <span className="popup__input-error"></span>
          </label>
        </PopupWithForm>

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          name='remove-card'
          title='Вы уверены?'
          buttonText = 'Да'
        />
      </div>
    </div>
  );
}

export default App;
