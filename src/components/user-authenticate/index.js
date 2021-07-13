import React, { useState } from 'react'
import { withRouter } from 'react-router'
import LoginPopup from './Login'
import SignUp from './SignUp'

const Authenticate = (props) => {
    const { closePopUp } = props
    const [showLoginPopUp, SetshowLoginPopUp] = useState(false)

    const showSignPopUp = statue => SetshowLoginPopUp(statue)

    return (
        <div>
            {!showLoginPopUp ? <LoginPopup showSignPopUp={showSignPopUp} closePopUp={closePopUp} /> : <SignUp showSignPopUp={showSignPopUp} closePopUp={closePopUp} />}
        </div>
    )
}
export default withRouter(Authenticate);

