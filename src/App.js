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
import FavouriteDetails from './Pages/Home/Favourite/FavouriteDetails';
import SingleFavourite from './Pages/Home/Favourite/SingleFavourite';
import NotFound from './Pages/NotFound/NotFound';



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
            <Route path="/favourite" element={<SingleFavourite />} />
            <Route path="/favourite/:id" element={<FavouriteDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
