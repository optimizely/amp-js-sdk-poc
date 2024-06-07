import {
  createInstance,
} from "@optimizely/optimizely-sdk/dist/optimizely.lite.es";

const getDataFile = async () => {
  const response = await fetch("https://cdn.optimizely.com/datafiles/QfzuBENUTuedBJn5HsHYh.json")
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