import { Link } from "react-router-dom";

export function Page404() {
   return (
      <div>
         <h1 className="page-caption">404 - Page not found</h1>
         <Link to="/">Go to Home Page</Link>
      </div>
   )
}