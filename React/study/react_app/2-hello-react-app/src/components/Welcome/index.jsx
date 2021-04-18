import React, {Component} from 'react';
import welcome from './index.module.css'


class Welcome extends Component {
    render() {
        return (
            <div className={welcome.title}>
                welcome
            </div>
        );
    }
}

export default Welcome;
