import React from 'react'
import "./landing.css"
function Landing() {
  return (
    <div>
        <div class="wrapper login">
            <div class="container">
                <div class="col-left">
                    <div class="login-text">
                        <h2>Welcome!</h2>
                        <p>Create your account.<br />For Free!</p>
                        <a href="" class="btn">Sign Up</a>
                    </div>
                </div>

                <div class="col-right">
                    <div class="login-form">
                        <h2>Login</h2>
                        <form action="">
                            <p>
                                <label>Username/Email address<span>*</span></label>
                                <input type="text" placeholder="Username or Email" required />
                            </p>
                            <p>
                                <label>Password<span>*</span></label>
                                <input type="password" placeholder="Password" required />
                            </p>
                            <p>
                                <input type="submit" value="Sign In" />
                            </p>
                            <p>
                                <a href="">Forgot password?</a>
                            </p>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
export default Landing;




// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Sign In Form</title>
//     <link rel="stylesheet" href="landing.css">
// </head>

//  <body>
//     <div class="wrapper login">
//         <div class="container">
//             <div class="col-left">
//                 <div class="login-text">
//                     <h2>Welcome!</h2>
//                     <p>Create your account.<br>For Free!</p>
//                     <a href="" class="btn">Sign Up</a>
//                 </div>
//             </div>

//             <div class="col-right">
//                 <div class="login-form">
//                     <h2>Login</h2>
//                     <form action="">
//                         <p>
//                             <label>Username/Email address<span>*</span></label>
//                             <input type="text" placeholder="Username or Email" required>
//                         </p>
//                         <p>
//                             <label>Password<span>*</span></label>
//                             <input type="password" placeholder="Password" required>
//                         </p>
//                         <p>
//                             <input type="submit" value="Sign In">
//                         </p>
//                         <p>
//                             <a href="">Forgot password?</a>
//                         </p>

//                     </form>
//                 </div>
//             </div>

//         </div>
//     </div>
// </body>