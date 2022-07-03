import gulp from 'gulp';
import concat from 'gulp-concat';
import {DEVELOPMENT_ROUTE, PRODUCTION_ROUTE} from '../../common/paths.js';

export const taskVendorStylesProduction = () => {
	return gulp.src(DEVELOPMENT_ROUTE.VENDOR_STYLES)
		.pipe(concat('vendor.css'))
		.pipe(gulp.dest(PRODUCTION_ROUTE.STYLES))
}

