import React, { useState } from "react";
import Item from "./Item.js";
import ItemList from "./ItemList.js";
import AddItem from "./AddItem.js";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const addNewItem = (e) => {
    e.preventDefault();
    const newItem = { id: Date.now(), name, desc };
    setItems([...items, newItem]);
    setName("");
    setDesc("");
  };
  const delThisElem = (item) => {
    setItems(items.filter((i) => i.id !== item.id));
  };
  const isEmpty = items.length;

  return (
    <>
      {/* <form>
        <div>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Product Name"
            className="ui-textfield"
          />
        </div>
        <div>
          <input
            value={desc}
            onChange={(event) => setDesc(event.target.value)}
            type="text"
            placeholder="Product Description"
            className="ui-textfield"
          />
        </div>
        <div className="form-footer">
          <div className="validation"></div>
          <input
            onClick={addNewItem}
            disabled={desc === "" || name === ""}
            type="submit"
            className="ui-button"
            value="Add"
          />
        </div>
      </form> */}
      <AddItem desc={desc} name={name} onClick={addNewItem} setName={setName} setDesc={setDesc}/>
      <div>{isEmpty || <p className="ui-title">Add first Product</p>}</div>
      <ItemList items={items} onClick={delThisElem}/>
    </>
  );
}
