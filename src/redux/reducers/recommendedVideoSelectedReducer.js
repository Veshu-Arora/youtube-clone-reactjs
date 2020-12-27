import {RECOMMENDED_VIDEO_SELECTED} from '../actions/types';

const initialState ={}

const recommendedVideoSelectedReducer = (state = initialState, action) => {
    switch (action.type) {
      case RECOMMENDED_VIDEO_SELECTED:
        return {
            ...state,
           data:action.payload 
          }
      default:
        return state
    }
  }
  
  export default recommendedVideoSelectedReducer;