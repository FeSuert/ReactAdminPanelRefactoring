import React, { useState } from "react";
import Item from "./Item.js";

export default function ItemList(props) {
    return(
        <ul className="ui-list">
            <li className="ui-item-list">
            {props.items.map((item) => (
                <div key={item.id}>
                <Item info={item} />
                <button onClick={() => props.onClick(item)} className="item-button">
                    Delete
                </button>
                </div>
            ))}
            </li>
        </ul>)}