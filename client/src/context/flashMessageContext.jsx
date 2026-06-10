import { createContext } from "react"
import { toast } from "react-toastify"

export const messageContext = createContext()

const FlashMessageContext = (props) => {

    const flashMessage = (type , message) => {
        switch(type){
            case "success" :
                toast.success(message)
                break
            case "warn" :
                toast.warn(message)
                break
            case "error" :
                toast.error(message)
                break
            default :
                toast.info(message)
        }
    }

  return (
    <div>
        <messageContext.Provider value={{flashMessage}}>
            {props.children}
        </messageContext.Provider>
    </div>
  )
}

export default FlashMessageContext
