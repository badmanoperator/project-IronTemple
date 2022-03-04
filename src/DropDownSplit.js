import { useState } from "react";

const DropDownSplit = (props) => {

    const items = [];
    for (let i = 0; i < props.items.length; i++) {
        items.push(
            <li onClick={props.onClick}><a>{props.items[i]}</a></li>
        );
    };

    return(
        <div className="dropdown">
            <label tabindex="0" class="m-1 btn
            w-[250px] rounded-[36px] border-none bg-log_purple hover:bg-purple-500">
               {props.value}
            </label>
            <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-300 rounded-box w-[250px]">
               {items}
            </ul>
        </div>
    );
}

export default DropDownSplit;