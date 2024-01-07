import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const judulStyle = {
            fontSize: '35px', 
            color: '#2d2d2d'
        };

        return (
            <div>
                <header>
                    <nav className="navbar">
                        <div>
                            <a href="/users" className="navbar-brand" style={judulStyle}>
                                Perpustakaan
                            </a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
