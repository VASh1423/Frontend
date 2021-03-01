import * as $ from 'jquery'
import Post from '@models/Post'
// import json from './assets/json.json'
import WebpackLogo from './assets/webpack-logo.png'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import './styles/style.css'

const post = new Post('Webpack post', WebpackLogo)

$('pre').html(post.toString())

console.log(post.toString());

// console.log(json);
// console.log(xml);
// console.log(csv);