import { useState } from "react"

const ControlledComponent =()=>{
  
 const [Username,setUsername]= useState("")  
 const[Password,setPassword]=useState("")
const[PasswordError,setPasswordError]=useState("")
 
const[userNameError,setUsernameError]=useState("")
 
// const[userGender,setUsergender]=useState=("")
// const[usergenderError,setUsergenderError]=useState("")

      const  usernameHandler=(event)=>{
        const  Username=event.target.value
        
        setUsername(Username)
        
        if(Username.length<5){
        
            setUsernameError("username  must be greater than 5 character")
        }
        else{
        
            setUsernameError("")
            let userInformation={
                username:Username
            }
            console.log(userInformation)
        
            
            console.log("user is typing")
        }
    }
 

    const userPasswordHandler=(event)=>{
        event.preventDefault()
        const  userPassword=event.target.value

       
        
       
        setPassword(userPassword)
        if(userPassword.length<5){
            setPasswordError("userpassword  must be greaterthan 5 character")
        }
        else{
        
            setPasswordError("")
            let userInfo={
                userPassword:userPassword
            }
            console.log(userInfo)
        }
            
            console.log("user is typing")
    }
     // const  userGender=event.target.value
        // setUsername(userPassword)
    
        
        // if(userGender!=userInformation){
        
        //     setUserNameError("usergender must be true")
        // }
        // else{
        
        //     setsUerUserError("")
        //     let userInformation={
        //         userGender:userGender
        //     }
        //     console.log(userInformation)
        // }
            
        //    
        
        


const loginApi=()=>{
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            
            //  'kminchelle'
          
          username:Username ,
          password:'0lelplR'
        
          // expiresInMins: 60, // optional
        })
    })
      // })
      .then(res => res.json())
      .then((res)=>console.log(res))
                  
    }
  
    const submitHandler=(event)=>{
        event.preventDefault()
        loginApi()
    }

       return(
        < >
        <form onSubmit={submitHandler}>
      <div className="mb-3 mt-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          placeholder="Enter email"
          name="email"
          value={Username}
          onChange={usernameHandler}
        />
         {
        userNameError
        ?

    <h5  style={{color:"red"}} >{userNameError}</h5>:
    null


    }
     
      </div>
      <div className="mb-3">
        <label htmlFor="pwd" className="form-label">
          Password:
        </label>
        <input
          type="password"
          className="form-control"
          id="pwd"
          placeholder="Enter password"
          vale={Password}
          onChange={userPasswordHandler}
         />         


{
    PasswordError ?
   <h5 style={{color:"red"}} >{PasswordError}</h5>:null

}

      </div>
      <div className="form-check mb-3">
        <label className="form-check-label">
          <input className="form-check-input" type="checkbox" name="remember" />{" "}
          Remember me
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
        
        </>
    )
}


export default ControlledComponent