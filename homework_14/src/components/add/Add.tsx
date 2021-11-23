import React from 'react';
import './Add.css';
import {Keep} from "../../App";

interface Props { // Объявление интерфейса пропсов
  text?: string;
  add: (keep:Keep) => void;
}

interface State { // Объявление интерфейса пропсов
  value: string;
}

export class Add extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.add = this.add.bind(this);
    this.change = this.change.bind(this);

    this.state = { value: "Добавте заметку в ваш TODO-лист"}
  }

  change(item: any)
  {
    const text: HTMLInputElement = item.target

    if (text != null) {
      this.setState({value: text.value});
    }
  }

  add()
  {
    this.props.add({text:this.state.value});
  }

  render() {
    return (
      <section className="container__item">
        <div className="container__append">
          <textarea value={this.state.value} onChange={this.change} />
          <input type="button" value="Добавить" onClick={this.add} />
        </div>
      </section>
    );
  }
}
