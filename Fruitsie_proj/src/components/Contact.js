import React from "react";

const Contact = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Contact Us</h1>
        <p style={styles.text}>
          📍 Address: 123 Main Street, Chennai.
        </p>
        <p style={styles.text}>
          📞 Phone: +91 63698 04102
        </p>
        <p style={styles.text}>
          ✉️ Email: sashwarmoses@gmail.com
        </p>
        <p style={styles.text}>
          ⏰ Working Hours: Mon-Fri, 9:00 AM - 5:00 PM
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f9",
  },
  card: {
    textAlign: "center",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
    maxWidth: "400px",
    width: "90%",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "16px",
    color: "#333",
  },
  text: {
    fontSize: "16px",
    margin: "8px 0",
    color: "#555",
  },
};

export default Contact;
