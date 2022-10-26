import React from 'react';
import './App.css';
import Button from "@monorepo/button";
import Input from "@monorepo/input";
import {Icon, SvgIcon} from "@monorepo/icons";


function App() {
  return (
    <div className="App">
        <Button content={"lodfkdslfksd"}/>
        <Input/>
        <Icon name="delete_0" />
        <Icon name="error_0" />
        <Icon name="function_0" />
        <Icon name="shared_0" />
        <SvgIcon name="function_0" />
        <SvgIcon name="plus_0" />
    </div>
  );
}

export default App;
