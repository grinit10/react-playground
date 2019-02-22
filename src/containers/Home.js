import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
                <a className='navbar-brand' href='home'>
                    <img src='../public/favicon.ico' alt='logo' style={{
                        width: 40 + 'px'
                    }}></img>
                </a>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <a className='nav-link' href='register'>Register</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='login'>Log In</a>
                    </li>
                    {this.props.user ?
                        <li className='nav-item active'>
                            <a className='nav-link' href='meeting'>Meetings</a>
                        </li> : null}
                </ul>
            </nav>);
    }
}

export default Home;