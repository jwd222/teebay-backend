import express from 'express'
import { expressMiddleware } from '@apollo/server/express4'
import createApolloGraphqlServer from './graphql/index'

import bodyParser = require('body-parser')
import cors from 'cors'

async function init() {
  const app = express()
  const PORT = Number(process.env.PORT) || 8000

  app.use(bodyParser.json())
  app.use(cors())

  app.get('/', (req, res) => {
    res.json({ message: 'Server is up and running' })
  })

  app.use('/graphql', expressMiddleware(await createApolloGraphqlServer()))

  app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`))
}

init()
