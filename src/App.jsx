import React, {Component} from "react";
import "./App.css"
import Countdown from "./Countdown";
import EditEvent from "./EditEvent";

class App extends Component {
    constructor() {
        super();
        this.state = {
            events: [
                {id:0, name: "śniadanie", time: "7:00"},
                {id:1, name: "obiad", time: "15:00"},
                {id:2, name: "kolacja", time: "19:00"}
            ]
        };
        this.handleEditEvent = this.handleEditEvent.bind(this);
    }

    handleEditEvent(val) {
        console.log(val);
    }

    render() {
        const events = this.state.events.map(el => {
            return <Countdown key={el.id} name={el.name} time={el.time}/>;
        });
        return (
            <div className="app">
                {events}
                <EditEvent onInputChange={val => this.handleEditEvent(val)} onSave={() => alert("A")} />
            </div>
        )
    }
}


export default App;