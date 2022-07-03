import gulp from 'gulp';
import {taskBrowserSyncDevelopment} from './gulp-config/tasks/development/_task.browser-sync.development.js';
import {taskWatchingDevelopment} from './gulp-config/tasks/development/_task.watching.development.js';
import {taskRemoveOldProduction} from './gulp-config/tasks/production/_task.remove-old.production.js';
import tasksLayoutSeriesDevelopment from './gulp-config/tasks/development/index.js';
import tasksLayoutSeriesProduction from './gulp-config/tasks/production/index.js';

const development = gulp.parallel(
	gulp.series(
		tasksLayoutSeriesDevelopment,
		taskBrowserSyncDevelopment
	),
	taskWatchingDevelopment,
);

const production = gulp.series(
	taskRemoveOldProduction,
	tasksLayoutSeriesProduction
);

gulp.task('production', production);
gulp.task('default', development);
