import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import About from './Pages/About/About/About';
import Food from './Pages/Food/Food/Food';
import AddRecipe from './Pages/AddRecipe/AddRecipe/AddRecipe';
import Profile from './Pages/Profile/Profile';
import UpdatePost from './Pages/Profile/UpdatePost';
import FoodDetails from './Pages/Food/FoodDetails/FoodDetails';
import Favourite from './Pages/Home/Favourite/Favourite';
import Favourites from './Pages/Home/Favourite/Favourites';


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/aboutUs" element={<About />} />
            <Route path="/food" element={<Food />} />
            <Route path="/addRecipe" element={<AddRecipe />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/users/update/:id" element={<UpdatePost />} />
            <Route path="/food/details/:id" element={<FoodDetails />} />
            <Route path="/food/favourite/:id" element={<Favourite />} />
            <Route path="/MyFavourite" element={<Favourites />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
