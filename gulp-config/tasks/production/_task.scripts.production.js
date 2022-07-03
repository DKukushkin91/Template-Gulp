import gulp from 'gulp';
import rollup from 'rollup-stream';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import terser from 'gulp-terser';
import {DEVELOPMENT_ROUTE, PRODUCTION_ROUTE} from '../../common/paths.js';

export const taskScriptsProduction = () => {
	return rollup({
		input: DEVELOPMENT_ROUTE.SCRIPTS,
		format: 'es',
		})
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(gulp.src(DEVELOPMENT_ROUTE.JQUERY))
		.pipe(babel({
			presets: ["@babel/preset-env"],
			targets: {
				"browsers": ["last 2 versions"],
			}
		}))
		.pipe(terser())
		.pipe(concat('main.js'))
		.pipe(gulp.dest(PRODUCTION_ROUTE.SCRIPTS))
}
