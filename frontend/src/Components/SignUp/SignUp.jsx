import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/UseAuth/useAuth";

const SignIn = () => {
  const { signup, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, name, password); // 회원가입 요청
      alert("회원가입 성공하셨습니다!");
      navigate("/login");
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
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="회원가입" disabled={loading} />
      {loading && <p>Loading...</p>}
    </form>
  );
};

export default SignIn;
