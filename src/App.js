import React, { Component } from 'react';
import './App.css';
import yo from './media/yo.png';
import First from './media/First.jpg';
import Calendar from './media/Calendar.svg';
import Money from './media/Money.svg';

class App extends Component {
  render() {
    const data = [
      {
        title: 'Ведем календарь занятий',
        description: 'Уточняем ваше свободное время для проведения консультаций',
        img: Calendar
      },
      {
        title: 'Помогаем провести оплату',
        description: 'Paypal, Яндекс.Деньги, Банковские карты',
        img: Money
      },
      {
        title: 'Принимаем записи от потенциальных слушателей',
        description: 'Создаем гугл форму',
        img: ''
      },
      {
        title: 'Помогаем установить видеосвязь',
        description: 'Создаем онлайн комнату для видеозвонка',
        img: ''
      },
      {
        title: 'Сбор статистики',
        description: 'Создаем онлайн комнату для видеозвонка',
        img: ''
      },
    ];
    const middleSections = data.map((el,index) => {
      return (
        <div key={index} className="SectionMiddle">
          <div className="Text">
            <div className="Title">{el.title}</div>
            <div className="Description">{el.description}</div>
          </div>
          <div className="PictureWrapper">
            <img className="Icon" src={el.img} alt="ElImg"/>
          </div>
        </div>
      );
    });
    return (
      <div className="App">

          <div className="SectionFirst">
            <div className="Text">
              <div className="Title"><img className="Yo" src={yo} alt="yo"/>Advice Secretary</div>
              <div className="Description">Сервис для организации консультаций</div>
            </div>
            <div className="PictureWrapper">
              <img className="Picture" src={First} alt="Picture"/>
            </div>
          </div>

          {middleSections}

          <div className="SectionEnd">
            <div className="Text">
              <div className="TitleBottom">Контакты</div>
              <div className="DescriptionBottom">Свяжитесь с нами</div>
            </div>
            <div className="PictureWrapper">
              <div className="Picture"/>
            </div>
          </div>


      </div>
    );
  }
}

export default App;
