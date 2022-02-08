
import Links from './Links'
import "./Header.css"
import Announcement from "./Annoucement";


function NavBar(users,setUsers){

    return(
        <>
        <Announcement/>
        <header className="header">
            <nav className="nav-bar">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Links to="/clothes" className="nav-link">
                            Clothes
                        </Links>
                    </li>
                    {users !== null && (
                        <li className="nav-item">
                            <Links to="/bucket" className="nav-link">
                                Bucket
                            </Links>
                        </li>
                    )}
                    <li className="nav-item">
                        <Links to="/clothes" className="nav-link">
                            Clothes
                        </Links>
                    </li>
                </ul>
            </nav>
            <Links to="/" className="logo-link">
                <h1 className="logo">LOGO.</h1>
            </Links>

            <nav className="nav-bar">
                <ul className="nav-list">

                    {users === null ? (
                        <li className="nav-item">
                            <Links to="/login" className="nav-link">
                                LOG IN
                            </Links>
                        </li>
                    ) : (
                        <li className="nav-item">
                            <Links
                                to="/login"
                                className="nav-link"
                                onClick={() => {
                                    setUsers(null);
                                }}
                            >
                                LOG OUT
                            </Links>
                        </li>
                    )}

                </ul>
            </nav>
        </header>
        </>
    )
}
export default NavBar
