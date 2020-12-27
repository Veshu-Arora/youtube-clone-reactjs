import {SELECTED_VIDEO} from './types';


export const selectedVideoAction = (data) => {
  return {
    type: SELECTED_VIDEO,
    payload:data
  }
}