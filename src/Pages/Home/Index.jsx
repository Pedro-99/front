import React , { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import HomeLayout from "../../Layouts/HomeLayout";
import HomeCrousel from "../../Components/Carousel/HomeCarousel";
import LatestProducts from "../../Components/Products/LatestProducts";
import HeroServices from "../../Components/Services/HeroServices";
import CustomersReviews from "../../Components/Reviews/CustomersReviews";
import BottomServices from "../../Components/Services/BottomServices";
import AboutServices from "../../Components/Services/AboutServices";
import ContactDetails from "../../Components/Contact/ContactDetails";
import {getCart} from "../../features/Cart/cartSlice";
import {getSession} from "../../features/session/sessionSlice";



const HomePage = (props) => {

    const { user } = useSelector((state) => state.auth)
    const { shopping_session } = useSelector((state) => state.shopping)
    
    const dispatch = useDispatch();

    useEffect( () => {
        if(user){
            dispatch(getSession(user.id))
          
        }

         
      
    }, [dispatch])
    useEffect( () => {
        if(shopping_session !== null){
            dispatch(getCart(shopping_session.id))
        }

         
      
    }, [shopping_session])

    useEffect(() => {

        window.scrollTo(0,0);
      
      }, []);
    // console.log('shopping_session',shopping_session)
    return (
        <>
            <HomeLayout>
                <HomeCrousel />
                <div className="container mb-5">
                    <LatestProducts />
                </div>
                <HeroServices />
                <AboutServices />
                <ContactDetails />
                <div className="container mb-4">
                    <CustomersReviews />
                </div>
                
                <BottomServices />
            </HomeLayout>
        </>
    );
}

export default HomePage;