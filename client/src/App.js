import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./component/clientside/FormSend";
import Home from "./component/clientside/Home";

function App() {

  return (

    <div>

      <BrowserRouter>

      
        <Routes>
          {/* <Route path="/" element={<Test/>}></Route> */}

          <Route path="/" element={<Home/>}></Route>
        </Routes>

      </BrowserRouter>



    </div>

  );

}

export default App;
