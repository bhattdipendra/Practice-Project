import "src/styles/login.css";
const Login = () => {
  const handleSubmit = (e: MouseEvent): void => {
    e.preventDefault();
  };
  return (
    <div className="login-outer-wrapper">
      <div className="login-left-side">
        <div>
          <h3>Hey, hello</h3>
          <p>Enter the information you entered while registering.</p>
          <form className="login-form-inner">
            <label>Email</label>
            <input type="text" />
            <label>Password</label>
            <input type="password" />
            <div className="forgot-password-outer">
              <div className="remember-me">
                <input type="checkbox" />
                <label>Remember me</label>
              </div>
              <a href="#">Forgot password?</a>
            </div>
            <button className="login-button" onClick={handleSubmit}>
              Login
            </button>
          </form>
        </div>
      </div>

      <div className="login-right-side">
        <div className="login-right-side-inner-div">
          <svg
            fill="white"
            height={"48px"}
            className="play-button-svg"
            viewBox="0 0 60 60"
          >
            <polygon points="0,0 50,30 0,60" />
          </svg>
          Digital <br />
          platform <br />
          for distance <span>learning.</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
