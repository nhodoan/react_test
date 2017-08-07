import React from 'react';
import {render} from 'react-dom';

class CountLike extends React.Component {

    constructor(props) {
        super(props);
        this.state = { numberLike:0};
        this.change = this.change.bind(this);
    }

    change () {
        var newNumberLike = this.state.numberLike + 1;
        this.setState({numberLike: newNumberLike});
    }

    render() {
        return(
            <div>
                Number Like: <span> {this.state.numberLike} </span>
                <div> <button onClick={this.change} > Like </button> </div>
            </div>
        );
    }
}

render(<CountLike/>, document.getElementById('numberLike'));