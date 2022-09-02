import React, { useState, useEffect } from "react";
import ItemsList from "./ItemsList";
import AddItem from "./AddItem";
import uuid from "react-uuid";

export default function Shop() {
  const [items, setItems] = useState(() => {
    const i = JSON.parse(localStorage.getItem("items"));
    if (!i) {
      return [];
    }
    return i;
  });
  //const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [valid, setValid] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!name) {
      setValid("Введите название");
      return;
    }
    if (!desc) {
      setValid("Введите описание ");
      return;
    }
    setItems([
      ...items,
      {
        id: uuid(name),
        name: name,
        desc: desc
      }
    ]);
    setName("");
    setDesc("");
    setValid("");
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescChange(event) {
    setDesc(event.target.value);
  }

  function handleDeleteClick(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    const amount = Object.keys(items).length;
    if (!amount) {
      document.title = "Товары отсутствуют";
      console.log(document.title);
    } else if (amount === 1) {
      document.title = "Товар присутствует";
      console.log(document.title);
    } else {
      document.title = amount + " товара присутствует";
      console.log(document.title);
    }
  }, [items]);
  return (
    <div className="text-4xl text-center">
      <AddItem
        name={name}
        desc={desc}
        valid={valid}
        onNameChange={handleNameChange}
        onDescChange={handleDescChange}
        onFormSubmit={handleFormSubmit}
      />
      <div >{items.length === 0 && <p className="text-[#00df9a]">Добавьте первый товар</p>}</div>
      <ItemsList items={items} onDeleteClick={handleDeleteClick} />
    </div>
  );
}
