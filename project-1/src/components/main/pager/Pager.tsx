import React, {SyntheticEvent} from 'react';

import './Pager.scss';

interface Props {
    darkTheme: boolean;
    page: number;
    limit: number;
    total: number;
    setNewPage: (page: number) => void;
    active?: boolean;
}

const Pager = function (props: Props) {

    function handleSelectPage(e: SyntheticEvent): void {
        const page = Number(e.currentTarget.getAttribute('data-page')) - 1;
        props.setNewPage(page);
    }

    return (
            <div className="pages">
                    <div className={`page ${props.active ? 'page_active' : ''} ${props.darkTheme ? 'page_dark' : ''} ${
                            props.darkTheme && props.active ? 'page_active_dark' : ''
                        }`}
                        data-page={props.page}
                        onClick={handleSelectPage} >
                        {props.page}
                    </div>
        </div>
    );
}

export default Pager;