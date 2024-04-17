
import styleOurValue from "../styles/OurValue.module.css"
import {useState} from "react";


const cardText = [
    {   id: 1,
        title: "Результативность",
        text: "Достигаем цели, направленые на развитие нашей компании и удовлетворение потребностей наших клиентов и партнеров",
        url: "../result.svg",
        show: false,
    },
    {
        id: 2,
        title: "Профессионализм",
        text: "Эксперты по созданию, масштабированию и поставки защищенного программного обеспечения",
        url: "../profi.svg",
        show: false
    },
    {
        id: 3,
        title: "Движение",
        text: "Мы занимаем активную жизненную позицию и имеем современные взгляды на ведение бизнеса",
        url: "../move.svg",
        show: false
    },
    {
        id: 4,
        title: "Партнерство",
        text: "Строим долгосрочное сотрудничество с партнерами, основанное на взаимном уважении и доверии",
        url: "../partner.svg",
        show: false
    },
    {
        id: 5,
        title: "Лидерство",
        text: "Всегда стремимся занимать лидирующую позицию в своей отрасли",
        url: "../lider.svg",
        show: false
    } ,
    {
        id: 6,
        title: "Лидерство",
        text: "Всегда стремимся занимать лидирующую позицию в своей отрасли",
        url: "../lider.svg",
        show: false
    }
]

const OurValue = ({}) => {
    const [showObj, setShowObj] = useState(cardText)
    const [count, setCount] = useState(0)


    function changeShowIndex (index) {
        let a = showObj
        console.log(index)
        for (let i = 0; i< a.length; i++){
            if (index === i){
                a[i].show = true
            }else {
                a[i].show = false
            }
        }
        setShowObj(a)
    }

    return (
        <>
            <div className={styleOurValue.mainDiv}>
                <div className={styleOurValue.ourValue}>
                    Наши ценности
                </div>
                <div className={styleOurValue.totalCardStyle}>
                    {cardText.map((item,index) => (
                        <div key={index} style={index === 5 ? {opacity: 0} : null} className={styleOurValue.cardStyle}>
                            <img style={{marginTop: -30, marginLeft: 33}} src={item.url}/>
                            <div style={{width: "calc( (100vw - 768px)/(1900 - 768) * (300 - 200) + 200px)", marginLeft:12, }}>
                                <div className={styleOurValue.title}>
                                    {item.title}
                                </div>
                                <div className={styleOurValue.subTitle} >
                                    {item.text}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styleOurValue.mainDivMobile}>
                <div className={styleOurValue.ourValueMobile}>
                    Наши ценности
                </div>
                <div >
                    {showObj.map((item,index) => (
                        <div key={index} className={styleOurValue.cardStyleMobile} onClick={()=> (changeShowIndex(index), setCount(index))  }>
                            <img style={{marginTop: -30, marginLeft: 33}} src={item.url}/>
                            <div style={{width: "90%", marginLeft:12, }}>
                                <div className={styleOurValue.titleMobile}>
                                    {item.title} <span style={{float: "right"}}><img src="../downImg.png" /></span>
                                </div>
                                    <div className={styleOurValue.subTitleMobile} >
                                        {item.show ? item.text : ""}
                                   </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default OurValue;