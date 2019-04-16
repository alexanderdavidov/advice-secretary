import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const data = [
      {
        text: 'Уточняем ваше свободное время и информацию по оплате вашей услуги',
        media: {
          type: '',
          src: '',
        },
      },
      {
        text: 'Создаем гугл форму для потенциальных слушателей',
        media: {
          type: '',
          src: '',
        },
      },
      {
        text: 'Создаем онлайн комнату для видеозвонка',
        media: {
          type: '',
          src: '',
        },
      },
      {
        text: 'Предоставляем статистику по вашим слушателям',
        media: {
          type: '',
          src: '',
        },
      },
      {
        text: 'Следим за оплатой услуги',
        media: {
          type: '',
          src: '',
        },
      },
    ];
    return (
      <div className="App">
        <div className="Page">
          <div className="Section SectionStart">
            <div className="Text">
              <div className="CompanyName">Advice Secretary</div>
              <div className="Description">Сервис для организации вебинаров</div>
            </div>
            <div className="PictureWrapper">
              <div/>
              <div className="Picture"></div>
            </div>
          </div>
          <div className="Section SectionMiddle">
            <div className="Text">
              Уточняем ваше свободное время<br/> и информацию по оплате вашей услуги
            </div>
            <div className="PictureWrapper">
              <div/>
              <div className="Picture"></div>
            </div>
          </div>
          <div className="Section SectionMiddle">
            <div className="Text">
              Создаем гугл форму для потенциальных слушателей
            </div>
            <div className="PictureWrapper">
              <div/>
              <div className="Picture"></div>
            </div>
          </div>
          <div className="Section SectionMiddle">
            <div className="Text">
              Создаем онлайн комнату для видеозвонка
            </div>
            <div className="PictureWrapper">
              <div/>
              <div className="Picture"></div>
            </div>
          </div>
          <div className="Section SectionMiddle">
            <div className="Text">
              Предоставляем статистику по вашим слушателям
            </div>
            <div className="PictureWrapper">
              <div/>
              <div className="Picture"></div>
            </div>
          </div>
          <div className="Section SectionMiddle">
            <div className="Text">
              Следим за оплатой услуги
            </div>
            <div className="PictureWrapper">
              <div/>
              <div className="Picture"></div>
            </div>
          </div>
          <div className="Section SectionEnd">Контакты</div>
        </div>
      </div>
    );
  }
}

export default App;
