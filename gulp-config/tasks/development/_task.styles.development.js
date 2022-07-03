import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import bulkImporter from 'gulp-sass-bulk-importer';
import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import sourceMaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import {DEVELOPMENT_ROUTE, PRODUCTION_ROUTE} from '../../common/paths.js';

const sass = gulpSass(dartSass);

export const taskStylesDevelopment = () => {
	return gulp.src(DEVELOPMENT_ROUTE.STYLES)
		.pipe(sourceMaps.init())
		.pipe(bulkImporter())
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 2 versions'],
		}))
		.pipe(concat('main.css'))
		.pipe(sourceMaps.write('.'))
		.pipe(gulp.dest(PRODUCTION_ROUTE.STYLES))
		.pipe(browserSync.stream())
};
