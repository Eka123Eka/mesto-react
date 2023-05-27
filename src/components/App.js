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
      <body className="page">
        <Header />
        <Main
          onEditAvatar ={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace   ={handleAddPlaceClick}
          onCardClick  ={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name='edit-profile'
          title='Редактировать профиль'
          children={
            <>
              <label className="popup__label">
                <input className="popup__input-field" name="name-input"   type="text" placeholder="Имя"
                  minlength="2" maxlength="40" required />
                <span className="popup__input-error"></span>
              </label>
              <label className="popup__label">
                <input className="popup__input-field" name="career-input" type="text" placeholder="Род занятий"
                  minlength="2" maxlength="200" required />
                <span className="popup__input-error"></span>
              </label>
            </>
          }
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          name='add-photo'
          title='Новое место'
          children={
            <>
              <label className="popup__label">
                <input className="popup__input-field"   name="place-input"    type="text" placeholder="Назовите место"
                  minlength="2" maxlength="30" required />
                <span className="popup__input-error"></span>
              </label>
              <label className="popup__label">
                <input className="popup__input-field"   name="urlImage-input" type="url"
                  placeholder="Вставьте ссылку на фото места" required />
                <span className="popup__input-error"></span>
              </label>
            </>
          }
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          name='change-avatar'
          title='Обновить аватар'
          children={
            <>
              <label className="popup__label">
                <input className="popup__input-field"   name="urlAvatar-input" type="url"
                  placeholder="Вставьте ссылку на новый аватар" required />
                <span className="popup__input-error"></span>
              </label>
            </>
          }
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          name='remove-card'
          title='Вы уверены?'
        />
      </body>
    </div>
  );
}

export default App;
