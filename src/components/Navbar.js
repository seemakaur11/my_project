import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PopUp from '../common/PopUp'
import { ButtonContainer } from './Button'
import LoginPopup from './user-authenticate/Login'
import SignUp from './user-authenticate/SignUp'
import logo3 from '../../src/assets/images/home/logo3.png'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openPopup: false,
            openLoginPopUp: false
        }
    }

    closePopUp = status => this.setState({ openPopup: status })
    SignUpPopUp = status => this.setState({ openLoginPopUp: status })

    render() {
        const { openPopup, openLoginPopUp } = this.state
        return (
            <Fragment>
                <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo3} className="imageLogo" alt="logo3-img"/>
                </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                            <Link to="/product" className="nav-link">
                                products
                        </Link>
                        </li>
                    </ul>
                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <span className="mr-2">
                                <i className="fas fa-cart-plus" />
                            </span>
                    my cart
                </ButtonContainer>
                    </Link>
                    <UserIcon onClick={() => this.setState({ openPopup: !this.state.openPopup, openLoginPopUp: !this.state.openLoginPopUp })}>
                        <i class="fa fa-user-circle" aria-hidden="true"></i>
                    </UserIcon>
                </NavWrapper>
                {openPopup && <PopUp>
                    <div>{openLoginPopUp ?
                        <LoginPopup closePopUp={this.closePopUp} SignUpPopUp={this.SignUpPopUp} />
                        : <SignUp closePopUp={this.closePopUp} SignUpPopUp={this.SignUpPopUp} />
                    }
                    </div>
                </PopUp>}
            </Fragment>
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;

const UserIcon = styled.div`
    color: #fff;
    font-size: 24px;
    padding-left: 20px;
    i {
        cursor: pointer;
    }
`

