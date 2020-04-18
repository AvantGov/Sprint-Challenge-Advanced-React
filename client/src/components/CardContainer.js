// * dependencies
import React, { Component } from "react";


// * components 
import PlayerCard from './PlayerCard';


class CardContainer extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        console.log("card container mounted")
        fetch(`http://localhost:5000/api/players`) 
        .then((response) => {
            return (
                response.json()
            )
        })
        .then((response) => {
            this.setState({ data: response})
            // console.log("state:", this.state)
        })
        .catch((error) => {
            console.log("error in there, Tex", error)
        })
    }

    render() {
        return (
            <div className="card-container">
                {this.state.data.map((player) => {
                    return (
                      <PlayerCard data={player} key={player.id} />
                    )
                })}
            </div>
        )
    }
}

export default CardContainer;