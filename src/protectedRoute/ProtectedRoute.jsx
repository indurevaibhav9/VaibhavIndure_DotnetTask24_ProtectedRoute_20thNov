import { useContext } from "react";
import UserContext from "../context/UserContex";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children })
{
    const { user } = useContext(UserContext);
    if (user != null && user.email === "v@gmail.com" && user.password === "123456")
    {
        return children;
    }
    alert("Please enter correct credentials or login to access dashboard");
    return <Navigate to="/" />;
}

export default ProtectedRoute;