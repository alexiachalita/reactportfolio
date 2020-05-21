import React, {  Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Wrapper from 'react-bootstrap/Wrapper';
import { Jumbotron, Col }  from 'react-bootstrap';
import NavBar from './Components/nav';
import Projects from './Components/projects';
import Footer from './Components/footer';
import Header from './Components/header';
///import pages
/// import components
// import App from './containers/App'
import Home from './Pages/home'
import About from './Pages/about';
// import About from './containers/About'
import Gallery from './Pages/gallery'
import Contact from './Pages/contact'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Route exact path="/">
            <Home />  
          </Route> 
          <Route path="/projects">
            <Projects />
          </Route>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;

// export default (
//     <Router history={hashHistory}>
//       <Route path='/' component={App}>
//         <IndexRoute component={Home}/>
//         <Route path='/About' component={About} />
//         <Route path='/Gallery' component={Gallery} />
//         <Route path='/contact' component={Contact} />
//       </Route>
//     </Router>

// );


// import React, { Component } from 'react';
// import styled from 'styled-components';

// import Header from './Header.js'
// import Footer from './Footer.js'

// export const ColorScheme = {
//   primary: 'red',
//   secondary: 'blue',
//   third: 'purple',
//   fourth: 'goldenrod'
// }

// const AppDiv = styled.div`
//   display: flex;
//   min-height: 100vh;
//   flex-direction: column;
//   font-size: 1.15em;
// `;

// export const CenteredHeader = styled.h4`
//   text-align: center;
//   margin-bottom: 1.25em;
// `


// const ContainerDiv = styled.div`
//   margin: 1% 17% 3% 17%;
//   flex: 1;
//   font-family: 'Open Sans', sans-serif;
// `

// class App extends Component {
//   render() {
//     return (
//       <AppDiv>
//         <Header />
//         <ContainerDiv>
//           {this.props.children}
//         </ContainerDiv>
//         <Footer />
//       </AppDiv>
//     );
//   }
// }

// export default App;
