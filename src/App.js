import React, { Component, Fragment } from 'react';
import logo from './_assets/logo.svg';
import posed from 'react-pose';
import './App.css';

const Logo = posed.img({
  visible: { 
    scaleY: 1.3,
    scaleX: 1.3,
    y: '-35%',
    transition: { duration: 1500 }
  },
  hidden: { 
    scaleY: 0.5,
    scaleX: 0.5,
    y: '10%'
   },
   
});

const Row = posed.div({
  visible: {
    y: 0,
    opacity: 1,
    beforeChildren: true,
    staggerChildren: 30
  },
  hidden: {
    opacity: 0,
    y: '-10%',
    afterChildren: true
  }
   
});

const includedStuff = [
  {
    title:'Utilities',
    items: [
      {
        img_url: 'https://avatars0.githubusercontent.com/u/13142323?s=400&v=4',
        title: 'Redux'
      },
      {
        img_url:'data:image/png;base64,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',
        title:'Storybook'
      },
    ]
  },
  {
    title:'Design',
    items: [
      {
        img_url:'https://material-ui.com/static/brand.png',
        title:'material'
      },
    ]
  },
  {
    title:'Animation',
    items: [
      {
        img_url:'https://popmotion.io/static/images/pose-twitter-card.png',
        title: 'Pose'
      },
    ]
  },
]

class App extends Component {
  state ={ 

  }
  componentDidMount(){
    setTimeout(()=>this.setState({isVisible:true}),300)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo src={logo} className="App-logo" alt="logo" pose={this.state.isVisible ? 'visible' : 'hidden'} />
          <h1 className="purple">
            PROPEL
          </h1>
          <h2>Boilerplate on Steroids</h2>
          
          {includedStuff.map((content) => (
            <Fragment>
            <p>{content.title}</p>
            <Row className="Card-row" pose={this.state.isVisible ? 'visible' : 'hidden'}>
            {content.items.map((item) => (
              <div className="Content-card">
              <img src={item.img_url} className="Card-Img" alt={item.title}/>
              </div>
            ))}
            </Row>
            </Fragment>
          ))}
        
        </header>
        
      </div>
    );
  }
}

export default App;
