import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Layout from "./components/LayOut/LayOut";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          {routes.map((route, index) => {
            const Page = route.component;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
