import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./component/clientside/FormSend";

function App() {

  return (

    <div>

      <BrowserRouter>

      
        <Routes>
          <Route path="/" element={<Test/>}></Route>
        </Routes>

      </BrowserRouter>



    </div>

  );

}

export default App;
