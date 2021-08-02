import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import PopUp from '../../common/PopUp'
import { auth, createUserProfileDocument } from '../../Firebase'


const Container = styled.div`
    width: 100%;
    height: 100%;

    border-raduis: 40px;
    display: flex;
    align-items: center;
    justify-content: center; 
    .btn {
        width: 130px;
        height: 45px;
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
    const [userRegister, setUserRegister] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    })
    const [records, setRecords] = useState([])

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserRegister({ ...userRegister, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = { ...userRegister, id: new Date().getTime().toString() }
        setRecords([...records, newRecord]);
        setUserRegister({ username: '', email: '', password: '', confirm_password: '' })

    /** APPLY VALIDATION */
        if(userRegister.username === ""){ 
            alert('Username is required') 
             return 
            }
        else if(!/^[A-Za-z]+$/i.test(userRegister.username)){
           alert('Only alphabet characters are allowed')
           return 
        }
        if(userRegister.email === ""){ alert('Email is required')
        return 
    }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userRegister.email)) {
             alert('Invalid email address')
             return 
        }
        if(userRegister.password === ""){ alert('Password is required')
        return 
    }
        else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/i.test(userRegister.password)) {
            alert('Invalid Password')
            return 
        }
        if(userRegister.confirm_password === ""){ 
            alert('Confirm password is required')
           return 
    }
       else if (userRegister.password !== userRegister.confirm_password) {
          alert('Password not match')
          return 
        }

        /** use firebase database */
       const { user } = auth.createUserWithEmailAndPassword(userRegister.email,userRegister.password)
        .then(()=>{
            alert("create user successfully")
            createUserProfileDocument(user, (userRegister.username));
        }).catch((error)=>{
            alert(`Error --> ${error.message} ErrorCode -->${400}`)
        })
    }
    useEffect(()=>{
        localStorage.setItem('userData',JSON.stringify(records))
    })

    return (
        <PopUp width={window.innerWidth < 468 ? 340 : 450} noPadding={true} onClose={() => closePopUp(false)}>
                <Container>
                    <SignInForm>
                        <Title>Sign Up</Title>
            <form action='' onSubmit ={handleSubmit}>
                        <InputField>
                            <i className='fa fa-user' aria-hidden='true'></i>
                            <input type='text' name='username' placeholder='Username' value={userRegister.username} onChange={handleInput} />
                        </InputField>
                        <InputField>
                            <i className='fa fa-envelope' aria-hidden='true'></i>
                            <input type='text' name='email' placeholder='Email' value={userRegister.email} onChange={handleInput} />
                        </InputField>
                        <InputField>
                            <i className='fa fa-lock' aria-hidden='true'></i>
                            <input type='password' name='password' placeholder='Password' value={userRegister.password} onChange={handleInput} />
                        </InputField>
                        <InputField>
                            <i className='fa fa-lock' aria-hidden='true'></i>
                            <input type='password' name='confirm_password' placeholder='Confirm Password' value={userRegister.confirm_password} onChange={handleInput}  />
                        </InputField>
                        {/* <input type='submit' value='Sign Up' className='btn' /> */}
                        <button type='submit' value='Sign Up' className='btn'>Sign Up</button>
                        <p>Already have an account? <span className='account-text' id='sign-in-link' onClick={() => SignUpPopUp(true)} >Sign In</span></p>
            </form>
                    </SignInForm>
                </Container>
        </PopUp>
    )     
}
export default SignUp;
