import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import sprite from 'gulp-svg-sprite';
import {DEVELOPMENT_ROUTE, PRODUCTION_ROUTE} from '../common/paths.js';
import browserSync from 'browser-sync';

export const taskSvgToSprite = () => {
	return gulp.src(DEVELOPMENT_ROUTE.SVG_SPRITE)
		.pipe(imagemin([
				imagemin.svgo({
					plugins: [
						{removeViewBox: false},
						{cleanupIDs: false},
						{removeAttrs: {attrs: '*:(stroke|fill):((?!^none$).)*'}},
					]
				})
			])
		)
		.pipe(sprite({
			mode: {
				stack: {
					sprite: '../sprite.svg'
				}
			}
		}))
		.pipe(gulp.dest(PRODUCTION_ROUTE.SVG))
		.pipe(browserSync.stream());
};
