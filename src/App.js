import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Navigation from "./components/Nav";
import Contact from "./components/Contact";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import DetailProvider from "./DetailContext";

function App() {
  return (
    <DetailProvider>
      <div className="App">
        <Router>
          <Navigation />
          <CssBaseline />
          <Container fixed>
            <Typography
              component="div"
              style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
            >
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/" component={Home} />
              </Switch>
            </Typography>
          </Container>
        </Router>
      </div>
    </DetailProvider>
  );
}

export default App;
