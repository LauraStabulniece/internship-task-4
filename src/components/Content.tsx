import { Route, Routes } from "react-router-dom"
import Contact from "../Pages/Contact"
import Landing from "../Pages/Landing"
import Mission from "../Pages/Mission"
import Stories from "../Pages/Stories"

function Content() {
    return (
        <div>
            <Routes>
                <Route>
                    <Route path="/" element={<Landing />} />
                    <Route path="/stories" element={<Stories />} />
                    <Route path="/mission" element={<Mission />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </div>
    );
}
export default Content





