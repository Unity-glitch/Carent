import React, { useState } from "react";
import { Link } from "react-router-dom";
import carBg from "../assets/car-1.jpeg";
import logo from "../assets/logo.png";
import StarField from "./StarField";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic
  };

  return (
    <div
      className="min-h-screen bg-black relative overflow-hidden flex flex-col md:flex-row justify-center md:justify-start items-center"
      style={{
        backgroundImage: `url(${carBg})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <StarField />
      {/* Ambient glow */}
      <div className="absolute top-25 left-1/2 -translate-x-1/2 w-125 h-100 bg-indigo-700 opacity-20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-amber-500 opacity-10 blur-[100px] rounded-full pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-6 md:px-12 md:pl-20 md:w-1/2 md:items-start md:justify-center">
        <div className="w-full max-w-sm text-center md:text-left">
          {/* Logo + Brand */}
          <div className="flex items-center mb-4 justify-center md:justify-start">
            <img src={logo} alt="logo" className="w-12 h-12 rounded-md" />
            <h1 className="text-white font-bold text-2xl">Carent</h1>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-extrabold text-white mb-8">
            Login To Your Account
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#131929] border border-indigo-900/60 text-white text-sm rounded-2xl pl-11 pr-4 py-4 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder-indigo-300/30 transition-colors"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#131929] border border-indigo-900/60 text-white text-sm rounded-2xl pl-11 pr-12 py-4 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder-indigo-300/30 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-indigo-200 transition-colors"
              >
                {showPassword ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Forgot + Remember */}
            <div className="flex items-center justify-between pt-1">
              <Link
                to="/forgot-password"
                className="text-xs text-amber-400 hover:text-amber-300 font-medium transition-colors"
              >
                Forgot Password?
              </Link>
              <label className="flex items-center gap-2 cursor-pointer">
                <div
                  onClick={() => setRemember(!remember)}
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${remember ? "bg-indigo-600 border-indigo-600" : "border-indigo-600/50"}`}
                >
                  {remember && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-xs text-indigo-300/70">Remember me</span>
              </label>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base tracking-wide shadow-lg shadow-indigo-600/40 transition-all duration-200 hover:shadow-indigo-500/50 hover:scale-[1.02] mt-2"
            >
              Login
            </button>
          </form>

          {/* OR divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-indigo-900/60" />
            <span className="text-xs text-indigo-400/60 font-medium">OR</span>
            <div className="flex-1 h-px bg-indigo-900/60" />
          </div>

          {/* Social login */}
          <div className="flex justify-center gap-4">
            {[
              {
                label: "Facebook",
                icon: (
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                ),
                bg: "bg-[#1877F2]",
              },
              {
                label: "Google",
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#EA4335"
                      d="M5.266 9.765A7.077 7.077 0 0112 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115z"
                    />
                    <path
                      fill="#34A853"
                      d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 01-6.723-4.823l-4.04 3.067A11.965 11.965 0 0012 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987z"
                    />
                    <path
                      fill="#4A90E2"
                      d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.277 14.268A7.12 7.12 0 014.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 000 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067z"
                    />
                  </svg>
                ),
                bg: "bg-white",
              },
              {
                label: "Apple",
                icon: (
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                ),
                bg: "bg-gray-900",
              },
            ].map((s) => (
              <button
                key={s.label}
                className={`w-12 h-12 rounded-2xl ${s.bg} flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200`}
                aria-label={s.label}
              >
                {s.icon}
              </button>
            ))}
          </div>

          {/* Sign up link */}
          <p className="text-center md:text-left text-sm text-indigo-300 mt-8">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-amber-400 hover:text-amber-300 font-bold transition-colors"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
