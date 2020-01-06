import React from "react";
import "./list.css";

export interface Props {
    className?: string;
    style?: object;
    demoData?: any;
    listClass?:string;
}

const ListItem: React.FC<any> = props => {
    let { listClass, data,style } = props;
    return data ? <li className={listClass || 'list-group-item'} style={style}>{data.name}</li> : <b>Loading..</b>;
}

const List: React.FC<Props> = props => {
    let { className, demoData ,listClass,style } = props;

    return (
        demoData ? <ul className={className || 'list-group'} style={style}> 
            {demoData.listItems.map((item: any, i: number) => <ListItem key={i} data={item} listClass = {listClass} />) }
        </ul> : <b>Loading</b>
    );
};
export default List;
