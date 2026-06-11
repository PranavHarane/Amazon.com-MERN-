import ReactDOM from 'react-dom/client'
import './input.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import FlashMessageContext from './context/flashMessageContext.jsx'
import { Bounce, ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <FlashMessageContext>
            <App />
        </FlashMessageContext>
        <ToastContainer 
            position="top-center"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
        />
    </BrowserRouter>
)
