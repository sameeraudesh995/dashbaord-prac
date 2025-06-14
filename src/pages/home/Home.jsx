import "./Home.scss"
import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import Widget from "../../components/widget/Widget";

const Home = () => {
    return (
        <div className='home'>
            <SideBar/>
            <div className='homeContainer'>
                <NavBar/>
                <div className='widgets'>
                    <Widget type="user"/>
                    <Widget type="order"/>
                    <Widget type="earning"/>
                    <Widget type="balance"/>
                </div>
            </div>
        </div>
    )
}
export default Home;
