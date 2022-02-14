import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import ButtonCal from "./ButtonCal";
import "./style.scss"

const Keyboard = () => {
    // let rightKeys = ["/", "*", "-", "+"]
    let first = "";
    let second = "";
    let isFirst = true;
    let operators = ["÷", "x", "-", "+"];
    let numbers = [7,8,9,4,5,6,1,2,3,0,"00"];
    let keys = [7,8,9,4,5,6,1,2,3,0,"00",","]
    const receivetouch = (val)=>{
        //Number operrator equal or comma
        if(operators.indexOf(val)!==-1) processOperation(val)
        if(numbers.indexOf(val)!==-1) processNumbers (val)
        if(val === ",") processComma(val)
        if(val === "=") processEqual(val)
        //First or second?
    }
    const processEqual = (val) =>{

    }
    const processComma = (val) =>{

    }
    const processNumbers = (val) =>{
        if(isFirst){
            first =+ val;
        }
    }
    const processOperation = (val) =>{

    }
    const botClick = (e)=>{
        receivetouch(e.currentTarget.textContent)
    }
    return(
        <Fragment>
            <div className="keyboard_container">
                <div className="block_container number_container">
                {
                    keys.map((key, index)=>
                        <ButtonCal key={index} val={key} botClick={botClick}/>
                    )
                }
                </div>
                <div className="block_container operator_container">
                    <ButtonCal val={"÷"} className="division" botClick={botClick}/>
                    <ButtonCal val={"x"} className="multiplication" botClick={botClick}/>
                    <ButtonCal val={"-"} className="minus" botClick={botClick}/>
                    <ButtonCal val={"+"} className="plus" botClick={botClick}/>
                </div>
                <div className="block_container otherbutton_containter">
                    <ButtonCal className={"button_AC"} val={"AC"} botClick={botClick}/>
                    <ButtonCal className={"button_equal"} val={"="} botClick={botClick}/>
                </div>
            </div>
        </Fragment>
    )
}
export default Keyboard;