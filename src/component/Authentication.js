import React from 'react';
import { useDispatch,useSelector } from "react-redux";
import {
    decrement,
    logIn,
    logOut
  } from "../Redux/actions/index";
  

function Authentication() {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    return (
        <>
        <div className='auth-btn'>
           <button className="btn btn-primary" onClick={() => dispatch(decrement())}>Decrease</button>
           <button className="btn btn-primary" onClick={() => dispatch(logIn())}>Login</button>
           <button className="btn btn-primary" onClick={() => dispatch(logOut())}>Logout</button>
        </div>
         {auth ? (
            <div>
              <p>
                I don't more than 50% of redux. But if you know 50% of it, you're like a Superman.
              </p>
            </div>
          ) : (
            ""
          )}
          </>
    );
}

export default Authentication;