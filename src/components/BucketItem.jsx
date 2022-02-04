function BucketItem({ bucketItem, users, setUsers }) {

    function addItemToBucket(productId, productType) {
        const updatedUser = JSON.parse(JSON.stringify(users));
        const bucketItemFound = updatedUser.bucket.find(
            (bucketItem) => bucketItem.id === productId && bucketItem.type === productType
        );
        bucketItemFound.quantity++;
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
    function removeItemFromBucket(productId, productType) {
        const updatedUser = JSON.parse(JSON.stringify(users));
        const bucketItemFound = updatedUser.bucket.find(
            (bucketItem) => bucketItem.id === productId && bucketItem.type === productType
        );
        bucketItemFound.quantity--;
        if (bucketItemFound.quantity === 0) {
            updatedUser.bucket = updatedUser.bucket.filter(
                (bucketItem) => bucketItem !== bucketItemFound
            );
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

    return (
        <li className="bucket-container__item">
            <img alt={`${bucketItem.id} ${bucketItem.type}`} width="80" />
            <p>
                {`${bucketItem.id} ${bucketItem.type}`} ({bucketItem.price}€)
            </p>
            <p className="bucket-quantity">
                <button
                    className="bucket-button"
                    onClick={() => removeItemFromBucket(bucketItem.id, bucketItem.type)}
                >
                    -
                </button>
                <span>{bucketItem.quantity}</span>
                <button
                    className="bucket-button"
                    onClick={() => addItemToBucket(bucketItem.id, bucketItem.type)}
                >
                    +
                </button>
            </p>
        </li>
    );
}

export default BucketItem;
