import { useState } from "react";
import { useEffect } from "react";

export default function App() {
    useEffect(() => { 
        document.title = giftCard.valid? "Gift Card": "No Gift Card";
      }); 

  const [giftCard, setGiftCard] = useState({
    firstName: "Jennifer",
    lastName: "Smith",
    text: "Free dinner for 4 guests",
    valid: true,
    instructions: "To use your coupon, click the button.",
  });

  function spendGiftCard() {
    setGiftCard((prevData) => ({
      ...prevData,
      text: "Your coupon has been used.",
      instructions: "Please visit our restaurant to renew your gift card..",
      valid: false,
    }));
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Gift Card Page</h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>{giftCard.text}</h3>
      <h4>{giftCard.instructions}</h4>
      {giftCard.valid && (
        <button onClick={spendGiftCard}>Spend Gift Card</button>
      )}
    </div>
  );
}
