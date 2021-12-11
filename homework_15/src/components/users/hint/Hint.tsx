import React, { ReactNode, SyntheticEvent } from 'react';

import './Hint.css';

interface State {
    hovered: boolean;
}

interface Props {
    children: ReactNode;
    text: string;
}

export default class Hint extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hovered: false };
        this.mouseOut = this.mouseOut.bind(this);
        this.mouseOver = this.mouseOver.bind(this);
    }

    mouseOver(e: SyntheticEvent) {
        this.setState({ hovered: true });
        e.stopPropagation();
    }

    mouseOut(e: SyntheticEvent) {
        this.setState({ hovered: false });
        e.stopPropagation();
    }

    render() {
        return (
            <div className="hint" onMouseOut={this.mouseOut} onMouseOver={this.mouseOver}>
                {this.state.hovered && <div className="hint__helper">{this.props.text}</div>}
                {this.props.children}
            </div>
        );
    }
}