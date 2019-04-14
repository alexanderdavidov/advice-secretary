import React, { Component } from 'react';
import Logo from './media/Logo.svg';
import './Top.css';

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
      <div className="Wrapper">
        <div className="AppTop">
          <img className="AppTopLogo" src={Logo} alt="Logo" />
          <div className="AppTopCompanyName">advice secretary</div>
        </div>
        <div className="AppJumbotron">
          <div className="AppJumbotronText">Экономьте время на организации вебинаров</div>
          <div className="AppJumbotronButton">Оставить заявку</div>
        </div>
      </div>
    );
  }
}

export default App;
