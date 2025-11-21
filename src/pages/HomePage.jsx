import React from 'react';

function HomePage()
{

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        color: "white",
        padding: "20px",
        fontFamily: "Arial, sans-serif"
    };

    const headingStyle = {
        fontSize: "40px",
        fontWeight: "bold",
        marginBottom: "15px"
    };

    const textStyle = {
        fontSize: "18px",
        maxWidth: "600px",
        lineHeight: "1.5",
        marginBottom: "25px",
        opacity: "0.9"
    };

    const buttonStyle = {
        backgroundColor: "#fff",
        color: "#2575fc",
        padding: "12px 25px",
        borderRadius: "30px",
        fontSize: "18px",
        fontWeight: "bold",
        border: "none",
        cursor: "pointer",
        transition: "0.3s"
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Welcome to the Home Page </h1>

            <p style={textStyle}>
                This is a simple and beautiful Home Page designed with inline CSS.
                Explore the dashboard, manage your data, and enjoy an elegant UI experience.
            </p>

            <button
                style={buttonStyle}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
                Get Started →
            </button>
        </div>
    );
}

export default HomePage;
