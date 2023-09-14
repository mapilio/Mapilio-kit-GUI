import { useAppSelector } from "../redux/hooks";
import Upload from "./Upload";
import Login from "./auth/Login";

function Home() {
  const { isLogin } = useAppSelector((state) => state.user);

  if (isLogin) return <Upload />;
  else return <Login />;
}
export default Home;
