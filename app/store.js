const configureStore = require('@reduxjs/toolkit').configureStore
const reduxLogger = require('redux-logger')
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/icecream/icecreamSlice')
// const userReducer = require('../features/user/userSlice')
const logger = reduxLogger.createLogger()

const store = configureStore({
    // dont need to use combine reducer ,we can directly use multiple reducers
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        // user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store