import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import "./Nav.css"
function Nav() {
    const [show, handleShow] = useState(false)
    const history = useHistory()
    const transitionNavbar = ()=>{
        window.scrollY > 100 ? handleShow(true) : handleShow(false)
    }

    useEffect(()=>{
        window.addEventListener("scroll", transitionNavbar)
        return ()=> window.removeEventListener("scroll", transitionNavbar)
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
                <img onClick={()=>{history.push("/")}} className="nav_logo" src="./assets/logo_transparent.png" alt="netflix logo" />
                <img onClick={()=>{history.push("/profile")}} className="nav_avatar" src="./assets/avatar.png" alt="avatar" />
            </div>
        </div>
    )
}
export default Nav