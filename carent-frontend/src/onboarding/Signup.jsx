import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthShell from "./AuthShell";
import { persistUser } from "../../../carent-backend/utils/authUser";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://carent-ymkk.onrender.com";

const moduleConfig = {
  customer: {
    title: "Customer Sign Up",
    subtitle: "Create a customer account to book vehicles, manage rides, and pay securely.",
    role: "user",
    secondaryText: "Already have an account?",
    secondaryLink: "/signin",
    secondaryLabel: "Sign in",
  },
  driver: {
    title: "Driver Sign Up",
    subtitle: "Create a driver account to accept rides, track earnings, and manage schedules.",
    role: "driver",
    secondaryText: "Already have a driver account?",
    secondaryLink: "/signin/driver",
    secondaryLabel: "Sign in as driver",
  },
};

export default function SignUp({ moduleType = "customer" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const config = moduleConfig[moduleType] || moduleConfig.customer;
  const isDisabled =
    !name.trim() ||
    !email.trim() ||
    !password.trim() ||
    !confirmPassword.trim() ||
    !agreed ||
    loading;

  useEffect(() => {
    if (window.location.hash === "#_=_") {
      window.history.replaceState(null, null, window.location.pathname);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) return toast.error("Please agree to the terms and privacy policy.");
    if (password !== confirmPassword) return toast.error("Passwords do not match.");
    if (password.length < 6) return toast.error("Password must be at least 6 characters.");

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ name, email, password, role: config.role }),
      });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Sign up failed.");
        return;
      }

      persistUser(data.user || { email, name });
      toast.success(data.message || "Account created successfully!");
      setTimeout(() => navigate("/home"), 1500);
    } catch (err) {
      toast.error("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${API_BASE_URL}/api/auth/google`;
  };

  const handleFacebookLogin = () => {
    window.location.href = `${API_BASE_URL}/api/auth/facebook`;
  };

  return (
    <AuthShell
      moduleType={moduleType}
      pageTitle={config.title}
      pageSubtitle={config.subtitle}
      secondaryText={config.secondaryText}
      secondaryLink={config.secondaryLink}
      secondaryLabel={config.secondaryLabel}
    >
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />

      <form onSubmit={handleSubmit} className="space-y-5" autoComplete="off">
        <div>
          <label className="block text-sm font-medium text-slate-700">Full name</label>
          <input
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Password</label>
          <div className="relative mt-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 pr-12 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Confirm password</label>
          <div className="relative mt-2">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 pr-12 text-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
            >
              {showConfirm ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className="mt-2 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
          />
          <span className="text-sm text-slate-500 leading-relaxed mt-1">
            I agree to the{' '}
            <Link to="/terms" className="text-indigo-600 hover:text-indigo-500 font-medium">
              Terms of Use
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-indigo-600 hover:text-indigo-500 font-medium">
              Privacy Policy
            </Link>.
          </span>
        </label>

        <button
          type="submit"
          disabled={isDisabled}
          className="w-full rounded-3xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Creating account…" : "Sign up"}
        </button>

        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400">or</span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={handleFacebookLogin}
            className="flex items-center justify-center rounded-3xl bg-[#1877F2] px-4 py-3 text-white transition hover:bg-[#165fcb]"
          >
            Facebook
          </button>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-50"
          >
            Google
          </button>
        </div>
      </form>
    </AuthShell>
  );
}
