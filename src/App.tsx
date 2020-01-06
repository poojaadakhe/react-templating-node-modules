import React from 'react';
import './App.css';
import Button from './Components/Button/button';
import Dropdown from './Components/Dropdown/dropdown';
import List from './Components/List/list';
import Radio from './Components/Radio/radio';
import { DemoData } from './Components/demodata';
const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="row"><br></br>
          <div className="col-md-3">
            <Button className="btn btn-danger" label="Submit here" style={{color: "#ffffff"}} /> 
          </div>
          <div className="col-md-3">
            <Dropdown></Dropdown>
          </div>
          <div className="col-md-3">
            <List demoData={DemoData} listClass="list-group-item"></List>
          </div>
          <div className="col-md-3">
            <Radio></Radio>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
