import * as $ from 'jquery'
import Post from '@models/Post'
// import json from './assets/json.json'
import WebpackLogo from './assets/webpack-logo.png'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import React from 'react'
import {render} from 'react-dom'
import './styles/style.css'
import './styles/less.less'
import './styles/scss.scss'

const post = new Post('Webpack post', WebpackLogo)

// $('pre').html(post.toString())

// console.log(post.toString());

const App = () => (
  <div className="container">
    <h1>Webpack</h1>
    <hr/>
    <div className="logo"></div>
    <hr/>
    <pre></pre>
    <hr/>
    <div className="box">
      <h2>Less</h2>
    </div>
    <hr/>
    <div className="card">
      <h2>Scss</h2>
    </div>
  </div>
)

render(<App/>, document.getElementById('app'))

// console.log(json);
// console.log(xml);
// console.log(csv);