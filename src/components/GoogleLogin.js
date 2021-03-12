import React, { Component } from "react";
import firebase from "firebase";
// import firebase from "../firebaseebase";

// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

// firebase.initializeApp({
//     apiKey: "AIzaSyAalcQ51vNyzjii0OnnIfk1eGu5TI1dmWw",
//     authDomain: "fir-authentication-fb2f3.firebaseapp.com"
// })


function setStateFunction(state, props) {
    const newState = { ...state, isLogIn: state.isLogIn =true };
    return newState;
}


class GoogleLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogIn: false
            // name: "",
            // photo: ""
        };
    }



    componentDidMount = () => {

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                this.setState({setStateFunction})
            } else {
                // No user is signed in.
            }
        });

    }

    onSubmit = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then(function (result) {
                // /** @type {firebase.auth.OAuthCredential} */
                // var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    onLogout = () => {
        firebase.auth().signOut().then(function () {

        }).catch(function (error) {

        });
        this.setState({
            isLogIn: false
        })
    }



    render() {
        return (
            <div>

                {this.state.isLogIn === false ?
                    <div>

                        <button type="button" onClick={this.onSubmit} >
                            Login with Google
                    </button>

                    </div>
                    :
                    <>
                        <div>
                            <h5>{this.state.name}</h5>

                            <button type="button" onClick={this.onLogout} >
                                LogOut
                    </button>

                        </div>
                    </>




                }





            </div>






        )
    }























    // constructor() {
    //     super();
    //     this.state = {
    //         isLogIn: false,
    //         name: "",
    //         photo: ""
    //     }
    // }




    // onLogOut = () => {
    //     firebase.auth().signOut().then(() => {
    //         // Sign-out successful.
    //     }).catch((error) => {
    //         // An error happened.
    //     });
    //     this.setState({
    //         isLogIn: false
    //     })
    // }

    // componentDidMount = () => {

    //     firebase.auth().onAuthStateChanged(function (user) {
    //         if (user) {
    //             // console.log(user.displayName + '\n' + user.email);

    //             this.setState({
    //                 isLogIn: true
    //             })


    //         } else {
    //             console.log("no user");
    //         }
    //     });

    // }



    // render() {
    //     return (
    //         <div>
    //             {
    //                 this.state.isLogin === false ?
    //                     <div>

    //                         <button type="button" onClick={this.onSubmit}>Login with Google</button>
    //                     </div>
    //                     :

    //                     <>
    //                         <div>
    //                             <button type="button" onClick={this.onLogOut}>LogOut</button>

    //                         </div>
    //                     </>
    //             }

    //         </div>


    //     )

    // }
























    // state = { isSignedIn: false }
    // uiConfig = {
    //     signInFlow: "popup",
    //     signInOptions: [
    //         firebase.auth.GoogleAuthProvider.PROVIDER_ID
    //     ],
    //     callbacks: {
    //         signInSuccess: () => false
    //     }
    // }

    // componentDidMount = () => {
    //     firebase.auth().onAuthStateChanged(user => {
    //         this.setState({ isSignedIn: !!user })
    //         console.log("user", user)
    //     })
    // }

    // render() {
    //     return (
    //         <div className="GoogleLogin">
    //             {this.state.isSignedIn ? (
    //                 <span>
    //                     <div>Signed In!</div>
    //                     <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
    //                     <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
    //                     {/* <img
    //                         alt="profile picture"
    //                         src={firebase.auth().currentUser.photoURL}
    //                     /> */}
    //                 </span>
    //             ) : (
    //                 // <StyledFirebaseAuth
    //                 //     uiConfig={this.uiConfig}
    //                 //     firebaseAuth={firebase.auth()}
    //                 // />
    //                 <div>Signasdaded In!</div>


    //             )}
    //         </div>
    //     )
    // }



}

export default GoogleLogin