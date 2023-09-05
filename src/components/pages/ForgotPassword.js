import React, { useState } from "react";

const ForgottenPass = ({ loginUser }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!email) {
      setError("Email is required");
      setIsSubmitting(false);
      return;
    }

    try {
      window.location.href = "/reset-password";
    } catch (err) {
      setError("An error occurred. Please try again later.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form"onSubmit={handleSubmit}>
        <input
          name="email"
          type="text"
          label="Enter your email address"
          placeholder="xyz@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <div className="error">{error}</div>}
        {!isSubmitting && <button type="submit">Submit</button>}
      </form>
    </div>
  );
};

export default ForgottenPass;

