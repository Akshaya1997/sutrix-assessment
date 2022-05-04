import "./App.css";
import Person from "./Person";
import { personData, productData } from "./data";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Product from "./Product";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <div className="title">
        <h1>Sutrix India Assessment Answer</h1>
        <Link to="/assessment1">1. Assessment1</Link>
        <Link to="/assessment2">2. Assessment2</Link>
        <Link to="/assessment3">3. Assessment3</Link>
      </div>
      <Routes>
        <Route
          path={"/assessment1"}
          element={
            <Person
              firstName={personData?.firstname}
              lastName={personData?.lastname}
              dob={personData?.birthday}
            />
          }
        />
        <Route
          path={"/assessment2"}
          element={<Product productData={productData} />}
        />
        <Route path={"/assessment3"} element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;
