import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BucketItem from "../components/BucketItem";

function Bucket({users,setUsers}){
    const navigate=useNavigate();

    useEffect(()=>{
        if(users===null)navigate("/login")
    },[navigate, users]);

    if(users===null)return <main>Loading</main>
    return (
        <main>
            <section className="bucket-container">
                <h2>Your Bucket</h2>
                <ul>
                    {users.bucket.map((bucketItem,index)=>(
                    <BucketItem
                        key={index}
                        bucketItem={bucketItem}
                        users={users}
                        setUsers={setUsers}
                    />
                    ))}

                </ul>
                <h3>
                    Your total: $
                    {users.bucket.reduce(
                        (sum, bucketItem)=> sum + bucketItem.price * bucketItem.quantity,
                   0
                    )}
                </h3>
            </section>
        </main>
    )
}
export default Bucket
