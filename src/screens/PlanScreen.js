
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/UserSlice";
import db from "../firebase";
import "./PlanScreen.css";
function PlanScreen() {
    const [products, setProducts] = useState([])
    const user = useSelector(selectUser)
    useEffect(() => {
        db.collection('products').where('active', '==', true).get()
            .then((data) => {
                const productObj = {}
                data.docs.forEach((product) => {
                    productObj[product.id] = product.data()
                })
                setProducts(productObj)
            })
            .catch((error) => {
                alert(error.message)
            })
    }, [])
    console.log(products)
    const loadCheckout = async (priceID) => {
        const  docRef = await db
        .collection('customers')
        .doc(user.uid)
        .collection('checkout_sessions')
        .add({
            price : priceID,
            success_url : window.location.origin,
            cancel_url: window.location.origin,
        });

        docRef.onSnapshot(async (snap)=>{
            const {error, sessionId} = snap.data()
            console.log(sessionId)
            if(error)
                alert(`An error occured ${error.message}`)
            if(sessionId){
                console.log(sessionId)
                const stripe = await loadStripe('pk_test_51IQtpgIfiANuD0Y75heEu5IZizA3AdvnFnrf8XXv9g2VuZNT4y3MdZSSKLmGGXQ3ipec9oS3WaYoSuLkWUMYAcEd00M6nVvjxy')
                stripe.redirectToCheckout({sessionId})
            }
        })

    }
    return (
        <div className="planScreen">
            {Object.entries(products).map(([productId, productData]) => {
                return (
                    <div className="planScreen_plan" key={productId}>
                        <div className="planScreen_info">
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button onClick={() => loadCheckout(productId)}>Subscribe</button>
                    </div>
                );
            })}
        </div>
    )
}
export default PlanScreen;