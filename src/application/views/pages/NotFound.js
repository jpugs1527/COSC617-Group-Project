import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import '../assets/css/404.css'

class Page404 extends Component {

    render() { 
        return (
            <div>
                <Helmet>
                    <title>404 - Page not found</title>
                </Helmet>
           <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>Oops!</h1>
                </div>
                <h2>404 - Page not found</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <Link to="/login">Go To Homepage</Link>
            </div>
            </div>
        </div>
        )
    }
}

export default Page404