import React from 'react';
import './Table.css';

interface Props { // Объявление интерфейса пропсов
  id?: number;
  text?: string;
  remove?: () => void;
}

export class Table extends React.Component<Props> {
  render() {
    return (
      <section className="container__item">
        <div className="container__item__item">
          <p className="container__item__text">{ this.props.text != null ? this.props.text : 'ваш текст заметки' }</p>
        </div>
      </section>
    );
  }
}
