import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   
    const [orders,setOrder] = useState([]);
    useEffect(() => {
        fetch(`https://shrouded-thicket-71402.herokuapp.com/orders/${loggedInUser.email}`)
          .then((res) => res.json())
          .then((data) => setOrder(data));
      }, [loggedInUser]);

   

    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-md-2 col-sm-4 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 col-sm-8 col-12  justify-content-center mx-auto">
                   <h1>Hello,{loggedInUser.email}!</h1>
                   <p>Hope you are well by the grace of Allah.You are cordially welcomed in our Vaccination program at home.we hope you are benefited from this site and so I claim from you that you should share this site with your neighbours and relatives.Thank you so much sir.</p>
                   <h5>Your all orders yet Now:</h5>
                   {
                    orders.length===0 && <h1>You have No orders yet.Please Order quickly.</h1>
                  }
                   {
                       orders.map(order =>
                        <div className='card mt-5 mb-5 mx-auto text-center' key={order._id}>
                            <h2>User : {order.email}</h2>
                            <h4>{order.name}</h4>
                            <h6>Service charge : {order.charge}</h6>
                            <p>Order date: {order.orderTime}</p>
                        </div>
                        )
                   }
                </div>
               
            </div>
        </section>
    );
};

export default Dashboard;