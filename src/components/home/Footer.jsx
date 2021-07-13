import React from 'react'
// import { render } from 'react-dom'
// import styled from 'styled-components'

function Footer() {
         return (
             <div className='mainFooter'>
                <div class='container'>
                    <div class='row'>
                        <div class='col'>
                            <h4 className="mainFooterHeading1">About</h4>
                            <ul className='list-styled'>
                                <li>About</li>
                                <li>Contact</li>
                                <li><a href='/blog'>Inside Blog</a></li>
                                <li><a href='/product' >Products</a></li>
                            </ul>

                        </div>
                        <div class='col'>
                            <h4 className="mainFooterHeading2">Supports</h4>
                            <ul className='list-styled'>
                                <li>Videos Guides</li>
                                <li>Help</li>
                                <li>Warranty</li>
                            </ul>

                        </div>
                    </div>

                </div>
                 
             </div>
         )
}
export default Footer;

//  const Footers = styled.div`
//  backgorund-color: white;
//  `