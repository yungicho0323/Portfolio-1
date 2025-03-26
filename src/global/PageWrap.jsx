import { Outlet } from "react-router"


import Header from "./Header";
import Footer from "./Footer";

function PageWrap() {
    return(
        <>
            <Header />
            <main className="page-content">
                {/*content passed is going to be rendered here*/}
                <Outlet />
            </main>
            <Footer />
        
        </>
    );
}

export default PageWrap;