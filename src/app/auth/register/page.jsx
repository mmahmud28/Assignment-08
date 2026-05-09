"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function RegisterPage() {

  const router = useRouter ()

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;

    const toastId = toast.loading("Registering...");

    try {

      // Register
      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        image,
      });


      if (error) {

        toast.error(error.message || "Register failed", {
          id: toastId,
        });

        return;
      }

      toast.success("Register successful 🎉", {
        id: toastId,
      });

     
      router.push('/main')

    } catch (err) {

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
          Create Account 🚀
        </h1>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-4">

          <input
            name="name"
            type="text"
            placeholder="Full Name"
            required
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            name="image"
            type="text"
            placeholder="Photo URL"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition font-semibold text-white shadow-lg"
          >
            Register
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-gray-500"></div>
          <span className="px-3 text-gray-300 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-500"></div>
        </div>

        {/* Google Button */}
        <button onClick={handelgooglelogin} className="w-full py-2 rounded-lg bg-white text-gray-700 font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Login link */}
        <p className="text-sm mt-6 text-center text-gray-300">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-orange-400 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}