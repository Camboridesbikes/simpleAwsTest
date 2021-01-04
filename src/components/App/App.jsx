import React, { Component } from 'react'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

const App = () => {
        return (
            <div>
                <p>Hello World from a component</p>
                <AmplifySignOut/>
            </div>
        )
    }

export default withAuthenticator(App, {
    usernameAttributes: 'email',
    signUpConfig: {
        hiddenDefaults:["phone_number"],
        signUpFields: [{key: 'name', label: 'Name', required: true}]
    }
});
