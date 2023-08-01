import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className="container-fluid bg-danger text-white p-3">
                <div className="row">
                    <div className="col-12">
                        <Link className="mx-5" to="/">Home</Link>
                        <Link className="mx-5" to="/info">Info</Link>
                    </div>
                </div>
            </div>
        </>
    )
}