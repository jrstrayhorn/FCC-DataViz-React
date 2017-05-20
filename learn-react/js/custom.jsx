class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.reset  = this.reset.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }
    decrement() {
        this.setState({
            count: this.state.count - 1
        });
    }
    reset() {
        this.setState({
            count: 0
        });
    }
    render() {
        return (
            <div>
                <button className="btn btn-primary btn-lg" onClick={this.increment}>Increment!</button>
                <button className="btn btn-primary btn-lg" onClick={this.decrement}>Decrement!</button>
                <button className="btn btn-primary btn-lg" onClick={this.reset}>Reset</button>
                <h1>Current Count: {this.state.count}</h1>
            </div>
        );
    }
}

const frontEndFrameworks = [
    'React',
	'Angular',
	'Ember',
	'Knockout',
	'Backbone',
	'Vue'
];

function Frameworks() {
    const renderFrameworks = frontEndFrameworks.map((el, idx) => <li key={idx}>{el}</li>);
    return (
        <div>
            <h1>Popular Front End JavaScript Frameworks</h1>
            <ul>{renderFrameworks}</ul>
        </div>
    );
}

const App = function() {
    return (
        <div className="container">
            <Counter />
            <Frameworks />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));