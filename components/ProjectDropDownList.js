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
                    <span style={{width: "30%"}}>
                        <Link href={'/projectB2B'} >
                             <div >
                            <img style={{border: "1px solid #56c5ff"}} width="347px" src="../b2bProjectBigScreen1.png"/>
                         </div>
                        <div className={styleDropDown.subTitle}>
                            подробнее <img src="../ArrowBlack.svg"/>
                        </div>
                        </Link>
                    </span>
                    <span style={{width: "40%",marginLeft: "15%"}}>
                        <Link href={'/projectMMM'}>
                             <div >
                            <img style={{border: "1px solid #56c5ff"}} width="42%" src="../1.png"/>
                         </div>
                         <div className={styleDropDown.subTitle}>
                            подробнее <img src="../ArrowBlack.svg"/>
                        </div>
                        </Link>
                    </span>
                    <span style={{width: "40%"}}>
                        <Link href={'/projectEvesell'} >
                         <div >
                              <img src="../6.png" width="80%"/>
                         </div>
                         <div className={styleDropDown.subTitle}>
                            подробнее <img src="../ArrowBlack.svg"/>
                        </div>
                            </Link>
                    </span>
                </div>
                <hr className={styleDropDown.hr}/>
                <div className={styleDropDown.footerText}>
                    С НАми выигрывают !
                </div>
            </div> : null
            }
        </>
    )
}
