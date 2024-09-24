import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import { Link } from "react-router-dom";
import back from "./assets/aberrant-01.jpeg";
import { formatTime } from "./function/user.js";

const firebaseConfig = {
  apiKey: "AIzaSyAqx1eDrMYlMS-BFnZPZLihg2ZVdGM76K8",
  authDomain: "reactport-a9e0f.firebaseapp.com",
  projectId: "reactport-a9e0f",
  storageBucket: "reactport-a9e0f.appspot.com",
  messagingSenderId: "947268819680",
  appId: "1:947268819680:web:b4f290abd3d16694f34e85",
  databaseURL: "https://reactport-a9e0f-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const feedbackRef = ref(getDatabase(app), "feedback");

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [load,setLoad]=useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous success and error messages
    setSuccess(false);
    setError("");

    // Input validation
    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const feedback = {
        name,
        email,
        message,
      };
      await push(feedbackRef, feedback);

      // After successful submission
      setSuccess(true);
      setName(""); // Reset form only on success
      setEmail("");
      setMessage("");
    } catch (err) {
      // If there is an error during submission
      setError("Error sending feedback. Please try again.");
      console.error("Error:", err);
    }
  };
  let hour = formatTime();

  return (
    <div className="flex flex-col  items-center justify-center h-screen bg-gray-100 bg-gradient-to-br from-blue-600 to-violet-800">
      <div className=" top-0  bg-violet-950 text-teal-50 flex justify-between z-20 absolute  w-screen">
        <div className="mx-10 text-1xl font-semibold tracking-wide ">
          <span>Portfolio</span>
        </div>
        <div>
          <p className="font-extralight text-md mx-5">{hour}</p>
        </div>
      </div>
      <Link to="/">
        <button className="absolute top-9 right-4 w-10 text-white bg-red-500 rounded-full p-2 hover:bg-red-600">
          &times;
        </button>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg rounded-lg px-10 py-8 mb-6 max-w-md w-full mx-auto"
      >
        <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-6">
          Feedback Form
        </h2>

        {success && (
          <p className="text-green-600 text-center font-semibold mb-4">
            Feedback sent successfully!
          </p>
        )}
        {error && (
          <p className="text-red-500 text-center font-semibold mb-4">{error}</p>
        )}

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow-lg border-0 rounded-lg w-full py-3 px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow-lg border-0 rounded-lg w-full py-3 px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="shadow-lg border-0 rounded-lg w-full py-3 px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
            placeholder="Your message..."
            required
          />
        </div>

        <div className="flex items-center justify-center">
          {!success ? (
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 ease-in-out transform hover:scale-105 relative"
            >
              Submit
            </button>
          ) : (
            <div class="flex flex-row gap-2">
              <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
              <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
              <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Feedback;
