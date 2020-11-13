import React from 'react';

class Total extends React.Component {
    render(props) {

    const total = Object.keys(this.props.state.selected).reduce(
            (acc, curr) => acc + this.props.state.selected[curr].cost,
            0
            );

        return (
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    ({this.props.usCurrencyFormat.format(total)})
                </div>
            </div>
        )
    }
}

export default Total;