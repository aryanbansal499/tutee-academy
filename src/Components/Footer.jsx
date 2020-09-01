import React from 'react';

const Footer = () => 
{
    return(
        <>
        <div className = "main-footer">
            <div className = "footer-container">
                <div className = "row">
                    <div className = "col">
                        <h4>Tutee Academy</h4>
                        <ul className = "list-unstyled">
                            <li>8800275744</li>
                            <li>Delhi, India</li>
                            <li>123 street sample address</li>
                        </ul>
                    </div>

                    <div className = "col">
                        <h4>Stuff</h4>
                        <ul className = "list-unstyled">
                            <li>sample</li>
                            <li>social media</li>
                            <li>icons and other stuff</li>
                        </ul>
                    </div>

                    <div className = "col">
                        <h4>Another Column</h4>
                        <ul className = "list-unstyled">
                            <li>sample again</li>
                            <li>social media</li>
                            <li>icons and other stuff</li>
                        </ul>
                    </div>
                    <hr/>
                </div>
                <div className = "row">
                    <p className = "col-sm">
                        &copy;{new Date().getFullYear()} TUTEE ACADEMY | All Rights Reserved | Terms of Service | Privacy
                    </p>
                </div>
                    
            </div>

        </div>
        </>
    );
};

export default Footer;