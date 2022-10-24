import Detail from "../components/Detail/Detail";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Movies from "../components/Movies/Movies";
import Watch from "../components/Watch/Watch";
import WatchList from "../components/WatchList/WatchList";

const routes = [
  { path: "/", component: Login },
  { path: "/home", component: Home },
  { path: "/detail/:id", component: Detail },
  { path: "/watch/:id", component: Watch },
  { path: "/watch-list", component: WatchList },
  { path: "/movies", component: Movies },
];

export {routes}
