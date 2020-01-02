import React from 'react';
import Icon from '../Icon/icon';
import List from '../List/list';
import Button from '../Button/button';
import { DemoData } from '../demodata';


export interface Props {
    title?: string,
    className?: string,
    selectedText?: any,
    selectedItem?: any,
    icon?: string,
    lists?: Array<any>,
    iconOnly?: boolean,
    clickHandler?: (e: any) => void
}

const Dropdown: React.FC<Props> = (props) => {
    let { title, icon } = props;

    return (
        <div className="btn-group" title={title}>
            <Button
                className='btn btn-default dropdown-toggle'
                dataToggle='dropdown' label="selcet value "
            >
                <Icon name={icon || 'caret'} />
                <span className="caret-right-corner" ></span>
            </Button>
            <List demoData={DemoData}
                className='dropdown-menu'
            />
        </div>
    )
}

export default Dropdown;
