import { Link } from "react-router-dom";
function ClothesItem({ clothes }) {
    return (
        <li className="clothes">
            <Link to={`/clothes/${clothes.id}`} className="clothes-link">
                <div
                    className="clothes-circle"
                >
                    <img
                        src={clothes.image}
                        alt={clothes.id}
                    />
                </div>
                <div className="clothes-info">{`${clothes.id.replace("-", " ")} - N°${
                    clothes.number
                }`}</div>
                <div className="clothes-price">€39</div>
            </Link>
        </li>
    );
}

export default ClothesItem;
