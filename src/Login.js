
import { useState ,useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { productData } from "./App";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useContext(productData);
  const {user,setUserName} = useContext(productData);



  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uname: email, pass: password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("user found");
      setIsLoggedIn(true)
      navigate('/');

    } else {
      setError("Invalid credentials");
    }
  };

  /* if (isLogin) {
    return <Redirect to="/" />;
  } */

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-img"
          src="https://marcas-logos.net/wp-content/uploads/2020/01/Amazon-Logo-1-2048x1279.png"
          alt="login-img"
        />
      </Link>
      <div className="login-info">
        <h1>Sign-in</h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <h5>Username</h5>
          <input type="text" value={email} onChange={handleEmailChange} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={handlePasswordChange} />
          <button className="signin-btn">Sign button</button>
        </form>
        <p>
          By signing-in, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <Link to="/Sig">
          <button className="signup-btn">Create your amazon account</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;