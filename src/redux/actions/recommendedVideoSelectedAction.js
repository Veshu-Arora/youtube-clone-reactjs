import {RECOMMENDED_VIDEO_SELECTED} from './types';


export const recommendedVideoSelectedAction = (data) => {
  return {
    type: RECOMMENDED_VIDEO_SELECTED,
    payload:data
  }
}