import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-8xl md:text-9xl font-bold text-zinc-800 tracking-tighter">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-zinc-400 mt-2">
          Not Found
        </h2>
        <p className="text-zinc-600 mt-4 max-w-md">
          The resource requested could not be found on this server!
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-900/50 border-t border-zinc-800 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-2">
          <p className="text-sm text-zinc-300">
            Proudly powered by{" "}
            <span className="hover:underline cursor-pointer">
              LiteSpeed Web Server
            </span>
          </p>
          <p className="text-xs text-zinc-500 max-w-2xl leading-relaxed">
            Please be advised that LiteSpeed Technologies Inc. is not a web
            hosting company and, as such, has no control over content found on
            this site.
          </p>
        </div>

        {/* Mock "Activate Windows" text from your screenshot */}
        <div className="text-right hidden lg:block opacity-40">
          <p className="text-zinc-400 text-sm">Activate Windows</p>
          <p className="text-zinc-500 text-xs">
            Go to Settings to activate Windows.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
