
import React from 'react';

export interface Props {
    className: string,
    style?: React.CSSProperties
}

const Icon: React.FC<Props> = (props) => {
    let { className, style } = props;

    return (
        <i className={className} style={style}></i>
    )
}

export default Icon; 