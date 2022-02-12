// import react from "react";
import { Fragment } from "react/cjs/react.production.min";
import "./style.scss"

const Visor = ()=>{
    return(
        <Fragment>
            <div className="visor_container">
                <div className="visor_topbar"></div>
                <div className="visor_frontground">
                    1111234567890
                </div>
                <div className="visor_background">
                    0000000000000
                </div>
            </div>
        </Fragment>
    )
}

export default Visor;