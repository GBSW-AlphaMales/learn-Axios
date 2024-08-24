import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div>
        <Link to="/signIn">회원가입</Link> <br />
        <Link to="/login">로그인</Link>
      </div>
    </div>
  );
};
export default Home;
