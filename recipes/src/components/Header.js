import { Link, Outlet } from 'react-router-dom';

export const Header = (props) => {
    return <>
    <nav class='navbar navbar-expand-md navbar-dark bg-dark'>
            <Link class='navbar-brand' to='/'><img src='/images/logo.png' alt='Cooking with Friends' width='30' height='24'/></Link>
            <button class='navbar-toggler' type='button' data-bs-toggle='collapse'data-bs-target='#collapsibleNavbar'>
                <span class='navbar-togggler-icon'></span>
            </button>
            <div class='collapse navbar-collapse' id='collapsibleNavbar'>
                {!props.loggedIn && <ul class='navbar-nav'>
                    <li class='nav-item'><Link class='nav-link' to='login'>Login</Link></li>
                    <li class='nav-item'><Link class='nav-link' to='register'>Register</Link></li>
                </ul>}
                {props.loggedIn && <ul class='navbar-nav'>
                    <li class='nav-item'><Link class='nav-link' to='recipes'>Recipes</Link></li>
                    <li class='nav-item'><Link class='nav-link' to='pantry'>Pantry</Link></li>
                    <li class='nav-item'><Link class='nav-link' to='friends'>Friends</Link></li>
                    <li class='nav-item'><Link class='nav-link' to='notifications'>Notifications</Link></li>    
                    <li class='nav-item'><Link class='nav-link' to='profile'>Profile</Link></li>
                    <li class='nav-item'><Link class='nav-link' to='privacy'>Privacy</Link></li>
                    <li class='nav-item'><Link class='nav-link' to='/' onClick={props.logout}>Logout</Link></li>
                </ul>}
            </div>
        </nav>     
        <Outlet/>
    </>
}