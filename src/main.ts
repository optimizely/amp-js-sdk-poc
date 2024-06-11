import {
  createInstance
} from "@optimizely/optimizely-sdk/dist/optimizely.lite.es";

const REMOTE_DATAFILE_URL = "https://cdn.optimizely.com/datafiles/<YOUR_SDK_KEY>.json";

const getDataFile = async () => {
  const response = await fetch(REMOTE_DATAFILE_URL)
  const data = await response.text()
  return data
}

const run = async () => {
  const data = await getDataFile()
  const optimizelyClient = createInstance({
    datafile: data
  });

  if(!optimizelyClient) {
    throw new Error('Optimizely client not created')
  }

  optimizelyClient.onReady().then(({ success }) => {
    if (success) {
      console.log('Connected to Optimizely')
      console.log(optimizelyClient);
    }
  });
  
}

run()