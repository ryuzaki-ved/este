import { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });

      updateUser(res.data);
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTestLogin = () => {
    const testUser = {
      id: "test123",
      username: "testuser",
      email: "test@example.com",
      avatar: "/noavatar.jpg"
    };
    updateUser(testUser);
    navigate("/");
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <div className="inputGroup">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              required
              minLength={3}
              maxLength={20}
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Enter your password"
            />
          </div>
          <button className="loginBtn" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <button type="button" className="testLoginBtn" onClick={handleTestLogin}>
            Try Test Account
          </button>
          {error && <span className="error">{error}</span>}
          <Link to="/register" className="registerLink">
            Don't have an account? Sign up
          </Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="Login background" />
      </div>
    </div>
  );
}

export default Login;
