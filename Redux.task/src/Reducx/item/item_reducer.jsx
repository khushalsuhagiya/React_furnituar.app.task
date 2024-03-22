import React from 'react'
import { BUY_ITEM } from './item_type'


const initalvalue = ({NoOfItme : 10})

export const Item_redux = (state = initalvalue, action) => {
  
switch (action.type) {
  case BUY_ITEM:
    return{
      NoOfItme : state.NoOfItme -1
    }

  default: state
   
}
}

