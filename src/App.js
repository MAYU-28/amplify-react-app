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
              <SignUp />
                <h2>My App Content</h2>
            </header>
        </div>
    );
}

export default withAuthenticator(App);