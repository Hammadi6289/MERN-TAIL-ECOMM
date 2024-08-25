import React from "react";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Payment Canceled</h1>
      <p style={styles.message}>
        Your payment was not completed. If you encountered an issue or changed
        your mind, feel free to try again.
      </p>
      <Link to="/" style={styles.button}>
        Return to Homepage
      </Link>
      <Link to="/cart" style={styles.secondaryButton}>
        View Cart
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
    color: "#f44336",
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
    backgroundColor: "#f44336",
    border: "none",
    borderRadius: "5px",
    textDecoration: "none",
    cursor: "pointer",
    marginBottom: "10px",
  },
  secondaryButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#757575",
    border: "none",
    borderRadius: "5px",
    textDecoration: "none",
    cursor: "pointer",
  },
};

export default Cancel;
