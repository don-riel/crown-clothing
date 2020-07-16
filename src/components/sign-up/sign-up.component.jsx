import React, {useState} from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';

const SignUp = ({signUpStart}) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const {displayName, email, password, confirmPassword} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        
        
        signUpStart({displayName, email, password});

        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        // try {
        //     const { user } = await auth.createUserWithEmailAndPassword(email, password);
        //     await createUserProfileDocument(user, { displayName });
        //     this.setState({ //this will clear the form when sign up is succesfull
        //         displayName: '',
        //         email: '',
        //         password: '',
        //         confirmPassword: ''
        //     });
        // } catch(err) {
        //     console.error(err);
        // }
    }

    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredentials({...userCredentials, [name]: value});
    }

    
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with ypur email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput 
                        type= 'text' 
                        name = 'displayName' 
                        value={displayName} 
                        onChange={handleChange} 
                        label='Display Name' 
                    />
                    <FormInput 
                        type= 'email' 
                        name = 'email' 
                        value={email} 
                        onChange={handleChange} 
                        label='Email' 
                    />
                    <FormInput 
                        type= 'password' 
                        name = 'password' 
                        value={password} 
                        onChange={handleChange} 
                        label='Password' 
                    />
                    <FormInput 
                        type= 'password' 
                        name = 'confirmPassword' 
                        value={confirmPassword} 
                        onChange={handleChange} 
                        label='Confirm Password' 
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }


const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);