import { Link } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";

const NotFound = () => {
    return (
        <HomeLayout>
        <article style={{ padding: "100px" }}>
            <h1>Oops!</h1>
            <h5>Page Not Found</h5>
            <div>
                <Link to="/" className="btn btn-primary">Visit Our Homepage</Link>
            </div>
        </article>
        </HomeLayout>
    )
}

export default NotFound