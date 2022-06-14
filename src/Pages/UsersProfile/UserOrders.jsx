import React, {useEffect,useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "./Style.css";
import orderService from '../../features/order/orderService';

const UserOrders = () => {
    const [orders, setOrders] = useState(null)
    const {user} = useSelector((state) => state.auth)
    useEffect(() => {
        orderService.getOrdersByUserId(user.id)
                    .then((result) => {
                        setOrders(result)
                    })
    },[])

    console.log(orders)

    return (
        <>
            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
                <div className="bd-example">
                   {

                       (orders && orders.length !== 0) ? orders.map((order,index) => {
                           return(
                               <div key={index} className="d-flex flex-row">
                               <Link
                                to={`/order/${order.id}`}
                                className="text-danger"
                               >
                               <h4>{order.id}</h4>
                               </Link>
                               {
                                (order.isPaid) ? <span className="px-3 text-success">Paid</span> : <span className=" px-3 text-danger">Not Paid</span> 
                                }
                               {
                                (order.isDelivered) ? <span className="px-3 text-success">Delivered</span> : <span className="px-3 text-danger">Not Delivered</span> 
                                }
                                <h4>{order.total}</h4>

                   </div>
                           )
                       })
                       :
                       <h3>You have no order yet</h3>
                   }
                </div>
            </div>

        </>
    );
}

export default UserOrders;