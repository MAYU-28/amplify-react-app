import React from 'react';
import './App.css';
import {Amplify} from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
import SignUp from './SignUp';
Amplify.configure(awsconfig);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h2>Welcome User </h2>
                <SignUp />
            </header>
        </div>
    );
}

export default withAuthenticator(App);