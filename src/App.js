import Inventory from "./components/templates/Inventory";
import "./assets/icomoon/style.css";
import "./assets/theme/mixins.scss";
import { memo } from "react";

function App() {
  return <Inventory />;
}

export default memo(App);
