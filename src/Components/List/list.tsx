import React from "react";
import "./list.css";
export interface Props {
    className?: string;
    // items: string;
}

// get  items(){
//     return <li className={className || 'list-group-item'}>Cras justo odio</li>;
// }

const ListItem: React.FC<any> = props => {
    let { className} = props;
    return <li className={className || 'list-group-item'}>Cras justo odio</li>;
}

// function ListItem(props: any) {
//     return <li className={className || 'list-group-item'}>Cras justo odio</li>;
// }

const List: React.FC<Props> = props => {
	let { className} = props;
  
        return (
           
            <ul  className={className || 'list-group'}>
                {ListItem}
            </ul>
        );
        
    
};
export default List;
