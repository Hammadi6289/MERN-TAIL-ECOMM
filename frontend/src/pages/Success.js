import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Payment Successful!</h1>
      <p style={styles.message}>
        Thank you for your purchase. Your transaction has been completed, You
        can check your order status in Orders
      </p>
      <Link to="/" style={styles.button}>
        Go to Homepage
      </Link>
      <Link to="/order" style={{ ...styles.button, ...styles.secondaryButton }}>
        Track Order
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#f4f4f4",
    padding: "20px",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#4caf50",
    marginBottom: "20px",
  },
  message: {
    fontSize: "1.2rem",
    marginBottom: "30px",
    maxWidth: "500px",
    lineHeight: "1.5",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#4caf50",
    border: "none",
    borderRadius: "5px",
    textDecoration: "none",
    cursor: "pointer",
    marginTop: "10px", // Added margin to create space between buttons
  },
  secondaryButton: {
    backgroundColor: "#388e3c", // Optional: Different color for the second button
  },
};

export default Success;
