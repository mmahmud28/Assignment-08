"use client";

export default function Home() {
  const user = null; // later replace with real auth

  const infoData = [
    {
      title: "Tiles Collection",
      desc: "High quality modern tiles for your home design."
    },
    {
      title: "Interior Ideas",
      desc: "Get inspired with modern interior design ideas."
    },
    {
      title: "Latest Updates",
      desc: "New tiles added every week with premium designs."
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">

      {/* NOT LOGGED IN */}
      {!user ? (
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold mb-3">
            🔒 Please Login First
          </h1>
          <p className="text-gray-300">
            You need to login to view this content.
          </p>

          <a
            href="/auth/login"
            className="mt-5 inline-block px-5 py-2 bg-orange-500 rounded-lg text-white"
          >
            Go to Login
          </a>
        </div>

      ) : (

        /* LOGGED IN - INFO PAGE */
        <div className="max-w-4xl w-full space-y-4">

          <h1 className="text-3xl font-bold text-white text-center mb-6">
            Welcome to Info Page 🚀
          </h1>

          {infoData.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-300 mt-1">{item.desc}</p>
            </div>
          ))}

        </div>

      )}

    </div>
  );
}