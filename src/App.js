import React from "react";
import { HashRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";
import Task from "./features/tasks/TaskPage/index";

export default function App() {
    return (
        <HashRouter>
            <nav>
                <ul>
                    <li><NavLink activeClassName="active" to="/zadania">Zadania</NavLink></li>
                    <li><NavLink activeClassName="active" to="/author">O autorze</NavLink></li>
                </ul>
            </nav>

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
                <Route>
                    <Redirect to="/zadania" />
                </Route>
            </Switch>
        </HashRouter>
    )
}; 