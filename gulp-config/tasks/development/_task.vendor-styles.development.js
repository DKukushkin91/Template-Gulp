import gulp from 'gulp';
import concat from 'gulp-concat';
import sourceMaps from 'gulp-sourcemaps';
import {DEVELOPMENT_ROUTE, PRODUCTION_ROUTE} from '../../common/paths.js';

export const taskVendorStylesDevelopment = () => {
	return gulp.src(DEVELOPMENT_ROUTE.VENDOR_STYLES)
		.pipe(sourceMaps.init())
		.pipe(concat('vendor.css'))
		.pipe(sourceMaps.write('.'))
		.pipe(gulp.dest(PRODUCTION_ROUTE.STYLES))
}

