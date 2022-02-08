import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ClothesDescription({ users, setUsers,  }) {
    function addToBucket(productId) {
        // if (users === null) {
        // } else {
            const updatedUser = JSON.parse(JSON.stringify(users));
            const bucketItemFound = updatedUser.bucket.find(
                (bucketItem) => bucketItem.id === productId && bucketItem.type === "clothes"
            );
            if (bucketItemFound) {
                bucketItemFound.quantity++;
            } else {
                const newBucketItem = {
                    id: productId,
                    type: "clothes",
                    price: 40,
                    quantity: 1
                };
                updatedUser.bucket.push(newBucketItem);
            }
            setUsers(updatedUser);
            fetch(`http://localhost:3000/users/${users.id}`, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "PATCH",
                body: JSON.stringify({
                    bucket: updatedUser.bucket
                })
            });

    }

    const params = useParams();
    const [clothes, setClothes] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:3000/clothes/${params.id}`)
            .then((resp) => resp.json())
            .then((clothes) => setClothes(clothes));
    }, []);
    if (clothes === null)
        return <main className="main">Loading</main>;
    return (
        <main className="main">
            <div className="description">
                <div className="name-number">
                    <h2 className="name">{clothes.id}</h2>
                    <span className="number">Nr{clothes.number}</span>
                </div>
                <div className="info">
                    <p className="info-p">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
                <button className="cit" onClick={() => addToBucket(params.id)}>
                    Add to Bucket
                </button>
            </div>
            <div className="image">
                <img src={clothes.image} alt={clothes.id} />
            </div>
        </main>
    );
}

export default ClothesDescription;
