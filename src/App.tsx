import React from "react";
import {Card} from './features/cards/Cards'
import {Filter} from './features/cards/Filter'

import "./App.css";



function App() {
  return (
    <div>
      <Filter/>
      <Card/>
    </div>
  );
}

export default App;
