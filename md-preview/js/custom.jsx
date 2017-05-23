class MDPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.update = this.update.bind(this);
    }
    update(e) {
        this.setState({
            input: marked(e.target.value, { gfm:true })
        });
    }
    render() {
        return (
            <div className="row pad-row">
                <div className="form-group">
                    <textarea 
                        type="textarea" 
                        className="form-control" 
                        placeholder="Enter your markdown text here." 
                        rows="7"
                        onChange={this.update} />
                </div>
                <h3>Preview</h3>
                <div className="well" dangerouslySetInnerHTML={{__html: this.state.input}} />
            </div>
        );
    }
}

const codedWithArr = [
    {
        link: 'https://facebook.github.io/react/',
        display: 'React'
    },
    {
        link: 'http://getbootstrap.com/',
        display: 'Bootstrap'
    },
    {
        link: 'https://bootswatch.com/sandstone/',
        display: 'Sandstone - Bootswatch Theme'
    },
    {
        link: 'https://github.com/chjj/marked',
        display: 'Marked.js - Markdown parser'
    }
];

const devInfo = {
        link: 'https://www.freecodecamp.com/jrstrayhorn',
        name: 'J.R. Strayhorn'
    };

const Footer = function() {
    const renderCodedWith = codedWithArr.map((el, idx) => 
        <span>
            <a href={el.link} target="_blank"> {el.display}</a>
            {(idx !== codedWithArr.length-1) ? ',' : ''}
        </span>
    );
    const renderDevInfo = <a href={devInfo.link} target="_blank">{devInfo.name}</a>;
    return (
         <div className="row footer pad-row">
            <p>Coded with {renderCodedWith} by {renderDevInfo}</p>
        </div>
    );
};

const App = function() {
    return (
        <div className="container">
            <h1>Markdown Previewer</h1>
            <MDPreview />
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));