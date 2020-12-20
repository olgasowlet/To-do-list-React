import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";
import Task from "./features/tasks/TaskPage/index";
import { StyledNavLink, Nav, Ul, Li } from "./style";

export default function App() {
    return (
        <HashRouter>
            <Nav>
                <Ul>
                    <Li><StyledNavLink to="/zadania">Zadania</StyledNavLink></Li>
                    <Li><StyledNavLink to="/author">O autorze</StyledNavLink></Li>
                </Ul>
            </Nav>

            <Switch>
                <Route path="/author">
                    <Author />
                </Route>
                <Route path="/zadania/:id">
                    <Task />
                </Route>
                <Route path="/zadania">
                    <Tasks />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania" />
                </Route>
            </Switch>
        </HashRouter>
    )
}; 