import React from 'react'
import ReactDOM from 'react-dom'

import {enable as enableDarkMode} from 'darkreader'

import CurrentDeviceLayout from './components/functions/SwitchDeviceLayout/SwitchDeviceLayout'

enableDarkMode({
    brightness: 100,
    contrast: 100,
    sepia: 0
})

ReactDOM.render(<CurrentDeviceLayout />, document.querySelector('#root'))
