import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import bulkImporter from 'gulp-sass-bulk-importer';
import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';
import concat from 'gulp-concat';
import {DEVELOPMENT_ROUTE, PRODUCTION_ROUTE} from '../../common/paths.js';

const sass = gulpSass(dartSass);

export const taskStylesProduction = () => {
	return gulp.src(DEVELOPMENT_ROUTE.STYLES)
		.pipe(bulkImporter())
		.pipe(sass())
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 2 versions'],
		}))
		.pipe(cleanCss({
			level: 2
		}))
		.pipe(concat('main.css'))
		.pipe(gulp.dest(PRODUCTION_ROUTE.STYLES))
};
