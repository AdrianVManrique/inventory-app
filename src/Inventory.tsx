import { Item } from "./Item";
import {InventoryProps} from "./typings"
import './Item.css';
const ReactGridLayout = require('react-grid-layout');
const itemList = ["Magic_Potion", "Item_Magic", "Small_Barrel", "Giant_Bag", "Random_Tool"]
const layout = [
    { i: itemList[0], x: 0, y: 0, w: 1, h: 1 },
    { i: itemList[1], x: 1, y: 0, w: 1, h: 1 },
    { i: itemList[2], x: 2, y: 0, w: 1, h: 1 },
    { i: itemList[3], x: 3, y: 0, w: 1, h: 1 },
    { i: itemList[4], x: 4, y: 0, w: 1, h: 1 }
];

export const Inventory = ({
    inventoryType,
}:InventoryProps) => {
  return (
    <div className={inventoryType}>
      <ReactGridLayout
        className="layout"
        layout={layout}
        cols={5}
        rowHeight={100}
        width={1000}
        autoSize={false}
        isDroppable={false}
      >

        <div className='Item-Wrapper' key={itemList[0]}>{itemList[0]}</div>
        <div className='Item-Wrapper' key={itemList[1]}>{itemList[1]}</div>
        <div className='Item-Wrapper' key={itemList[2]}>{itemList[2]}</div>
        <div className='Item-Wrapper' key={itemList[3]}>{itemList[3]}</div>
        <div className='Item-Wrapper' key={itemList[4]}>{itemList[4]}</div>
        
      </ReactGridLayout>
    </div>
  );
}