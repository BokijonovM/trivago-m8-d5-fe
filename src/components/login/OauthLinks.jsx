import { Button } from "react-bootstrap";
import { AiOutlineGooglePlus, AiFillApple } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

function OauthLinks() {
    return ( 
        <>
         <h6>Or use trivago with another account</h6>
            <a href="http://localhost:3001/users/googleLogin">
                <span className="my-1 continue-with-btn" >
                <AiOutlineGooglePlus />
                Continue with Google
              </span>
            </a>
            <span className="my-1 continue-with-btn">
              <FaFacebookSquare />
              Continue with Facebook
            </span>
            <span className="my-1 continue-with-btn">
              <AiFillApple />
              Continue with Apple
            </span>
        </>
     );
}

export default OauthLinks;