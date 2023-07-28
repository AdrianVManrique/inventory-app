export const Item = () => {
  const itemName = "MyItem";
  const itemDesc = "This Desc";
  return (
    <button className="Item-Wrapper">
        {itemName}
        <div className=".Item-Content">
            {itemDesc}
        </div>
    </button>
  );
};