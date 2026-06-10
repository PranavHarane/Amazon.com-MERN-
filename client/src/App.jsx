import Header from './pages/header';
import AdminHeader from './pages/adminHeader';
import Footer from './pages/footer';
import Index from './pages/index';
import Signin from './pages/signinPage';
import Signup from './pages/signupPage';
import AdminSignin from './pages/adminSignin';
import AdminSignup from './pages/adminSignup';
import Cart from './pages/cart';
import AccountPage from './pages/accountPage';
import SearchedProductPage from './pages/searchedProductPage';
import AllCreatedProductPage from './pages/allCreatedProductPage';
import CreateCategoryPage from './pages/createCategoryPage';
import CreateProductPage from './pages/createProductPage';
import EditProductPage from './pages/editProductPage';
import DetailedProduct from './pages/detailedProduct';
import Error404 from './pages/error404'
import { Route, Routes , Outlet} from 'react-router-dom';
import Example from './pages/example';

const App = () => {

  return <>
    <Routes>
        <Route element={
          <>
            <Header/>
            <Outlet/>
            <Footer/>
          </>
        }>
        
          <Route path='/' element={<Index/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/accountPage' element={<AccountPage/>}/>
          <Route path='/searchedProductPage' element={<SearchedProductPage/>}/>
          <Route path='/detailedProduct/:productId' element={<DetailedProduct/>}/>
          <Route path='/example' element={<Example/>}/>
        </Route>
        
        <Route element={<><AdminHeader/><Outlet/></>}>
          <Route path='/allCreatedProductPage' element={<AllCreatedProductPage/>}/>
          <Route path='/createCategoryPage' element={<CreateCategoryPage/>}/>
          <Route path='/createProductPage' element={<CreateProductPage/>}/>
          <Route path='/editProductPage/:productId' element={<EditProductPage/>}/>
        </Route>
        
        <Route path='/owner'>
          <Route path='signin' element={<AdminSignin/>}/>
          <Route path='signup' element={<AdminSignup/>}/>
        </Route>

        <Route path='*' element={<Error404/>}/>
    </Routes>

  </>
}

export default App;