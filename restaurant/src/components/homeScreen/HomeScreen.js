import TopSlider from "../Screens/topSlider/TopSlider";
import Dishes from "../Screens/dishes/Dishes";
import AboutUs from "../Screens/aboutUs/AboutUs";
import Menu from "../Screens/menu/Menu";
import CustomersReview from "../Screens/customersReview/CustomersReview";
import Form from "../Screens/forms/Form";
import Footer from "../Screens/footer/Footer";
import FormAction from "../Screens/formAction/FormAction";

import "./HomeScreen.css";


const HomeScreen = () => {
    return (
        <div>
            <FormAction />
            <TopSlider />
            <Dishes />
            <AboutUs />
            <Menu />
            <CustomersReview />
            <Form />
            <Footer />
        </div>
    )
}

export default HomeScreen;


