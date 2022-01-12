import {Link} from 'react-router-dom';

function NavBar({productNum}){
    return(
<nav className ="navbar navbar-default">
    <div className="container-fluid">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <ul className="nav navbar-nav">
                <li style={{fontSize:25}}><Link to={"/"}>Shop</Link></li>
            </ul>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
                <li><Link to={"/cartlist"}>Cart({productNum})</Link></li>
                
            </ul>
        </div>
    </div>
</nav>
    )
}

export default NavBar;