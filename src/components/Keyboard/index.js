import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import ButtonCal from "./ButtonCal";
import "./style.scss"

const Keyboard = () => {
    let keys = []
    for(let i = 0; i<10; i++){
        keys.push(i)
    }
    return(
        <Fragment>
            <div className="keyboard_container">
                <div className="number_container">
                {
                    keys.map((key, index)=>
                        <ButtonCal val={key}/>
                    )
                }
                </div>
            </div>
        </Fragment>
    )
}
export default Keyboard;