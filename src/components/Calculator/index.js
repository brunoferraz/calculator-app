// import react from "react";
import { Fragment } from "react/cjs/react.production.min";
import Keyboard from "../Keyboard";
import Visor from "../Visor";
import './style.scss';

const Calculator = () => {
    return(
        <Fragment>
            <div className="calculator_container">
                <Visor></Visor>
                <Keyboard></Keyboard>
            </div>
        </Fragment>
    )
}
export default Calculator;