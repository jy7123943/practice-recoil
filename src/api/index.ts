import { Activity } from './../entity/activity';
import axios, { AxiosResponse } from 'axios';
import { ACTIVITY_TYPE } from '../entity/activity';

export const fetchActivity = (type?: ACTIVITY_TYPE): Promise<AxiosResponse<Activity>> => {
  return axios.get(
    `http://www.boredapi.com/api/activity/${type ? `?type=${type}`: ''}`
  );
};
