import gulp from 'gulp';
import concat from 'gulp-concat';
import sourceMaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import {DEVELOPMENT_ROUTE, PRODUCTION_ROUTE} from '../../common/paths.js';

export const taskVendorScriptsDevelopment = () => {
	return gulp.src(DEVELOPMENT_ROUTE.VENDOR_SCRIPTS)
		.pipe(sourceMaps.init())
		.pipe(concat('vendor.js'))
		.pipe(sourceMaps.write('.'))
		.pipe(gulp.dest(PRODUCTION_ROUTE.SCRIPTS))
		.pipe(browserSync.stream());
};
