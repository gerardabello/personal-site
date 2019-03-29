import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import About from './about'
import Projects from './projects'
import Contact from './contact'
import Layout from './layout'

export default class Sections extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Layout>
    )
  }
}
