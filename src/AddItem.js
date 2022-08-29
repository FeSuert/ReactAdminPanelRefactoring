import React, { useState } from "react";
import Item from "./Item.js";
import ItemList from "./ItemList.js";

export default function AddItem(props) {
    return(
        <form>
            <div>
            <input
                value={props.name}
                onChange={(event) => props.setName(event.target.value)}
                type="text"
                placeholder="Product Name"
                className="ui-textfield"
            />
            </div>
            <div>
            <input
                value={props.desc}
                onChange={(event) => props.setDesc(event.target.value)}
                type="text"
                placeholder="Product Description"
                className="ui-textfield"
            />
            </div>
            <div className="form-footer">
            <div className="validation"></div>
            <input
                onClick={props.onClick}
                disabled={props.desc === "" || props.name === ""}
                type="submit"
                className="ui-button"
                value="Add"
            />
            </div>
        </form>)}