import styleDropDown from "../styles/MainContainer.module.css"
import Link from "next/link";



export default function ProjectDropDownList(props) {
    let showMenuProject = props.showMenuProject
    let setShowMenuProject = props.setShowMenuProject




    return (
        <>
            {showMenuProject ?  <div onMouseEnter={()=> setShowMenuProject(true)} onMouseLeave={()=> setShowMenuProject(false)}   style={{fontFamily: "Montserrat" ,
                fontStyle: "normal",
                fontWeight: 400}} className={styleDropDown.dropdownContent}>
                <div className={styleDropDown.divStyle}>


                    <span >
                        <Link href={'/projectB2B'} >

                             <div >
                            <img style={{border: "1px solid #56c5ff"}} width="347px" src="../b2bProjectBigScreen1.png"/>
                         </div>
                        <div className={styleDropDown.subTitle}>
                            подробнее <img src="../ArrowBlack.svg"/>
                        </div>
                        </Link>


                    </span>
                    <span>
                        <Link href={'/projectBeautyHouse'}>
                             <div >
                            <img style={{border: "1px solid #56c5ff"}} width="347px" src="../beautyhouseProjectBigScreen1.png"/>
                         </div>
                         <div className={styleDropDown.subTitle}>
                            подробнее <img src="../ArrowBlack.svg"/>
                        </div>
                        </Link>


                    </span>
                    <span>
                         <div >
                              <img src="../dropDownProject.png"/>
                         </div>
                         <div className={styleDropDown.subTitle}>
                            подробнее <img src="../ArrowBlack.svg"/>
                        </div>
                    </span>



                </div>
                <hr className={styleDropDown.hr}/>
                <div className={styleDropDown.footerText}>
                    С НАми выигрывают !
                </div>

                {/*<div className="link">*/}
                {/*    <Link style={{textDecoration: "none", color: "black"}} href="/technologiesOne">Type Script</Link>*/}
                {/*</div>*/}
                {/*<div className="link">*/}
                {/*    <Link style={{textDecoration: "none", color: "black"}} href="/technologiesOne">React JS</Link>*/}
                {/*</div>*/}
                {/*<div className="link">*/}
                {/*    <Link style={{textDecoration: "none", color: "black"}} href="/technologiesOne">Next JS</Link>*/}
                {/*</div>*/}
                {/*<div className="link">*/}
                {/*    <Link style={{textDecoration: "none", color: "black"}} href="/technologiesOne">Vue JS</Link>*/}
                {/*</div>*/}
                {/*<div className="link">*/}
                {/*    <Link style={{textDecoration: "none", color: "black"}} href="/technologiesOne">Nest JS</Link>*/}
                {/*</div>*/}

            </div> : null

            }

        </>

    )
}
