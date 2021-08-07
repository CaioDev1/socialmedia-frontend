import React, {useEffect, useState} from 'react'

import {enable as enableDarkMode} from 'darkreader'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Content from './Content'

import WelcomePage from './WelcomePage/WelcomePage'

import api from '../services/API_CONFIG'

import {AuthContext} from './Contexts'

function App({device}) {
    const [Auth, setAuth] = useState({
        userData: {},
        authStatus: 'processing'
    })

    enableDarkMode({
        brightness: 100,
        contrast: 100,
        sepia: 0
    })

    useEffect(() => {
        api.get('/')
            .then(response => {
                setAuth({
                    userData: response.data.userData,
                    authStatus: 'accepted'
                })
            }).catch(err => {
                setAuth(preValue => {
                    return {
                        ...preValue,
                        authStatus: 'denied'
                    }
                })
            })
    }, [])

    return (
        <Router> 
            <AuthContext.Provider value={Auth}>
                <Content device={device} />
            </AuthContext.Provider>
        </Router>
    )
}


export default App