import React from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
// import slugify from 'slugify';

// Import APP Components
import Header from '../Header/Header';
import Main from '../Main/Main';

import '../App.css';

class App2 extends React.Component {
    

    render() {
        return (
            <div className="App">
                <Header />
                <Main />
            </div>
        )
    }

}

export default App2;