import { NavLink } from "react-router-dom";

export default function AboutPage() {
    return (
        <>
            <h2>About Page</h2>

            <NavLink to="/about/ceo">CEO</NavLink> | <NavLink to="/about/coo">COO</NavLink>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus, distinctio voluptas dignissimos similique esse blanditiis? Alias culpa reprehenderit, voluptatem nobis eius iusto hic fuga itaque recusandae aliquam minima eveniet.</p>
        </>
    )
}