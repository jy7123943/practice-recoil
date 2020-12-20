import axios from 'axios';
import { ACTIVITY_TYPE } from '../entity/activity';

export const fetchActivity = (type?: ACTIVITY_TYPE) => {
  return axios.get(
    `http://www.boredapi.com/api/activity/${type ? `?type=${type}`: ''}`
  );
};
