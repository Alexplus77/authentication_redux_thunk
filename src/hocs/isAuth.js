import { fetch_news } from "redux/actions/createActions";

const IsAuth = ({ children }) => {
  const token = localStorage.getItem("token");
  console.log(token);
  fetch_news();
  return children;
};
export { IsAuth };
