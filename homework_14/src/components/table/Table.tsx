import React from 'react';
import './Table.css';

interface Props { // Объявление интерфейса пропсов
  id: number;
  text: string;
  remove: (id: number) => void;
}

interface State {
    show: boolean;
}

export class Table extends React.Component<Props, State>
{
    constructor(props: Props) {
        super(props);
        this.delete = this.delete.bind(this);

        this.state = {show: true};
    }

  delete() {
    console.log('delete');
    this.setState({
          show: false
      })
    this.props.remove(this.props.id)
  }

  render() {
    return (
        this.state.show ?
      <section className="container__item">
          <div className="container__title">
              <div className="container__title__id">{this.props.id}</div>
              <button className="container__delete" onClick={this.delete} ><img src="close.png" alt="Delete" /></button>
          </div>
          <div className="container__item__item">
          <p className="container__item__text">{ this.props.text != null ? this.props.text : 'ваш текст заметки' }</p>
        </div>
      </section> : ''
    );
  }
}
