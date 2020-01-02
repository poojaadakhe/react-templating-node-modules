
import React from 'react';

export interface Props {
    name: string,
    style?: React.CSSProperties
}

const Icon: React.FC<Props> = (props) => {
    let { name, style } = props;

    return (
        <i className={name} style={style}></i>
    )
}

export default Icon; 