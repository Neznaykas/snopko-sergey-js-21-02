import React, {ReactNode, SyntheticEvent, useState} from 'react';

import './Hint.scss';

interface Props {
    children: ReactNode;
    text: string;
}

const Hint  = function (props: Props)
{
    const [hovered, setHovered] = useState(false);

    const mouseOver = (e: SyntheticEvent) => {
        setHovered(true);
        e.stopPropagation();
    }

    const mouseOut = (e: SyntheticEvent) => {
        setHovered(false);
        e.stopPropagation();
    }

        return (
            <div className="hint" onMouseOut={mouseOut} onMouseOver={mouseOver}>
                {hovered && <div className="hint__helper">{props.text}</div>}
                {props.children}
            </div>
        );
}

export default Hint;