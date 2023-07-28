import React from 'react';
import './App.css';
import { Inventory } from './Inventory';

function App() {
  
  return (
    <div className="Root">
      <div className="Menu">Item List</div>
      <div className="InventoryWrapper">
        <Inventory inventoryType="InventoryBackground"></Inventory>
        <Inventory inventoryType="InventoryBackground-Medium"></Inventory>
        <Inventory inventoryType="InventoryBackground-Hard"></Inventory>
      </div>
    </div>
  );
}

export default App;
