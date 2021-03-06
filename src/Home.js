import { Component, React } from 'react';
import fire from './config/fire';

class Home extends Component{
    constructor(props)
    {
        super(props);
    }
    logout(){
        fire.auth().signOut();
    }
    render(){
        return(
            <div>
                <h1>You are logged in</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}
export default Home;