import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import ButtonCal from "./ButtonCal";
import "./style.scss"
import { useRecoilState, useRecoilValue } from "recoil";
import { screenValAtom } from "./../../atoms/screenValAtom";
import { lilscreenValAtom } from "../../atoms/lilscreenValAtom";
import { useEffect, useState } from "react/cjs/react.development";
const Keyboard = () => {
    // let rightKeys = ["/", "*", "-", "+"]
    const [screenVal, setScreenVal] = useRecoilState(screenValAtom);
    const [lilscreenVal, setlilScreenVal] = useRecoilState(lilscreenValAtom);
    const visor = useRecoilValue(screenValAtom); 
    const lilvisor = useRecoilValue(lilscreenValAtom);
    const [isFirst, setIfIsFirst] = useState(true)
    // let isFirst = true;
    let operators = ["÷", "x", "-", "+"];
    let numbers = ["7","8","9","4","5","6","1","2","3","0","00"];
    let keys = [7,8,9,4,5,6,1,2,3,0,"00",","]
    function insertValue (val, limit = 17){
        console.log(limit);
        if(visor.length<limit){
            setScreenVal(val);
        }
    }
    const processComma = (val) =>{
        if((visor.length===1) && (visor === "0")) {
            //First number digited overrides 0
            // setScreenVal("0,");
            insertValue("0"+val, 16)
        }else {
            if(visor.indexOf(",")===-1){
                insertValue(visor + ",", 17)
            }
        }
    }
    const processNumbers = (val) =>{
        if(visor.length===1 && visor ==="0"){
            if(String(val) !=="0" && String(val) !== "00"){
                insertValue(val)
            }
        }else if(String(val) === "00"){
            insertValue(visor + val,16);
        }else{
            insertValue(visor + val);
        }
    }
    const processAC = (val) =>{
        //reset Calculator
        setIfIsFirst(true)
        setScreenVal("0")
        setlilScreenVal("")
    }
    const receivetouch = (val)=>{
        //Number operrator equal or comma
        if(val === "AC") processAC(val)
        if(operators.indexOf(val)!==-1) processOperation(val)
        if(numbers.indexOf(val)!==-1) processNumbers (val) 
        if(val === ",") processComma(val)
        if(val === "=") processEqual(val)
        // console.log(numbers.indexOf(val), val)
        //First or second
    }
    const processResult = () =>{
        let result;
        let first = String(lilscreenVal);
        let second = String(screenVal);
        let operator = first.substring(first.length-1,first.length);
        first = first.substring(0 , first.length-1);
        if(String(first).indexOf(",")!==-1){
            first = String(first).replace(",",".");
        }
        if(String(second).indexOf(",")!==-1){
            second = String(second).replace(",",".");
        }
        console.log(first)
        console.log(second)
        switch(operator){
            case "÷":
                result = Number(first) / Number(second)
            break;
            case "x":
                result = Number(first) * Number(second)
            break;
            case "-":
                result = Number(first) - Number(second)
            break;
            case "+":
                result = Number(first) + Number(second)
            break;
        }
        
        if(String(result).indexOf(".")!==-1){
            //if its decimal
            if(String(result).length>17){
                result      = Number(result).toFixed(15);
            }
            result      = String(result).replace(".", ",")
        }else{
            //if its integer
            if(String(result).length>17){
                result = Number.parseFloat(result).toExponential(5)
            }
        }
        return result;
    }
    const processEqual = (val) =>{
        let result = processResult();
        setIfIsFirst(true);
        setlilScreenVal('');
        setScreenVal(result);
    }
    const processOperation = (val) =>{
        // console.log("fdsfds")
        // console.log(isFirst)
        if(isFirst){
            setIfIsFirst(false)
            setlilScreenVal(visor+val);
            setScreenVal("0");
        }else{
            let result = processResult();
            setlilScreenVal(result+val)
            setScreenVal("0")
        }
    }
    const botClick = (e)=>{
        receivetouch(e.currentTarget.textContent)
    }
    useEffect(()=>{
        // setScreenVal(first);
    },[])
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