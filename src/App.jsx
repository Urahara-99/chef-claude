import FormAction from './components/FormAction'
import FormSubmit from './components/FormSubmit'
import Header from './components/Header'
import Main from './components/Main'
import PropsMaking from './components/PropsMaking'
import jokesData from "./data"
import RoughWork from './components/RoughWork'
import React from 'react'
import ToggleState from './components/ToggleState'

import PropsReceiver from './components/PropsReceiver'
import Rough from './components/Rough'

export default function App() {

    const [username, setUsername]= React.useState('abc');

    return(
        <>
        {/* <Header />
        < Main /> */}
       <RoughWork user={username} />
       <Rough user={username} />

        </>
)

}
