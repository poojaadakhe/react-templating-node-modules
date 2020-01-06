import React from "react";
import "./Radio.css";

export default class Radio extends React.Component{
    render(){
        return (
           <div>
                <label className="radio-inline"><input type="radio" name="optradio" />Option 1</label>
                <label className="radio-inline"><input type="radio" name="optradio" />Option 2</label>
                <label className="radio-inline"><input type="radio" name="optradio" />Option 3</label>
           </div>
        );
        
    }
}

