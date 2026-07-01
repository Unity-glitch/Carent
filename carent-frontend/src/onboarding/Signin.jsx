import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthShell from "./AuthShell";
import { persistUser } from "../../../carent-backend/utils/authUser";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://carent-ymkk.onrender.com";

const moduleConfig = {
  customer: {
    title: "Customer Sign In",
    subtitle: "Access your bookings, manage rentals, and track order status.",
    role: "user",
    secondaryText: "Need a driver account?",
    secondaryLink: "/signin/driver",
    secondaryLabel: "Sign in as driver",
  },
  driver: {
    title: "Driver Sign In",
    subtitle: "Login to manage your driving schedule, rides, and earnings.",
    role: "driver",
    secondaryText: "Need a customer account?",
    secondaryLink: "/signin",
    secondaryLabel: "Sign in as customer",
  },
};

export default function SignIn({ moduleType = "customer" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const config = moduleConfig[moduleType] || moduleConfig.customer;
  const isDisabled = !email.trim() || !password.trim() || loading;

  useEffect(() => {
    if (window.location.hash === "#_=_") {
      window.history.replaceState(null, null, window.location.pathname);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password, role: config.role }),
      });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Login failed.");
        return;
      }

      persistUser(data.user || { email, name: email });
      toast.success(data.message || "Login successful!");
      setTimeout(() => navigate("/home"), 1200);
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

        <div className="flex items-center justify-between text-sm text-slate-500">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
              className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
            />
            Remember me
          </label>
          <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={isDisabled}
          className="w-full rounded-3xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Sign in"}
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
