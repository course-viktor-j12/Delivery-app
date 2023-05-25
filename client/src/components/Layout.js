import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <header>
                <h1>The Food Delivery</h1>
                <div className="container-header">
                    <div className="header-link">
                        <NavLink to={'/'} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Shop</NavLink>
                    </div>
                    <div className="header-link">|</div>
                    <div className="header-link">
                        <NavLink to={'/shoppingCart'} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Shopping Cart</NavLink>
                    </div>
                </div>
            </header>
            <main>
                <Outlet>
                </Outlet>
            </main>
            <footer>

            </footer>
        </>

    )

}