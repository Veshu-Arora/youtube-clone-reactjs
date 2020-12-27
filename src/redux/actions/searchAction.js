import {FETCHED_VIDEOS} from './types';


export const searchAction = (data) => {
  return {
    type: FETCHED_VIDEOS,
    payload:data
  }
}