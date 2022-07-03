import del from 'del';
import {PRODUCTION_ROUTE} from '../../common/paths.js';

export const taskRemoveOldProduction = () => del([PRODUCTION_ROUTE.BUILD]);
