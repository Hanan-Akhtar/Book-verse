import { useStripe,useElements } from "@stripe/react-stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        // Get card element
        const cardElement = elements.getElement(CardElement);

        // Use Stripe.js to create a token.
        const { error, token } = await stripe.createToken(cardElement);

        if (error) {
            console.error('Error:', error);
        } else {
            console.log('Token:', token);
            // Send token to your server to complete payment
        }
    };

    return (
        <form onSubmit={handleSubmit}>
       <div className="card" style={{width:"30%",height:"30vh"}}>
       <CardElement />
       </div>
            
            <button className="bg-primary" style={{border:"none"}}type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};
export default CheckoutForm;