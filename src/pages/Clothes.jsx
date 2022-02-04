import { useEffect, useState } from "react";
import ClothesList from "../components/ClothesList/ClothesList";

function Clothes() {
    const [clothes, setClothes] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/clothes")
            .then((resp) => resp.json())
            .then((clothes) => setClothes(clothes));
    }, []);
    console.log(clothes)
    return (
        <main>

            <section className="clothes">
                <main className="clothes-content">
                    <ClothesList clothes={clothes} />
                </main>
            </section>
        </main>
    );
}

export default Clothes;
