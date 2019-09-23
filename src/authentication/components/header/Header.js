import React from 'react'
import './Header.css'
class Header extends React.Component{    
    render() {
            return (
                <header className="headerContainer">
                    <img 
                        className="header_logo"
                        alt="header logo"
                        src="https://p7.hiclipart.com/preview/757/1018/421/fizzy-drinks-computer-icons-meal-food-lunch-food-icon.jpg" 
                    />
                    <h1 className="header_content">Food at ease</h1>
                </header>
            )
        }
     
}
export default Header