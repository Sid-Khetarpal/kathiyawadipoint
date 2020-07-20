import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Gallery  from './GalleryComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DISHES } from '../shared/menu';
import { PHOTOS } from '../shared/gallery';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakfast: DISHES.Breakfast,
      lunch: DISHES.Lunch,
      dinner: DISHES.Dinner,
      special: DISHES.Special,
      gallery: PHOTOS
    };
  }

  render() {

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={() => <Home special={this.state.special} />} />
          <Route exact path="/menu" component={() => <Menu breakfast={this.state.breakfast} lunch={this.state.lunch} dinner={this.state.dinner} />} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/aboutus" component={About}/>
          <Route exact path="/gallery" component={() => <Gallery gallery={this.state.gallery} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;