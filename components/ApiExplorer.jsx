import { createGraphiQLFetcher } from '@graphiql/toolkit'
import { useExplorerPlugin } from '@graphiql/plugin-explorer'
import { GraphiQL } from 'graphiql'

import IsoFetch from 'isomorphic-fetch'

import React, { useEffect, useState } from 'react'

import '@graphiql/plugin-explorer/dist/style.css'
import 'graphiql/graphiql.css'

const DEFAULT_QUERY = `query ApiExplorer {
    releaseGenres {
      name
    }
}`

const DEFAULT_HEADERS = JSON.stringify(
  {
    'X-Sound-Client-Key': 'YOUR CLIENT API KEY',
  },
  null,
  2,
)

const FETCHER_PROPS = {
  url: 'https://api.sound.xyz/graphql',
  subscriptionUrl: 'wss://api.sound.xyz/graphql',
  fetch: IsoFetch,
}

export const ApiExplorer = () => {
  const fetcher = createGraphiQLFetcher(FETCHER_PROPS)

  const [displayExplorer, setDisplayExplorer] = useState(false)
  const [query, setQuery] = useState(DEFAULT_QUERY)
  const explorerPlugin = useExplorerPlugin({
    query,
    onEdit: setQuery,
  })

  useEffect(() => {
    setDisplayExplorer(true)
  }, [])

  if (displayExplorer) {
    return (
      // These inline defaults are what nextra sets for the component
      // We use these to keep the heights and widths consistent to other pages
      <div style={{ maxWidth: '90rem', height: 'calc(100vh - 4rem)', margin: 'auto' }}>
        <GraphiQL
          fetcher={fetcher}
          query={query}
          onEditQuery={setQuery}
          plugins={[explorerPlugin]}
          headers={DEFAULT_HEADERS}
          shouldPersistHeaders
          defaultEditorToolsVisibility="headers"
        />
      </div>
    )
  } else {
    return <p>API Explorer not enabled.</p>
  }
}
