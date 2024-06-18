import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Root() {
   return (
      <div className="content">
         <Header />
         <section>
            <Outlet />
         </section>
         <Footer />
      </div>
   )
}