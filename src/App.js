import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import "./App.css";

function App() {
  return (
      <Router>
        <Header branding="Contact Manager" />
        <div className="container main-content">
          <Switch>
            <Route exact path="/contact/add" component={AddContact} />
            <Route exact path="/contact/edit/:id" component={EditContact} />
            <Route exact path="/" component={Contacts} />
            <Route exact path="/about/" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
