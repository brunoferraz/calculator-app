// import react from "react";
import { Fragment } from "react/cjs/react.production.min";
import "./style.scss"

const ButtonCal = (props) =>{
    return(
        <Fragment>
            <div className="button_cal">{props.val}</div>
        </Fragment>
    )
}
export default ButtonCal;