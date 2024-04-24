import MainContainer from "../components/MainContainer";
import OurValue from "../components/OurValue";
import Mission from "../components/Mission";
import Technologies from "../components/Technologies";
import Partners from "../components/Partners";
import WriteMe from "../components/WriteMe";
import MainImg from "../components/MainImg";
import SendForm from "../components/SendForm";
import Project2 from "../components/Project2";
import Cooperation2 from "../components/Cooperation2";
import LineInfoSecond from "../components/LineInfoSecond";
import LineInfoFirst from "../components/LineInfoFirst";
import WhoWeAre from "../components/WhoWeAre";
import BannerFirst from "../components/BannerFirst";



const Index = ({cardText, tekhnologii, modeliSotrudnichestva,services}) => {

    return (
        <>
        <MainContainer keywords={"main page"} services={services} tekhnologii={tekhnologii}>
            <div className="main-div" >
                <MainImg/>
                <SendForm/>

                <WhoWeAre/>

                <LineInfoFirst/>

                <BannerFirst/>

                {/*<AboutUs/>*/}

                <OurValue cardText={cardText}/>

                <Mission/>

                <LineInfoSecond/>

                {/*<BannerFirst/>*/}
                <Technologies tekhnologii={tekhnologii}/>
                <Project2/>

                <Cooperation2 modeliSotrudnichestva={modeliSotrudnichestva}/>

                <Partners/>

                <WriteMe/>

            </div>
        </MainContainer>
    </>
    );
};

export default Index;

export const getServerSideProps = async () =>{

    const res = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=uslugi')
    const cardText = await res.json()
    const res2 = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=tekhnologii')
    const tekhnologii = await res2.json()
    const res3 = await fetch('https://portal.sellwingroup.com/api/sellwin-system/?SECTION=modeli-sotrudnichestva')
    const modeliSotrudnichestva = await res3.json()
    const response = await fetch(`https://portal.sellwingroup.com/api/sellwin-system/?SECTION=uslugi`)
    const services = await response.json()

    return {
        props: {
            cardText,
            tekhnologii,
            modeliSotrudnichestva,
            services
        },
    }
}
