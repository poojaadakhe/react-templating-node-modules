import React from "react";
import  '../../assets/css/bootstrap/dist/css/bootstrap.css';  
import '../../assets/css/bootstrap/dist/css/style2.css';
export interface Props {
	
}
const Tabs: React.FC<Props> = props => {
    
	return (
		<div className="artifi">
            <div className="row">
                <h1 className="artifi h1">hjkjhkljhkjhkj</h1>

                <div className="artifi alert alert-primary" role="alert">
                A simple primary alert—check it out!
                </div>

            <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown button
                    </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
        </div>
    </div>
	);
};

export default Tabs;
