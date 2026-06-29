import React from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch("https://carent-ymkk.onrender.com/api/auth/signout", {
        method: "POST",
        credentials: "include",
      });
      toast.success("Logout successful");
      setTimeout(() => {
        navigate("/signin");
      }, 1500);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="text-red-500 hover:text-red-700 transition-colors bg-transparent border-none p-0"
      aria-label="Logout"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v9" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.343 5.657a8 8 0 1 0 11.314 0"
        />
      </svg>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
        toastClassName="!bg-[#131929] !border !border-indigo-900/60 !text-white"
      />
    </button>
  );
}
