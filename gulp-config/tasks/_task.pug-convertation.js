import gulp from 'gulp';
import pug from 'gulp-pug';
import browserSync from 'browser-sync';
import {DEVELOPMENT_ROUTE, PRODUCTION_ROUTE} from '../common/paths.js';

export const taskPugConvertation = () => {
	return gulp.src(DEVELOPMENT_ROUTE.LAYOUTS)
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest(PRODUCTION_ROUTE.LAYOUTS))
		.pipe(browserSync.stream())
};
