import React from 'react';
import {render} from 'react-dom';

class CountSecond extends React.Component {  
    render () {
        var time = Math.round(this.props.time  / 100);
        var seconds = time / 10 + (time % 10 ? '' : '.0' );
        var message = seconds + ' seconds.';
        return (
            <div>
            <h1>Đồng hồ đếm giây</h1>
            <h3>{message}</h3>
            </div>
        );
    }
}

var start = new Date().getTime();

setInterval ( function() {
    render(
        <CountSecond time={new Date().getTime() - start} />,
        document.getElementById('container')
        );
    }, 50);