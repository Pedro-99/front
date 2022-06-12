import DeliveryInfo from '../Components/DeliveryBanner/DeliveryInfo';
import {useSelector} from 'react-redux';
const CheckoutLayout = (props) => {
  const {order} = useSelector((state) => state.order)
  return(
   <div className="container">
     {/* <DeliveryInfo
      isDelivered={order.isPaid}
      isPaid={order.isDelivered} 
      /> */}
     <div>
       {props.children}
     </div>
   </div>
  )
}

export default CheckoutLayout