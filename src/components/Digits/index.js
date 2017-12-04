import React from 'react';
import ee from '../../eventEmitter';
//
import Button from '../Button';
import store from '../../store';

const digitClickHandler = (num) => {
    if (!store.curExpression) {
        return store.newExpression = num;
    }

    return store.newExpression = `${store.curExpression}${num}`;
}


const Digits = () => (
    <section className="buttons--digits">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
            .map(nr => <Button key={nr} text={nr} clickHandler={digitClickHandler} />)}
    </section>
)
// class Digits extends Component {
//     digitClickHandler(num) {
//         if (!store.curExpression) {
//             return store.newExpression = num;
//         }

//         return store.newExpression = `${store.curExpression}${num}`;
//     }

//     render() {
//         return <section className="buttons--digits">
//             {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
//                 .map(nr => <Button key={nr} text={nr} clickHandler={this.digitClickHandler}/>)}
//         </section>
//     }
// }
export default Digits;