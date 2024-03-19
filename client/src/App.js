import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./component/clientside/FormSend";
import Home from "./component/clientside/Home";
import Register  from "./component/clientside/Register"; 
import Dashboard from "./component/adminside/Dashboard";
import Map from "./component/clientside/Map";
import View from "./component/clientside/360View";
import LocMap from "./component/clientside/LocMap";
import Login from "./component/clientside/Login";
import Tours from "./component/clientside/Tours";
import AllTours from "./component/adminside/AllTours";
import AddDest from "./component/adminside/AddDesPoint";
import AddTours from "./component/adminside/AddTours"
import ContactUs from "./component/clientside/ContactUs";
import ClientsDetails from "./component/adminside/ClientsDetails";
import UpdateTours from "./component/adminside/UpdateTours";
import Chatbot from "./component/clientside/Chatbot";
import AllContactUs from "./component/adminside/AllContactUs";
import AddVirtualTour from "./component/adminside/AddVirtualTour";
import EditDes from "./component/adminside/EditDes";
import UpdateDes from "./component/adminside/UpdateDes";
import OneUpdateDes from "./component/adminside/OneUpdateDes";
import ReviewForm from "./component/clientside/ReviewForm";
import OneTourSection1 from "./component/clientside/OneTourSection1";




function App() {

  return (

    <div>

      <BrowserRouter>

      
        <Routes>
          {/* <Route path="/" element={<Test/>}></Route> */}

          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/map" element={<Map/>}></Route>
          <Route path="/view" element={<View/>}></Route>
          <Route path="/map2/:id" element={<LocMap />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/tours" element={<Tours />}></Route>
          <Route path="/alltours" element={<AllTours />}></Route>
          <Route path="/adddes/:id" element={<AddDest/>}></Route>
          <Route path="/addTours" element={<AddTours />}></Route>
          <Route path="/updateTours" element={<UpdateTours />}></Route>
          <Route path="/updateTours/:id" element={<UpdateTours />} />
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/clientsdetails" element={<ClientsDetails/>}> </Route>
          <Route path="/chat" element={<Chatbot/>}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/allcontactus" element={<AllContactUs/>}></Route>
          <Route path="/addvirtualtour" element={<AddVirtualTour />}></Route>
          <Route path="/clientsdetails" element={<ClientsDetails/>}> </Route>
          <Route path="/getdes" element={<Onedest/>}></Route>
          <Route path="/tours/:id" element={<OneTourSection1 />} />
          <Route path="/editdes/:id" element={<EditDes/>}></Route>
          <Route path="/updatedes/:id" element={<UpdateDes/>}></Route>
          <Route path="/oneupdatedes/:id" element={<OneUpdateDes/>}></Route>
          <Route path="/oneTour" element={<OneTourSection1/>}> </Route>

          <Route path="/reviewform" element={<ReviewForm/>}></Route>
         


        </Routes>

      </BrowserRouter>



    </div>

  );

}

export default App;
