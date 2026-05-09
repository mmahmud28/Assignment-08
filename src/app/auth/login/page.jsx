"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

const LoginPage = () => {

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const toastId = toast.loading("Logging in...");

    try {

      const { data, error } = await authClient.signIn.email({
        email,
        password,
        callbackURL:"/main"

      });

      if (error) {

        toast.error(error.message || "Login failed", {
          id: toastId,
          
        });

        return;
      }

      toast.success("Login successful 🎉", {
        id: toastId,
      });

      console.log(data);

    } catch (err) {

      console.log(err);

      toast.error("Something went wrong!", {
        id: toastId,
      });

    }
  };

 const handelgooglelogin = async () => {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: "/main",
  });
};

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">

      {/* TOASTER */}
      <Toaster position="top-right" />

      {/* Card */}
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Welcome Back 👋
        </h1>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-4">

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-orange-500"
          />

          <div className="text-right text-sm">
            <a href="#" className="text-orange-400 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
         
            type="submit"
            className="w-full py-2 rounded-lg bg-orange-500 hover:bg-orange-600 border-none text-white font-semibold"
          >
            Login
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-gray-500"></div>
          <span className="px-3 text-gray-300 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-500"></div>
        </div>

        {/* Google */}
        <button  onClick={handelgooglelogin} className="w-full py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-100 flex items-center justify-center gap-2 font-medium transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Register */}
        <p className="text-sm mt-6 text-center text-gray-300">
          Don’t have an account?{" "}
          <Link
            href="/auth/register"
            className="text-orange-400 hover:underline"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;