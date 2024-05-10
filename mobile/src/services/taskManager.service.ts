import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';

const TASK_NAME = 'BACKGROUND_FETCH_TASK';


const taskExecute = async () => {
  console.log('task');
};

TaskManager.defineTask(TASK_NAME, async () => {
  try {
    await taskExecute();
    return BackgroundFetch.BackgroundFetchResult.NewData;
  } catch (error) {
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

const register = async () => {
  await BackgroundFetch.registerTaskAsync(TASK_NAME, {
    minimumInterval: 1,
    stopOnTerminate: false,
    startOnBoot: true,
  });
};

const unregister = async () => {
  await BackgroundFetch.unregisterTaskAsync(TASK_NAME);
};

export default {
  register,
  unregister,
};
