import configureStore from './configureStore'

import { reportInitialState, reportStoreKey } from './reducers/report'

const initialState = {
  [reportStoreKey]: { ...reportInitialState }
}

const store = configureStore(initialState)

export default store
