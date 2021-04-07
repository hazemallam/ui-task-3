import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectUser } from "../features/UserSlice";
import { auth } from "../firebase";
import Nav from "../Nav"
import PlanScreen from "./PlanScreen";
import "./ProfileScreen.css"
function ProfileScreen(){
    const user = useSelector(selectUser)
    const history = useHistory();
    return(
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img src="./assets/avatar.png" alt="avatar"/>
                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen_plans">
                            <h3>Plans</h3>
                            <PlanScreen />
                            <button onClick={()=>{auth.signOut()
                            history.push("/")}} className="profileScreen_signOut">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileScreen;