import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <header>
                <div className="container">
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
                </div>
            </header>
            <main>
                <div className="container">
                    <Outlet>
                    </Outlet>
                </div>
            </main>
            <footer>
            </footer>
        </>

    )

}