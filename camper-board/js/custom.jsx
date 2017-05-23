const codedWithArr = [
    {
        link: 'https://facebook.github.io/react/',
        display: 'React'
    },
    {
        link: 'http://getbootstrap.com/',
        display: 'Bootstrap'
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
            <h1>Camper Leaderboard</h1>
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));