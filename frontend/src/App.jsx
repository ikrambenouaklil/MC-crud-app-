/* eslint-disable no-unused-vars */

import {BrowserRouter , Routes ,Route} from "react-router-dom"
import CreateUsers from "./pages/createUsers"
import UpdeateUsers from "./pages/updeateUsers"
import Users from "./pages/users";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/create" element={<CreateUsers />} />
          <Route path="/update" element={<UpdeateUsers />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
