import React from "react";
import "./list.css";
export interface Props {
    className?: string;
    demoData?: any;
    listClass?:string;
    // items: string;
}

// get  items(){
//     return <li className={className || 'list-group-item'}>Cras justo odio</li>;
// }

const ListItem: React.FC<any> = props => {
    let { listClass, data } = props;
    return data ? <li className={listClass || 'list-group-item'}>{data.name}</li> : <b>Loading..</b>;
}

// function ListItem(props: any) {
//     return <li className={className || 'list-group-item'}>Cras justo odio</li>;
// }

const List: React.FC<Props> = props => {
    let { className, demoData ,listClass } = props;

    return (
        demoData ? <ul className={className || 'list-group'}>
            {demoData.listItems.map((item: any, i: number) => <ListItem key={i} data={item} listClass = {listClass} />)}
        </ul> : <b>Loading</b>
    );


};
export default List;
