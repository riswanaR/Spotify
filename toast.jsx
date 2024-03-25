import React from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "../home/home";

function Toast(){
    const navigate=useNavigate();
    return(
        <>
        <div class="d-flex justify-content-center align-items-center vh-100">


<div id="liveToast" class="toast toast-light-primary p-2 mb-4 show fade" role="alert" aria-live="assertive" aria-atomic="true">





  <div class="toast-body">
   <h1 className="">Hello, user!</h1>  do you want to logout your spotify


    <div class="mt-2 pt-2">
        click here---
      <button type="button" class="btn  btn-primary " onClick={()=>navigate("/")}>Logout</button>
     
    </div>
  </div>

</div>


</div>
        </>
    )
}
export default Toast;