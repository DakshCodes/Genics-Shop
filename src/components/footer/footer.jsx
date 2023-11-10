import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer-main'>
            <div className="footer-1">
                <div className="logo-footer">
                    GS
                </div>
                <p>Real Designs By Real Artists <br /> For Real Peoples!</p>
            </div>
            <div className="footer-2">
                <div className="footer-list">
                    <p>Product</p>
                    <ul><li>Jacket</li></ul>
                    <ul><li>Shirt</li></ul>
                    <ul><li>Dresses</li></ul>
                    <ul><li>OutWear</li></ul>
                    <ul><li>Bottom</li></ul>
                </div>
                <div className="footer-list">
                    <p>Buying</p>
                    <ul><li>Shop</li></ul>
                    <ul><li>Terms Of Use</li></ul>
                    <ul><li>Privacy</li></ul>
                    <ul><li>How i'ts Work</li></ul>
                    <ul><li>Customer Services</li></ul>
                </div>
                <div className="footer-list">
                    <p>Social</p>
                    <ul><li>Instagram</li></ul>
                    <ul><li>Facebook</li></ul>
                    <ul><li>Twitter</li></ul>
                </div>
                <div className="community">
                    <p>Join Out Community</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
