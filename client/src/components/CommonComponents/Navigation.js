import React from 'react';
import settingsIconURL from '../Assets/SVG/settings-24px.svg'
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <div className="jumbotron-fluid text-white" style={jumbotronStyle}>
            <div className="container-fluid" style={{ margin: "auto" }}>
                <div className="row align-items-center no-gutters">
                    <div className="col-12 col-sm-11 col-lg-11 text-center text-md-left" style={textStyle}>
                        <NavLink to="/" exact style={{textDecoration: "none", color:"white"}}>MEDAID</NavLink>
                    </div>
                    <div className="col col-sm-1 col-lg-1" style={{ padding: "15px 0" }}>
                        <NavLink to="/settings" exact activeStyle={activeLink}>
                            <img style={imgStyle} alt="Settings" src={settingsIconURL} />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

const jumbotronStyle = {
    backgroundColor: "#cc0000",
}

const textStyle = {
    fontFamily: 'RussoOne-Regular',
    color: "white",
    fontSize: "50px",
    paddingLeft: "20px",
    paddingBotton: "30px",
};

const imgStyle = {
    filter: "invert(1)",
    webkitFilter: "invert(1)",
    height: "30px",
    width: "30px",
    display: "block",
    margin: "auto auto",
};

const activeLink = {
    borderBottom: "1px white",
}

export default Navigation;
