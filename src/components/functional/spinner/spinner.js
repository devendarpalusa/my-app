import {Component} from "react"
import {Audio} from "react-loader"


class AudioSpinner extends Component{
    render(){
        return(
            <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="three-dots-loading"
  wrapperStyle
  wrapperClass
/>
        )
    }
}
export default  AudioSpinner