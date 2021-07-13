import React from 'react'
import styled from 'styled-components'
import PopUp from '../../common/PopUp'

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #e0e0e0;
    border-raduis: 40px;
    display: flex;
    align-items: center;
    justify-content: center; 
    .btn {
        width: 130px;
        height: 45px;
        background: #e0e0e0;
        outline: none;
        border: none;
        font-size: 18px;
        text-transform: uppercase;
        font-weight: 600;
        margin: 20px 0px;
        color: #5ab9ea;
        cursor: pointer;
        border-radius: 40px;
        box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2), -12px -12px 24px 0 rgba(255, 255, 255, 1);        
    }
    .account-text {
        color: #5ab9ea;
        font-weight: 600;       
        padding-left: 6px;
    }
`

const SignInForm = styled.div`
    p, a {
        color: #999;
        text-align: center;
        font-size: 14px;
    }
`

const Title = styled.div`
    font-size: 35px;
    color: #5ab9ea;
    margin-bottom: 10px;
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
`

const InputField = styled.div`
    width: 320px;
    height: 50px;
    margun: 10px 0px;
    background: #e0e0e0;
    border-radius: 40px;
    display: flex;
    align-items: center;
    margin: 20px 0px;
    box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
    i {
        flex: 1.2;
        text-align: center;
        font-size: 20px;
        color: #999;
    }
    input {
        flex: 5;
        width: 100%;
        color: #999;
        font-size: 18px;
        font-weight: 500;
        border: none;
        outline: none;
        background: none;
`

function SignUp(props) {
    const { closePopUp, SignUpPopUp } = props

    return (
        <PopUp width={window.innerWidth < 468 ? 340 : 450} noPadding={true} onClose={() => closePopUp(false)}>
            <Container>
                <SignInForm>
                    <Title>Sign Up</Title>
                    <InputField>
                        <i className='fa fa-user' aria-hidden='true'></i>
                        <input type='text' placeholder='Username' />
                    </InputField>
                    <InputField>
                        <i className='fa fa-envelope' aria-hidden='true'></i>
                        <input type='text' placeholder='Email' />
                    </InputField>
                    <InputField>
                        <i className='fa fa-lock' aria-hidden='true'></i>
                        <input type='password' placeholder='Password' />
                    </InputField>
                    <InputField>
                        <i className='fa fa-lock' aria-hidden='true'></i>
                        <input type='password' placeholder='Confirm Password' />
                    </InputField>
                    <input type='submit' value='Sign Up' className='btn' />
                    <p>Already have an account? <span className='account-text' id='sign-in-link' onClick={() => SignUpPopUp(true)} >Sign In</span></p>
                </SignInForm>
            </Container>
        </PopUp>
    )
}

export default SignUp
