import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Item from "./screens/item";
import Products from "./screens/Products";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/product/:id" exact element={<Item />} />

          <Route path="/product" exact element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
