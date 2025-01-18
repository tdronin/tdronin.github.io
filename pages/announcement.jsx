import React from "react";

const Announcement = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Lunect Holdings</h1>
      <p style={styles.text}>
        Lunect Holdings has secured a <strong>Letter of Intent</strong> to acquire a
        leading engineering and design firm specializing in laminated wood outdoor structures.
      </p>
      <p style={styles.text}>
        If you are interested in learning more, please sign our NDA using the form below.
      </p>

      {/* JotForm Embed */}
      <div style={styles.formContainer}>
        <script
          type="text/javascript"
          src="https://form.jotform.com/jsform/250176064158153"
        ></script>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "40px",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "32px",
    color: "#333",
  },
  text: {
    fontSize: "18px",
    color: "#555",
    maxWidth: "600px",
    margin: "0 auto 20px",
    lineHeight: "1.5",
  },
  formContainer: {
    marginTop: "30px",
  },
};

export default Announcement;
