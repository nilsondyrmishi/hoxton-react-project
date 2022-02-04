import ClothesItem from "./ClothesItem";

function ClothesList({ clothes }) {
    return (
        <ul className="clothes-list">
            {clothes.map((clothes) => (
                <ClothesItem clothes={clothes} key={clothes.id} />
            ))}
        </ul>
    );
}

export default ClothesList;
