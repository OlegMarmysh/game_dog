import React from 'react';
import './App.css';
import Images from "./Images";
import img from './dog.jpg'

function getRandomImageIndex() {
    return Math.floor(Math.random() * 9);
}

class App extends  React.Component {

    state = {
       images: [{id: 0},
           {id: 1},
           {id: 2},
           {id: 3},
           {id: 4},
           {id: 5},
           {id: 6},
           {id: 7},
           {id: 8},
       ],
        startValue: 0,
        currentTarget: 4,

    }
    speed=1000;
    minusValue = () => {
        this.setState( {
            startValue: this.state.startValue-1
        })
    }
    ChangeValue = () => {
          this.setState({
              startValue: this.state.startValue+1,
              currentTarget: ''
          })
    }
    changeId = (id) => {
        this.setState({
            currentTarget: id
        })
    }
    componentDidMount() {
        setInterval(()=> {
            this.changeId(getRandomImageIndex())
        }, this.speed)


    }

    render = () => {

    return (
        <div className='wrapper'>
            {this.state.images.map(el=><Images id={el.id}
                                               ChangeValue={this.ChangeValue}
                                               currentTarget={this.state.currentTarget}
                                               minusValue={this.minusValue}

            />)}
            <div className="counter">
                <h3>{this.state.startValue}</h3>
            </div>
        </div>
    )
  }
}

export default App;
