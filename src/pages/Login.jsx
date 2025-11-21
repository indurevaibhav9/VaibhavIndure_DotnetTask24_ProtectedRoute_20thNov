import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContex";

function Login()
{
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        setUser({
            email: e.target[0].value,
            password: e.target[1].value,
        });
        navigate("/dashboard");
    };

    // Inline Styles
    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        fontFamily: "Arial, sans-serif",
    };

    const formStyle = {
        width: "350px",
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    };

    const inputStyle = {
        padding: "12px",
        fontSize: "16px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        outline: "none",
        transition: "0.3s",
    };

    const btnStyle = {
        padding: "12px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "18px",
        transition: "0.3s",
    };

    return (
        <div style={containerStyle}>
            <form style={formStyle} onSubmit={handleSubmit}>
                <h2 style={{ textAlign: "center", marginBottom: "10px", color: "#333" }}>
                    Login 
                </h2>

                <input
                    type="email"
                    required
                    placeholder="Enter Email"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.border = "1px solid #4CAF50")}
                    onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
                />

                <input
                    type="password"
                    required
                    placeholder="Enter Password"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.border = "1px solid #4CAF50")}
                    onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
                />

                <button
                    type="submit"
                    style={btnStyle}
                    onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                >
                    Login →
                </button>
            </form>
        </div>
    );
}

export default Login;
