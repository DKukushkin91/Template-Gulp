import gulp from 'gulp';
import terser from 'gulp-terser';
import concat from 'gulp-concat'
import {DEVELOPMENT_ROUTE, PRODUCTION_ROUTE} from '../../common/paths.js';

export const taskVendorScriptsProduction = () => {
	return gulp.src(DEVELOPMENT_ROUTE.VENDOR_SCRIPTS)
		.pipe(terser())
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest(PRODUCTION_ROUTE.SCRIPTS))
};
