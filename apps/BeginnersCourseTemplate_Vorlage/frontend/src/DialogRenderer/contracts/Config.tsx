export type Config = {
  webAPIConfig: {
    graphQlHttpApiUrl: string,
    graphQlWsApiUrl: string,
  },
  processEngineConfig: {
    processModelId: string,
  },
  atlasEngineClientConfig: {
    atlasEngineUri: string,
  },
}
