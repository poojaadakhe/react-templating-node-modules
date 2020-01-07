import React from 'react';
import Icon from '../Icon/Icon';
import List from '../List/List';
import Button from '../Button/Button';
import { DemoData } from '../demodata';


export interface Props {
    title?: string,
    className?: string,
    selectedText?: any,
    selectedItem?: any,
    icon?: string,
    lists?: Array<any>,
    iconOnly?: boolean,
    data?: any[],
    btnClassName?: string,
    dropdownListClassName?: string,
    clickHandler?: (e: any) => void
}

const Dropdown: React.FC<Props> = (props) => {
    let { title, icon, data ,btnClassName,dropdownListClassName } = props;

    return (
        <div className="btn-group" title={title}>
            <Button
                classes={btnClassName ||'btn btn-default dropdown-toggle'}
                dataToggle='dropdown' label="selcet value "
            >
                <Icon className={icon || 'caret'} />
                <span className="caret-right-corner" ></span>
            </Button>
            <List demoData={data || DemoData}
                className='dropdown-menu' listClass = {dropdownListClassName || ''}
            />
        </div>
    )
}

export default Dropdown;
