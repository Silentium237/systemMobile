import MainContainer from "../components/MainContainer";
import Partners from "../components/Partners";
import WriteMe from "../components/WriteMe";
import style from "../styles/Service.module.css"
import styleProject from "../styles/ProjectsAndSolution.module.css"

import MainImgForAnotherPage from "../components/MainImgForAnotherPage";
import Cooperation from "../components/Cooperation";
import Link from "next/link";

export default function project ({cardText, tekhnologii, modeliSotrudnichestva,services}){

    let itemProject = [
        {   title: "B2BSellwin.by",
            img: "../projectB2B.png",
            description: "Данный проект создавался для работы по схеме B2B. К" +
                "лиентская база данного web приложения насчитывает более 1000 пользователей, " +
                "которые являются крупными и средними организациями по реализации бытовой " +
                "продукции и продуктов питания на территории РБ. Данный сайт " +
                "позволяет легко и быстро сформировать карзину и оформить заказ благодаря " +
                "современному подходу к реализации всех задумак...",
            link: "/projectB2B"
        },
        {   title: "BeautyHouse.by",
            img: "../projectBeautyHouse.png",
            description: "BeautyHouse - это огромный дом, предназначение которого делать" +
                " людей еще более красивыми, а значит и окружающий мир. " +
                "На данном портале присутствует поистине огромное количество" +
                " разнообразной косметики по уходу за всем телом.",
            link: "/projectB2B"
        },
        {   title: "Oil-motor.by",
            img: "../projectOilMotor.png",
            description: "Как известно: 'Движение - это жизнь'. А что бы это " +
                "движение длилось как можно дольше," +
                " необходимо смазывать. Oil Motor сайт, где вы найдете" +
                " весь спектр масел для любого авто. А удобная навигация и" +
                " грамотно написаный год не отнимет у Вас много времени " +
                "от выбора товара до оформления покупки.  ",
            link: "/projectB2B"
        },
        {   title: "pmlogistic.sellwin.by",
            img: "../projectPMLogistic.png",
            description: "Если Ваша деятельность связана с огромным количеством " +
                "доставок и большим оборотам товара в различных точках страны," +
                " то без онлайн мониторинга не обойтись. " +
                "Наше решение позволило своевременно реагировать " +
                "на проблемы при приемке товара, отслеживать перемещение, " +
                "мониторить транспортные расходы и многое другое",
            link: "/projectB2B"
        },
        {   title: "Shop.sellwin.by",
            img: "../projectShopSellwin.png",
            description: "Для любителей вкусняшек и чистюль" +
                ", был создан данный сайт. На котом представлены " +
                "одни из лучших товаров на территории РБ по очень" +
                " привлекательным ценам. Удобный и очень быстрый сайтик! ",
            link: "/projectB2B"
        },

    ]




    return(
        <MainContainer services={services} tekhnologii={tekhnologii}>
            {/*<MainImgForAnotherPage/>*/}
            <div style={{width: 1084,  alignItems: "center", justifyContent: "center", margin: "auto"}}>

                <div className={style.breadCrams}>
                    <span>Главная &nbsp;   <img src="../breadPosition.svg"/> &nbsp; </span>
                    <span style={{color: "black"}}>Проекты и решения</span>
                </div>
                <div className={style.title}>Проекты и решения</div>

            </div>
            {itemProject.map((item , index)=>(
                <div key={index} className={styleProject.cardProject}>
                <span>
                    <img src={item.img}/>
                </span>
                    <span style={{}}>
                    <div style={{ height: 100, paddingTop: 58, paddingLeft: 40, }}   className={styleProject.title}>
                            {item.title}
                    </div>
                    <div style={{ height: 300, paddingTop: 20, paddingLeft: 40, paddingRight: 54}}   className={styleProject.subTitle}>
                       {item.description}
                    </div>
                        <Link style={{textDecoration: "none"}} href={item.link}>
                           <div style={{  height: 100, paddingLeft: 40}}  className={styleProject.nextButton}>
                        подробнее <img style={{position: "absolute", paddingTop: 4, paddingLeft: 15}} src="../Arrow2.svg"/>
                    </div>
                        </Link>
                </span>
                </div>
            ))}


            {/*<div className={styleProject.cardProject}>*/}
            {/*    <span>*/}
            {/*        <img src="../projectBeautyHouse.png"/>*/}
            {/*    </span>*/}
            {/*    <span style={{}}>*/}
            {/*        <div style={{ height: 100, paddingTop: 58, paddingLeft: 40, }}   className={styleProject.title}>*/}
            {/*                BeautyHouse.by*/}
            {/*        </div>*/}
            {/*        <div style={{ height: 300, paddingTop: 20, paddingLeft: 40, paddingRight: 54}}   className={styleProject.subTitle}>*/}
            {/*            Данный проект создавался для работы по схеме B2B. Клиентская*/}
            {/*            база данного web приложения насчитывает более 1000 пользователей,*/}
            {/*            которые являются крупными и средними организациями по реализации*/}
            {/*            бытовой продукции и продуктов питания на территории РБ. Данный сайт*/}
            {/*            позволяет легко и быстро сформировать карзину и оформить заказ благодаря*/}
            {/*            современному подходу к реализации всех задумак...*/}
            {/*        </div>*/}
            {/*        <div style={{  height: 100, paddingLeft: 40}}  className={styleProject.nextButton}>*/}
            {/*            подробнее*/}
            {/*        </div>*/}
            {/*    </span>*/}
            {/*</div>*/}






            <Cooperation modeliSotrudnichestva={modeliSotrudnichestva}/>
            <Partners/>
            <WriteMe/>

        </MainContainer>

    )
}

export const getServerSideProps = async () =>{
    console.log("11111111111")


    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=uslugi')
    const cardText = await res.json()
    const res2 = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=tekhnologii')
    const tekhnologii = await res2.json()
    const res3 = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=modeli-sotrudnichestva')
    const modeliSotrudnichestva = await res3.json()
    const response = await fetch(`https://portal.sellwingroup.com/api/sellwin-system/?SECTION=uslugi`)
    const services = await response.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            cardText,
            tekhnologii,
            modeliSotrudnichestva,
            services
        },
    }
}
