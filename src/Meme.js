import React, { Component } from "react";

class Meme extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
            img: "",
            imgUrls: []
        };
        this.printText = this.printText.bind(this);
        this.changeImg = this.changeImg.bind(this);
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(res => {
            const { memes } = res.data;
            this.setState({
                imgUrls: memes
            });
        });
    }

    printText(event) {
        const value = event.target.value;
        this.setState({ text: value });
    }

    changeImg() {
        const randNum = Math.floor(Math.random() * this.state.imgUrls.length);
        const randImg = this.state.imgUrls[randNum].url;
        this.setState({ img: randImg });
    }

    render() {
        const styleImg = {
            height: "400px",
            width: "400px"
        };
        const styleDiv={
            height:"50px",
            width:"120px"
            

        };
        return (
            <div style={styleDiv}>
                <input type="text" placeholder="type something" onChange={this.printText}  ></input>
                <button  onClick={this.changeImg}>Click here</button>
                <div>
                    <img src={this.state.img} style={styleImg} alt="meme"></img>
                    <h2>{this.state.text}</h2>
                </div>
            </div>
        );
    }
}

export default Meme;
