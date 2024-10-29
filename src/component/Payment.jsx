import React, { useState } from "react";
import MalhubLogo from '../assets/MalhubLogo.png';
import { useFlutterwave } from "flutterwave-react-v3";
import Newnav from "../component/Newnav";


 function Payment() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [amount, setamount] = useState(2000);

  const config = {
    public_key: import.meta.env.VITE_FLUTTER_PAY,
    tx_ref: Date.now(),
    amount: amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      name: name,
    },
    customizations: {
      title: "Malhub Office Space",
      description: "Payment for office space",
      logo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmalhub.org%2Frefund-policy%2F&psig=AOvVaw2cOWDTCLfMKHiYqF9hqnUo&ust=1729340288904000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPDfm7eQmIkDFQAAAAAdAAAAABAE",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  const handlePayment = (e) => {
    e.preventDefault();
    handleFlutterPayment({
      callback: (response) => {
        console.log("res from flutter", response);

        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {
        alert("Byee");
      },
    });
  };
  return (
<div>
  <Newnav/>
    <div className="grid justify-center border-[1px] h-[750px] w-[350px] rounded-2xl pt-20 bg-blue-50 ml-[40%]">
    <form id="paymentForm" className="grid items-center">
        <img className='h-[47px] w-[140px] ml-16' src={MalhubLogo} alt="logo" />

      <label className="mt-5" htmlFor="text">Full Name</label>
      <input className='w-[300px] h-[35px] rounded-[15px] border-[1px] border-black caret-blue-500 pl-[10px]'
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className="mt-5" htmlFor="text">Amount</label>
      <input className='w-[300px] h-[35px] rounded-[15px] border-[1px] border-black caret-blue-500 pl-[10px]'
        type="number"
        value={amount}
        onChange={(e) => setamount(e.target.value)}
      />
      <label className="mt-5" htmlFor="text">Email address</label>
      <input className='w-[300px] h-[35px] rounded-[15px] border-[1px] border-black caret-blue-500 pl-[10px]'
        type="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <label className="mt-5" htmlFor="text">Office Type</label>
      <select className='w-[300px] h-[35px] rounded-[15px] border-[1px] border-black'>
        
         <option value="diamond">Diamond</option>
         <option value="gold">Gold</option>
         <option value="silver">Silver</option>
         </select>
         
         <label className="mt-5" htmlFor="text">Duration</label>
         <select className='w-[300px] h-[35px] rounded-[15px] border-[1px] border-black'>
        
         <option value="dialy">Daily</option>
         <option value="weekly">Weekly</option>
         <option value="monthly">Monthly</option>
         <option value="Office space">Office Space</option>
         </select>

         <label className="mt-5" htmlFor="date">Date</label>
         <input type="date" id="date" className='w-[300px] h-[35px] rounded-[15px] border-[1px] border-black' 
         />

         <label className="mt-5" htmlFor="time">Time</label>
         <input type="time" id="time" className='w-[300px] h-[35px] rounded-[15px] border-[1px] border-black' 
         />
     
      <button className="w-[260px] h-[40px] border-[#3C4493] border-[1px] text-white bg-[#3C4493] flex justify-center items-center rounded-2xl mt-5 ml-5" onClick={handlePayment}>Proceed to payment</button>
    </form>
    </div>
</div>
  );
}

export default Payment;


