import css from "./Layout.module.css";
import Header from "../Header/Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}
