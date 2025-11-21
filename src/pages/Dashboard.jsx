import React from "react";

function Dashboard()
{

    const containerStyle = {
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh"
    };

    const headerStyle = {
        fontSize: "28px",
        fontWeight: "bold",
        marginBottom: "20px",
        color: "#333"
    };

    const cardContainer = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        marginTop: "20px"
    };

    const cardStyle = {
        backgroundColor: "#fff",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        transition: "0.3s",
        cursor: "pointer",
        textAlign: "center"
    };

    const hoverEffect = {
        transform: "scale(1.05)"
    };

    const stats = [
        { title: "Users", value: "1,245" },
        { title: "Orders", value: "312" },
        { title: "Revenue", value: "$4,520" },
        { title: "Pending Tasks", value: "12" },
        { title: "Completed", value: "89%" },
        { title: "Tickets", value: "18" }
    ];

    return (
        <div style={containerStyle}>
            <div style={headerStyle}> Dashboard Overview</div>

            <div style={cardContainer}>
                {stats.map((item, index) => (
                    <div
                        key={index}
                        style={cardStyle}
                        onMouseEnter={(e) =>
                        {
                            e.target.style.transform = hoverEffect.transform;
                        }}
                        onMouseLeave={(e) =>
                        {
                            e.target.style.transform = "scale(1)";
                        }}
                    >
                        <h3 style={{ marginBottom: "10px", fontSize: "20px" }}>
                            {item.title}
                        </h3>
                        <p style={{ fontSize: "24px", fontWeight: "bold", color: "#4CAF50" }}>
                            {item.value}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
