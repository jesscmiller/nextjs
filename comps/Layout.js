import { Children } from "react/cjs/react.production.min";
import Navbar from "./Navbar";
import Footer from "./Footer"

const Layout = () => {
    return (
        <div className="content">
            <Navbar />
            { Children }
            <Footer />
        </div>
    )
}

export default Layout ;