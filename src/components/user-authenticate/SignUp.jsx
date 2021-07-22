import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import PopUp from '../../common/PopUp'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'


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
var validate = values => {
    console.log(" values ==============>",values)
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    console.log(" passwor expression =================>",pwd_expression)
    const errors = {}
    console.log("<---Errors---->",errors)
    if(!values.username){
        errors.username = 'Required'
        console.log(" ERRORS ####### ------>",errors)
    }
    else if(values.username < 2) {
        errors.username = 'Minimum be 2 characters or more'

    }
    if (!values.email) {
        errors.email = 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
      if(!values.password){
          errors.password = 'Required'
      } else if (!pwd_expression.test(values.password)){
          errors.password = 'Invalid Password'
      }
      if(!values.confirm_password){
        errors.password = 'Required'
    }
   if(values.password !== values.confirm_password){
    errors.confirm_password = 'Password not match'
   }
   return errors

}



function SignUp(props) {
    const { handleSubmit, pristine, reset, submitting } = props
    const { closePopUp, SignUpPopUp } = props
    const [userRegister, setUserRegister] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    })
    const [records, setRecords] = useState([])
    localStorage.setItem('setUserRegister', setUserRegister)
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserRegister({ ...userRegister, [name]: value })
    }
     handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = { ...userRegister, id: new Date().getTime().toString() }
        setRecords([...records, newRecord]);
        setUserRegister({ username: '', email: '', password: '', confirm_password: '' })

    }
    useEffect(()=>{
        localStorage.setItem('userData',JSON.stringify(records))
    })
    const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
        <div>
          <label className="control-label">{label}</label>
          <div>
            <input {...input} placeholder={label} type={type} className="form-control" />
            {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
          </div>
        </div>
      )
    return (
        <PopUp width={window.innerWidth < 468 ? 340 : 450} noPadding={true} onClose={() => closePopUp(false)}>
            <form action='' onSubmit={handleSubmit}>
                <Container>
                    <SignInForm>
                        <Title>Sign Up</Title>
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
                    </SignInForm>
                </Container>
            </form>
        </PopUp>
    )
}
export default reduxForm({
    form: 'SignUp', // a unique identifier for this form
    validate
  })(SignUp)
