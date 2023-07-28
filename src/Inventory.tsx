import { Item } from "./Item";
const ReactGridLayout = require('react-grid-layout');
const layout = [
    { i: "Magic_Potion", x: 0, y: 0, w: 1, h: 1 },
    { i: "Item_Magic", x: 1, y: 0, w: 1, h: 1 },
    { i: "Small_Barrel", x: 2, y: 0, w: 1, h: 1 },
    { i: "Giant_Bag", x: 3, y: 0, w: 1, h: 1 },
    { i: "Random_Tool", x: 4, y: 0, w: 1, h: 1 }
];

export const Inventory = () => {
  return (
    <div className="MainBackground">
      <ReactGridLayout
        className="layout"
        layout={layout}
        cols={5}
        rowHeight={300}
        width={1000}
      >

        <div key='Magic_Potion'></div>
        <div key='Item_Magic'></div>
        <div key='Small_Barrel'></div>
        <div key='Giant_Bag'></div>
        <div key='Random_Tool'></div>
        
      </ReactGridLayout>
    </div>
  );
}