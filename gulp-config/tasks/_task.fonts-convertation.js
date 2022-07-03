import gulp from 'gulp';
import changed from 'gulp-changed';
import ttf2woff2 from 'gulp-ttf2woff2';
import ttf2woff from 'gulp-ttf2woff';
import {DEVELOPMENT_ROUTE, PRODUCTION_ROUTE} from '../common/paths.js';

export const taskFontsConvertation = (done) => {
	gulp.src(DEVELOPMENT_ROUTE.TTF_FONTS)
		.pipe(changed(PRODUCTION_ROUTE.FONTS, {
			extension: '.woff2',
			hasChanged: changed.compareLastModifiedTime
		}))
		.pipe(ttf2woff2())
		.pipe(gulp.dest(PRODUCTION_ROUTE.FONTS))

	gulp.src(DEVELOPMENT_ROUTE.TTF_FONTS)
		.pipe(changed(PRODUCTION_ROUTE.FONTS, {
			extension: 'woff',
			hasChanged: changed.compareLastModifiedTime
		}))
		.pipe(ttf2woff())
		.pipe(gulp.dest(PRODUCTION_ROUTE.FONTS))

	gulp.src(DEVELOPMENT_ROUTE.FONTS)
		.pipe(gulp.dest(PRODUCTION_ROUTE.FONTS))
	done();
}
