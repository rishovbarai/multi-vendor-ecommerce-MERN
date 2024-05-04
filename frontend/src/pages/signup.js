import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FiUpload } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

const SignUpPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Display a preview of the selected image (optional)
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    // Here you can perform validation checks, API calls, etc.
    console.log("Form submitted:", {
      fullName,
      email,
      password,
      confirmPassword,
    });
    // Reset form fields
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
    setAvatar(null);
    // Show success modal
    setShowSuccessModal(true);
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Full Name"
            className="w-full border rounded p-2 mb-2"
            value={fullName}
            autoComplete="fullName"
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded p-2 mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="w-full border rounded p-2 mb-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute top-2 right-3"
              onClick={() => setPasswordVisible(!passwordVisible)} // Toggle password visibility
            >
              {passwordVisible ? <BsEyeSlash /> : <BsEye />}{" "}
              {/* Show/hide eye icon based on password visibility */}
            </button>
          </div>
          <input
            type="password" // Toggle input type based on password visibility
            placeholder="Confirm Password"
            className="w-full border rounded p-2 mb-4"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="flex items-center mb-2">
            {avatar ? (
              <img
                src={avatar}
                alt="Avatar"
                className="w-12 h-12 rounded-full mr-2"
              />
            ) : (
              <FiUpload className="w-6 h-6 mr-2" />
            )}
            <label className="border rounded p-2 flex items-center">
              Upload Avatar
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
            </label>
          </div>

          {error && <p className="text-red-500 mb-2">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 text-white w-full py-2 rounded"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="mt-2">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500">
              Log In
            </a>
          </p>
        </div>
      </div>
      {showSuccessModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md">
            <p className="text-2xl font-semibold mb-4">Success!</p>
            <p className="mb-4">You have successfully signed up.</p>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpPage;
