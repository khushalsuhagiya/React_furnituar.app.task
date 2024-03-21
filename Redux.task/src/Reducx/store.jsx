import {createStore} from 'redux'
import { Item_redux } from './item/item_reducer'
const Store = createStore(Item_redux)

export default Store