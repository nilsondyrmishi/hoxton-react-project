import NavBar from "../components/NavBar";
import Announcement from "../components/Annoucement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
function Home(){
    return(<div>
            <Announcement/>
            <NavBar/>
            <Slider/>
            <Categories/>
        </div>

    )
}
export default Home
