import React from 'react';
import PropTypes from "prop-types";

const Header = ({text, bgColor}) => {

    const headerStyle = {
        background:bgColor,
        color: "lightgrey"
    }

  return (
    <header style={headerStyle}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: "Review App",
    bgColor: "rgba(0,0,0,0.5)",
}

Header.propTypes = {
    text: PropTypes.string
}



export default Header;
