import axios from 'axios';
import { ActivityType } from '../entity/activity';

export const fetchActivity = (type?: ActivityType) => {
  return axios.get(
    `http://www.boredapi.com/api/activity/${type ? `?type=${type}`: ''}`
  );
};
