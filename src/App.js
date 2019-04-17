import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const data = [
      {
        title: 'Ведем календарь занятий',
        description: 'Уточняем ваше свободное время для проведения консультаций'
      },
      {
        title: 'Помогаем провести оплату',
        description: 'Уточняем удобный способ оплаты вашей услуги'
      },
      {
        title: 'Принимаем записи от потенциальных слушателей',
        description: 'Создаем гугл форму'
      },
      {
        title: 'Помогаем установить видеосвязь',
        description: 'Создаем онлайн комнату для видеозвонка'
      }
    ];
    const middleSections = data.map((el,index) => {
      return (
        <div className="Section SectionMiddle">
          <div className="Text">
            <div className="TitleMiddle">{el.title}</div>
            <div className="DescriptionMiddle">{el.description}</div>
          </div>
          <div className="PictureWrapper">
            <div className="Picture"/>
          </div>
        </div>
      );
    });
    return (
      <div className="App">
        <div className="Page">

          <div className="Section SectionStart">
            <div className="Text">
              <div className="Title">Advice Secretary</div>
              <div className="Description">Сервис для организации консультаций</div>
            </div>
            <div className="PictureWrapper">
              <div className="Picture"/>
            </div>
          </div>

          {middleSections}

          <div className="Section SectionEnd">
            <div className="Text">
              <div className="Title">Контакты</div>
              <div className="Description">Свяжитесь с нами</div>
            </div>
            <div className="PictureWrapper">
              <div className="Picture"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
