import React from 'react';
import './App.css';
import NewsItemList from './components/NewsItemList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewsItemData from './components/NewsItemData'
import UnknownPage from './components/UnknownPage'
import NewsItemPage from './components/NewsItemPage';
class App extends React.Component {



  constructor(props) {
    super(props)
    this.state = {
      itemList: Array,
      dataLoaded:false
    }
    
  }

  componentDidMount() {

      NewsItemData.getData().then(res => {
        this.setState({ itemList: res, dataLoaded: true })
      }).catch(console.error)
  }


  render() {
  
    return (
      <div className="App">
        <Router >
          <Switch>

            <Route exact path='/news/' render={props => (
              <NewsItemList parentProps={this.state} {...props} />
            )}></Route>
            <Route exact path='/news/:id' parentProps={this.state} component={NewsItemPage}></Route>
            <Route path="*" component={UnknownPage} />

          </Switch>
        </Router>
      </div>
    );

    
  }
}

export default App;
