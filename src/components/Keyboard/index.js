import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import ButtonCal from "./ButtonCal";
import "./style.scss"

const Keyboard = () => {
    let rightKeys = ["/", "*", "-", "+"]
    let keys = [7,8,9,4,5,6,1,2,3,0,"00",","]
    
    return(
        <Fragment>
            <div className="keyboard_container">
                <div className="block_container number_container">
                {
                    keys.map((key, index)=>
                        <ButtonCal val={key}/>
                    )
                }
                </div>
                <div className="block_container operator_container">
                    {
                        rightKeys.map((key, index)=>
                            <ButtonCal val={key}/>
                        )
                    }
                </div>
                <div className="block_container otherbutton_containter">
                    <ButtonCal className={"button_AC"} val={"AC"}/>
                    <ButtonCal className={"button_equal"} val={"="}/>
                </div>
            </div>
        </Fragment>
    )
}
export default Keyboard;