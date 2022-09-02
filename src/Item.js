import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="item">
      <div className="item-info inline-flex">
        <h2 class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400">{info.name}</h2>
        <h2 class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400">{info.desc}</h2>
      </div>
      <div className="item-quantity">
        <h3 className="item-total">{total ? total : ""}</h3>
        <button
          className="item-less bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded-l"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <button className="item-more bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-r" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
