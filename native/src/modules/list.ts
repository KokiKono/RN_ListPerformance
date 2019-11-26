import API from './api';
import * as Models from '../models';

export const fetchList =  () => {
    return API.get<Models.ItemModel[]>('/list');
}