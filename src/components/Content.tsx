import { Route, Routes } from "react-router-dom"
import Contact from "../Pages/Contact"
import Mission from "../Pages/Mission"
import Stories from "../Pages/Stories"
import Footer from "./Footer"
import Header from "./Header"
import Landing from "../Pages/Landing"

function Content() {
    return (
        <div>
            <Header />
            <Routes>
                <Route>
                    <Route path="/" element={<Landing />} />
                    <Route path="/stories" element={<Stories />} />
                    <Route path="/mission" element={<Mission />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    );
}
export default Content







