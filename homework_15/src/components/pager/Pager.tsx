import React, {ReactNode, SyntheticEvent} from 'react';

import './Pager.css';

interface State {}

interface Props {
    darkTheme: boolean;
    page: number;
    limit: number;
    total: number;
    setNewPage: (page: number) => void;
    active?: boolean;
}

class Pager extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.handleSelectPage = this.handleSelectPage.bind(this);
    }

    handleSelectPage(e: SyntheticEvent): void {
        const page = Number(e.currentTarget.getAttribute('data-page')) - 1;
        this.props.setNewPage(page);
    }

    render(): ReactNode {

        return (
            <div className="pages">
                    <div className={`page ${this.props.active ? 'page_active' : ''} ${this.props.darkTheme ? 'page_dark' : ''} ${
                            this.props.darkTheme && this.props.active ? 'page_active_dark' : ''
                        }`}
                        data-page={this.props.page}
                        onClick={this.handleSelectPage} >
                        {this.props.page}
                    </div>
        </div>
    );
    }
}

export default Pager;