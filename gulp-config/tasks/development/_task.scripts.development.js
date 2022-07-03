import gulp from 'gulp';
import rollup from 'rollup-stream';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import concat from 'gulp-concat';
import sourceMaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import {DEVELOPMENT_ROUTE, PRODUCTION_ROUTE} from '../../common/paths.js';

export const taskScriptsDevelopment = () => {
	return rollup({
		input: DEVELOPMENT_ROUTE.SCRIPTS,
		sourcemap: true,
		format: 'es',
		})
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(gulp.src(DEVELOPMENT_ROUTE.JQUERY))
		.pipe(sourceMaps.init({ loadMaps: true }))
		.pipe(concat('main.js'))
		.pipe(sourceMaps.write('.'))
		.pipe(gulp.dest(PRODUCTION_ROUTE.SCRIPTS))
		.pipe(browserSync.stream());
}

