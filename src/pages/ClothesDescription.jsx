import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ClothesDescription({ users, setUsers,  }) {
    function addToBucket(productId) {
        if (users === null) {
        } else {
            const updatedUser = JSON.parse(JSON.stringify(users));
            const bucketItemFound = updatedUser.cart.find(
                (bucketItem) => bucketItem.id === productId && bucketItem.type === "clothes"
            );
            if (bucketItemFound) {
                bucketItemFound.quantity++;
            } else {
                const newBucketItem = {
                    id: productId,
                    type: "clothes",
                    price: 39,
                    quantity: 1
                };
                updatedUser.cart.push(newBucketItem);
            }
            setUsers(updatedUser);
            fetch(`http://localhost:3000/users/${users.id}`, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "PATCH",
                body: JSON.stringify({
                    cart: updatedUser.cart
                })
            });
        }
    }

    const params = useParams();
    const [clothes, setclothes] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:3000/colors/${params.id}`)
            .then((resp) => resp.json())
            .then((clothes) => setclothes(clothes));
    }, [params.id]);
    if (clothes === null) return <main className="main">Loading</main>;
    return (
        <main className="main">
            <div className="description">
                <div className="name-and-number">
                    <h2 className="name">{clothes.id}</h2>
                    <span className="number">N°{clothes.number}</span>
                </div>
                <div className="info">

                </div>
                <button className="cta" onClick={() => addToBucket(params.id)}>
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
