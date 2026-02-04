import { useNavigate } from "react-router-dom";

function NotFound() {
  let navigate = useNavigate();

  function navigateHome() {
    navigate("/");
  }

  return (
    <>
      <h1>Error 404 - Page Not Found</h1>
      <button onClick={() => navigateHome()}>Home page</button>
    </>
  );
}

export default NotFound;
