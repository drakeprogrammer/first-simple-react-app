import React, {Component} from "react";
import "./App.css"
import Countdown from "./Countdown";
import EditEnv from "./EditEvent";

class App extends Component {
    constructor() {
        super();
        this.state = {
            events: [
                {id:0, name: "śniadanie", time: "7:00"},
                {id:1, name: "obiad", time: "15:00"},
                {id:2, name: "kolacja", time: "19:00"}
            ]
        }
    }

    render() {
        const events = this.state.events.map(el => {
            return <Countdown key={el.id} name={el.name} time={el.time}/>;
        });
        return (
            <div className="app">
                {events}
                <EditEnv />
            </div>
        )
    }
}


export default App;