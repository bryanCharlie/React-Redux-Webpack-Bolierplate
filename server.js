'use strict'

const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const config = require('./cfg/base')
const open = require('open')
webpack(config)
new webpackDevServer(webpack(config), config.devServer).listen(8000, '127.0.0.1', (err) => {
    if(err){
        console.log(err)
    } else {
        open('http://127.0.0.1:8000')
    }
})
