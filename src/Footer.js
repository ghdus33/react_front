import React, {Component} from 'react';
import { Navbar, Image } from "react-bootstrap";


class Footer extends Component{
    render(){
    const imageStyle = {
        margin: "10px 10px 10px 10px"
    }

        return(
        <div>
            <Navbar>
            <Image style={imageStyle} src="./img/main.png" fluid />     
            <Navbar.Brand >Me_Board_end</Navbar.Brand>
            </Navbar>
        </div>
        )
    }
}

export default Footer;
