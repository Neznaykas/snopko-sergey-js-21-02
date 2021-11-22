import React from 'react'
import './Add.css'
import {number} from "prop-types";

interface State { // Объявление интерфейса пропсов
    text: string;
}

export class Add extends React.Component<State> {
    //const [value,setValue] = useState("");

    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.state.text = ''
    }

    change(item) {
       console.log(item.target.value);
        //item.target.value

       this.setState({text: this.state});
    }

    add()
    {
        console.log('append');
    }

    render() {
        return <section className="container__item">
            <div className="container__append">
                <textarea value={this.state.text} onChange={this.change}/>
                <input type="button" value="Добавить" onClick={this.add}/>
            </div>
        </section>
    }
}