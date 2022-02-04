import ClothesList from "../components/ClothesList/ClothesList";
import {useEffect, useState} from "react";
import Newsletter from "../components/Newsletter";
import { Link } from "react-router-dom";
import Motto from "../components/Motto";

function Home(){
    const [clothes, setClothes] = useState([]);
    useEffect(() => {fetch("http://localhost:3000/clothes?_sort=date&_order=desc&_limit=10")
            .then((resp) => resp.json())
            .then((clothes) => setClothes(clothes));
    }, []);
    return(
        <div>
            <ClothesList clothes={clothes}/>
            <Link to="/clothes">
                BUY OUR BEST CLOTHES
            </Link>
            <Motto/>
            <Newsletter/>
        </div>

    )
}
export default Home
