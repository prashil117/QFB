import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Signup from './components/Signup'
import Login from './components/login'
import Dashboard1 from './components/dashboard1'
import Welcome from './components/welcome'


const Routes = () => (
    <Router navigationBarStyle={{ backgroundColor: '#ad905e' }}>
        <Scene key="root" hideNavBar={true}>
            <Scene key="welcome" component={Welcome} title="Weclome" initial={true} />
            <Scene key="login" component={Login} title="Login" />
            <Scene key="register" component={Signup} title="Register" />
            <Scene key="dashboard1" component={Dashboard1} type="reset" hideNavBar={false} title="Dashboard" />
        </Scene>
    </Router>
)
export default Routes