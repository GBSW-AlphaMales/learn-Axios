import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/UseAuth/useAuth";

const Login = () => {
  const { login, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password); // 로그인 요청
      alert("로그인 되었습니다!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="로그인" disabled={loading} />
      {loading && <p>Loading...</p>}
    </form>
  );
};
export default Login;
