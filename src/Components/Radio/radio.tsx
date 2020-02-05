import React from "react";
import radio from "./Radio.module.css";

export default class Radio extends React.Component{
    render(){
        console.log('Radio module css', {radio});
        
        return (
           <div>
                <label className={"radio-inline " + radio['test-radio-color']}><input type="radio" name="optradio" />Option 1</label>
                <label className="radio-inline"><input type="radio" name="optradio" />Option 2</label>
                <label className="radio-inline"><input type="radio" name="optradio" />Option 3</label>
           </div>
        );
        
    }
}

