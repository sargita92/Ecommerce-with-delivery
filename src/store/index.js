import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//Importa o arquivo que ta o reduce principal
import rootReducer from './reducers'

//conf para persistir as infirmações do reducers
const persistConfig = {
    key: 'root',
    storage
}

//Configurando a persistência do reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

//cria um armazenamento pra reduce principal
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor};