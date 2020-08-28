import React from 'react';

const LoginNav = () => {
    return (
        <div className="jumbotron-fluid text-white" style={jumbotronStyle}>
                <div className="row align-items-center no-gutters">
                    <div className="col text-center" style={textStyle}>
                        MEDAID
                    </div>
                </div>
        </div>
    )
}

const textStyle = {
    fontFamily: 'RussoOne-Regular',
    color: "white",
    fontSize: "50px",
};

const jumbotronStyle = {
    backgroundColor: "#cc0000",
};


export default LoginNav
