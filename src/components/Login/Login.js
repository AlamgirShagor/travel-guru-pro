import React, { useContext, useState } from 'react';
import './Login.css'
import fb from '../../Image/Icon/fb.png';
import google from '../../Image/Icon/google.png'

import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
 
firebase.initializeApp(firebaseConfig);
const Login = () => {
    const [login, setLogin] = useState(true);
    
    const [user, setUser] = useState({
       isSignedIn: false,
       name: '',
       lestName: '',
       email: '',
       password: '',
       confriPassword: '',
       photo: '',
       error: '',
       success: false
    })
    const handelInput = (e) =>{
        let formValid = true;
        if(e.target.name === 'email'){
            formValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            const isPassLength = e.target.value.length > 8;
            const passString = /\d{1}/.test(e.target.value);
            formValid = isPassLength && passString;
        }
        // if(e.target.name === 'confriPassword'){
        //     const isPassCon = e.target.confriPassword;
        //     const ConfPass = isPassCon === e.target.password;
        //     formValid = ConfPass ;
        // }
        if(formValid){
            const newUser ={...user};
            newUser[e.target.name] = e.target.value;
            setUser(newUser)
        }
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    const handelSubmit = (e) =>{
        if(login && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then( res => {
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);

                })
            .catch(function(error) {
                // Handle Errors here.
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
                
              });
        }
        if( !login && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then( res => {
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);

                })
                .catch(function(error) {
                    // Handle Errors here.
                    const newUserInfo = {...user};
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    
                  });
        }
        e.preventDefault();
    }

    const providerGoogle = new firebase.auth.GoogleAuthProvider();
    const providerFb = new firebase.auth.FacebookAuthProvider();
    const handelSingInGoogle = () => {
        firebase.auth().signInWithPopup(providerGoogle)
        .then(function(result) {
            const {displayName, photoURL, email} = result.user;
            const signInUser ={
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL
            }
            setUser(signInUser);
            setLoggedInUser(signInUser);
            history.replace(from);
          })

    }
    
    const handelSingInFb = () => {
        
        firebase.auth().signInWithPopup(providerFb)
        .then(function(result) {
            const {displayName, photoURL, email} = result.user;
            const signInUserFb ={
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL
            }
            setUser(signInUserFb);
            setLoggedInUser(signInUserFb);
            history.replace(from);
          })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            console.log(errorCode);
            var errorMessage = error.message;
            console.log(errorMessage);
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    

    return (
        <div className="container my-5">
            <div className="col-6 bg-light mx-auto p-4">
               
                <h3>Login</h3>
                <form onSubmit={handelSubmit}>
                    {login && <input onBlur={handelInput} type="text" name="name" placeholder="First Name" className="form-control mb-2" required/>}
                    {login && <input onBlur={handelInput} type="text" name="lestName" placeholder="Lest Name" className="form-control mb-2" required/>}
                    
                    <input onBlur={handelInput} type="email" name="email" placeholder="Email" className="form-control mb-2" required/>
                    <input onBlur={handelInput} type="password" name="password" placeholder="Password" className="form-control mb-2" required/>
                    {login && <input onBlur={handelInput} type="password" name="confriPassword" placeholder="Confrim Password" className="form-control mb-2" required/>}
                    <input type="checkbox" name="remember" id="remember"/> <label htmlFor="remember">Remember Me</label>
                    {/* { forget && <a href="" className="text-warning">Forget Password</a>} */}
                    {login ?  <input type="submit" value="Create an account" className="btn btn-warning btn-block my-4"/>
                     : <input type="submit" value="Login" className="btn btn-warning btn-block my-4"/>}
                   
                    
                    
                </form>
                    {
                        login ? <span>already have account?</span> : <span>Created new account?</span>
                    
                    }
                    {
                        login ? <button onClick={ () => setLogin(!login)}  className="text-warning btn btn-outline-light">Login</button> :
                        <button onClick={ () => setLogin(!login)}  className="text-warning btn btn-outline-light">Sign Up</button> 
                    }
                    <p style={{color: 'red'}}>{user.error}</p>
                    {user.success && <p style={{color: 'green'}}>Now You are User account {login ? 'Created' : 'Logged In'}!</p>}
                <hr/>
                <button className="btn-block btn btn-outline mt-3 mr-auto" onClick={handelSingInFb}> <img className="icon" src={fb} alt=""/> Continue with  facebook</button>
                <button className="btn-block btn btn-outline mr-auto" onClick={handelSingInGoogle}> <img className="icon" src={google} alt=""/> Continue with  Google</button>
            </div>
        </div>
    );
};

export default Login; 