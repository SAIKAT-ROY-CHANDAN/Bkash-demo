// import axios from "axios";

const Checkout = () => {
  // const pay = async () => {
  //   try {
  //     const { data } = await axios.post(
  //       "http://localhost:5000/api/bkash/payment/create",
  //       { amount: 50, orderId: 1 },
  //       { withCredentials: true }
  //     );

  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <button 
      // onClick={pay}
      className="bg-black/80 text-white px-6 py-3 rounded-md hover:bg-black/90">
        Pay with Bkash
      </button>
    </div>
  );
};

export default Checkout;
