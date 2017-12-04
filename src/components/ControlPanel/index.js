import React from 'react';
import ee from '../../eventEmitter';
//
import Button from '../Button';
import store from '../../store';

const ControlPanel = () =>
    (
        <section className="buttons--controls">
            <Button buttonClass="control" text="&larr;" clickHandler={removeOneChar} />
            <Button buttonClass="control" text="c" clickHandler={clearDisplay} />
            <Button buttonClass="control" text="history" clickHandler={showHistory} />
        </section>
    )
const showHistory = () => {
    ee.emitEvent('toggle-history');
}

const clearDisplay = () => {
    store.newExpression = 0;
}

const removeOneChar = () => {
    const curExpression = String(store.curExpression);
    const newExpWithRemovedChar = curExpression.toString().trim().substring(0, (curExpression.length - 1));

    return store.newExpression = newExpWithRemovedChar === '' ? 0 : newExpWithRemovedChar;
}



// class ControlPanel extends Component {
//     showHistory() {
//         ee.emitEvent('toggle-history');
//     }

//     clearDisplay() {
//         store.newExpression = 0;
//     }

//     removeOneChar() {
//         const curExpression = String(store.curExpression);
//         const newExpWithRemovedChar = curExpression.toString().trim().substring(0, (curExpression.length - 1));

//         return store.newExpression = newExpWithRemovedChar === '' ? 0 : newExpWithRemovedChar;
//     }

//     render() {
//         return (
//             <section className="buttons--controls">
//                 <Button buttonClass="control" text="&larr;" clickHandler={this.removeOneChar} />
//                 <Button buttonClass="control" text="c" clickHandler={this.clearDisplay} />
//                 <Button buttonClass="control" text="history" clickHandler={this.showHistory} />
//             </section>
//         )
//     }
// }

export default ControlPanel;