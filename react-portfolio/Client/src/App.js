import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
///import pages
/// import components
// import App from './containers/App'
// // import Home from './containers/Home'
// // import About from './containers/About'
// // import Gallery from './containers/Gallery'
// // import Contact from './containers/Contact'

render() {
  return (
    <Wrapper>
      <div className="container">
        <Router>
          <Col size="md-12">
            <NavBar>
              <Switch>
                <Route exact path={['/', '/about']}>
                  <About />
                </Route>
                <Route exact path="/clients/:id">
                  <Clients />
                </Route>
                <Route>
                  <NoMatch />
                </Route>
              </Switch>
            </NavBar>
          </Col>
        </Router>
        <Col size="md-4">
          <Header>
            <h1>This is Alexia</h1>
          </Header>
        </Col>
        <Jumbotron>
          <Col size="md-12">
            <div className="container">
              <h2>Alexia this is.</h2>
            </div>
          </Col>
        </Jumbotron>
      </div>
    </Wrapper>
  );
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
