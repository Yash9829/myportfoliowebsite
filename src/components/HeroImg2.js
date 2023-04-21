import "./HeroImg2Styles.css";
import React from 'react'

class HeroImg2 extends React.Component{
  render() {return (
    <div className = "hero-img"> 
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
            <ol>
            <li>
              {this.props.line1}
            </li>
            <li>
              {this.props.line2}
            </li>
            </ol>
        </div>
    </div>
  )}
}

// function HeroImg2(props) {

//     return (<div className = "hero-img"> 
//                 <div className="heading">
//                     <h1>{this.props.heading}</h1>
//                     <p>{this.props.text}</p>
//                 </div>
//             </div>)
// }

export default HeroImg2;