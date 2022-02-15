// import react from "react";
import { Fragment } from "react/cjs/react.production.min";
import "./style.scss";
import { useRecoilState } from "recoil";
import { screenValAtom } from "../../atoms/screenValAtom";
import {lilscreenValAtom } from "./../../atoms/lilscreenValAtom"

const Visor = ()=>{
    const [screenVal, setScreenVal] = useRecoilState(screenValAtom);
    const [lilscreenVal, setlilScreenVal] = useRecoilState(lilscreenValAtom);
    return(
        <Fragment>
            <div className="visor_container">
                <div className="visor_topbar_frontground">
                    {lilscreenVal}
                </div>
                <div className="visor_topbar_background">
                    00000000000000000
                </div>

                <div className="visor_frontground">
                    {screenVal}
                </div>
                <div className="visor_background">
                    00000000000000000
                </div>
            </div>
        </Fragment>
    )
}

export default Visor;