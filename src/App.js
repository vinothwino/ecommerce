import { memo } from "react";
import Inventory from "./components/templates/Inventory";

import "./assets/icomoon/style.css";
import "./assets/theme/mixins.scss";

function App() {
  return <Inventory />;
}

export default memo(App);
