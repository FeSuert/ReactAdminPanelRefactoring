import React from "react";
import Item from "./Item";

export default function ItemsList(props) {
  return (
    <ul  className="shop text-white">
      {props.items.map((item) => (
        <li key={item.id}>
          <Item info={item} />
          <button
            className="text-2xl rounded-md btn-delete outline outline-offset-2 outline-red-500 "
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}
