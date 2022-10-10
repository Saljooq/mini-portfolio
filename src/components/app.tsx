import { h } from 'preact';
import { Route, Router } from 'preact-router';
import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import Test from '../routes/test';
import MD from '../routes/md';

const App = () => (
	<div id="app">
        <Header />
        <Router >
            <Route path="/" component={Home} />
            <Route path="/test" component={Test} showModal={false} />
            <Route path="/test/show" component={Test} showModal={true} />
            <Route path="/profile/" component={Profile} user="me" />
            <Route path="/profile/:user" component={Profile} />
            <Route path="/md" component={MD} />
        </Router>
    </div>
);

export default App;
