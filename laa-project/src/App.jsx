import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./GlobalState";
import Pages from "./Pages";


function App(){
  
  return (
    <DataProvider>
    <BrowserRouter>
    <div>
      <Pages/>
      
    </div>
    </BrowserRouter>
    </DataProvider>
    
  );
};

export default App;
