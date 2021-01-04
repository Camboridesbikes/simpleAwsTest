import React, { Component } from 'react'
import { withAuthenticator } from 'aws-amplify-react'

class App extends Component {
    
    
    render() {
        return (
            <div>
                <p>Hello World from a component</p>
            </div>
        )
    }
}

export default withAuthenticator(App, {
    usernameAttributes: 'email',
    signUpConfig: {
        hiddenDefaults:["phone_number"],
        signUpFields: [{key: 'name', label: 'Name', required: true}]
    }
})
