import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted overflow-x-hidden px-4">
      <div className="text-center max-w-sm mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 sm:gap-3 mb-6 flex-wrap justify-center">
          <img src="/New_Logo.png" alt="Dr D Academy" className="h-14 sm:h-16 w-auto shrink-0" />
          <span className="font-serif text-xl sm:text-2xl font-bold text-foreground">Dr D Academy</span>
        </Link>
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <Link to="/" className="inline-flex items-center justify-center min-h-[44px] text-primary underline hover:text-primary/90">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
