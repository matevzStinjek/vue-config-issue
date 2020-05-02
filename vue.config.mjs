// vue.config.(js -> mjs)

import { join, resolve } from 'path'
// const { join, resolve } = require('path') 

const path = p => join(resolve(), p)

module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap((args) => {
                args[0].template = path('client/public/index.html')
                return args
            })
    },
    configureWebpack: {
        entry: {
            app: path('client/src/main.js'),
        },
        resolve: {
            alias: {
                '@': path('client/src')
            },
        },
    },
    outputDir: 'client/dist',
}