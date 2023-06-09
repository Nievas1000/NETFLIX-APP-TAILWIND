import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar"
import { Movies } from "./pages/Movies";

function App() {
  return (
    <div className="bg-zinc-900 "> 
      <NavBar />
      <div className="md:mt-16">
        <Routes>
          <Route
              path='/'
              element={
                  <Home />
              }
            />
            <Route
              path='/movies'
              element={
                  <Movies />
              }
            />
        </Routes> 
      </div>
    </div>
  );
}

export default App;
