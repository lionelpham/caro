import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const divLogOut = (profile) => (
    <div className="group_out">
        <div className="profile">
            {profile}
        </div>
        <Link to="/logout">LOG OUT
            <div className="logout">
                LOG OUT
            </div>
        </Link>
    </div>
)
const Header = ()=> (
    <div>
        <div className="group_form">
            <div className="group_sign">
                <Link to ="/login">
                    <div className="login">
                        LOGIN
                    </div>
                </Link>
                <Link to="/signup">
                    <div className="signup">
                        SIGN UP
                    </div>
                </Link>
            </div>
        </div>
        <div className="mt-2 top__header container">
            <h1 className="text-center font-weight-bold">Caro Game</h1>
        </div>
    </div>
    
);
export default Header;

