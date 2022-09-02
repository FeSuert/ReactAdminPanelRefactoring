import React from "react";

export default function AddItem(props) {
  return (
    <form onSubmit={props.onFormSubmit} className="w-full text-center">
      <div className="items-center border-b border-teal-500 py-2">
        <label htmlFor="item-name" className="text-white">Название:</label>
        <input class="appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
          className="textfield"
        />
      </div>
      <div className="items-center border-b border-teal-500 py-2">
        <label htmlFor="item-description" className="text-white">Описание:</label>
        <input class="appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
          className="textfield"
        />
      </div>
      <div className="form-footer">
        <div className="validation text-[#ff0000]">{props.valid}</div>
        <input type="submit" className="btn btn-basic text-[#00df9a]" value="Добавить" />
      </div>
    </form>
  );
}
