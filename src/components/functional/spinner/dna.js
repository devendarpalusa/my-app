import { Component } from "react";
import { DNA } from "react-loader-spinner";

class Dnaspinner extends Component {
    render() {
        return (
            <DNA
                visible={true}
                height="200"
                width="200"
                ariaLabel="dna-loading"
                wrapperStyle={{color:"green"}}
                wrapperClass="dna-wrapper"
            />
        )
    }
}
export default Dnaspinner