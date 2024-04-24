import styleDropDown from "../styles/MainContainer.module.css"

const ServiceDropDownList = ({showMenuService, setShowMenuService,services})=> {

    return (
        <>
            {showMenuService ?  <div
                onMouseEnter={()=> setShowMenuService(true)} onMouseLeave={()=> setShowMenuService(false)}
                style={{fontFamily: "Montserrat" ,
                    fontStyle: "normal",
                    fontWeight: 400}} className={styleDropDown.dropdownContent}>
                <div className={styleDropDown.divStyle}>
                    <span >
                         <div >
                             <ul style={{listStyleType: "none",  columnCount: 3}}>
                                  {services.data.map((item, index) =>
                                      <li className={styleDropDown.subTitle} key={index} onClick={()=> alert("5555")}>
                                          <img style={{paddingRight: 20}} src="../Ellipse.svg"/> {item.name}
                                      </li>
                                  )}
                             </ul>
                         </div>
                    </span>
                </div>
                <hr className={styleDropDown.hr}/>
                <div className={styleDropDown.footerText}>
                    С НАми выигрывают !
                </div>
            </div> : null}
        </>
    )
}
export default ServiceDropDownList;
