import React, { Component } from "react";
import Band from "./Band";


class Bands extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <ul>
                {console.log(this.props.removeBand)}
                {this.props.bands ? this.props.bands.map((band, index) => {return <Band key={index} band={band} removeBand={this.props.removeBand} />}) : <h1>no bands at the moment</h1>}
                {/* <Band bands={this.props.bands} /> */}
                </ul>

            </div>


        );
    }
}
 
export default Bands;