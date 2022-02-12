// import react from "react";
import { Fragment } from "react/cjs/react.production.min";
import "./style.scss"

const ButtonCal = (props) =>{
    return(
        <Fragment>
            <div className={"button_cal_container"+props.className}>
                <div className="button_cal">
                    {props.val}
                </div>
            </div>
        </Fragment>
    )
}
export default ButtonCal;