import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import svgCss from 'gulp-svg-css-pseudo';
import {DEVELOPMENT_ROUTE} from '../common/paths.js';
import browserSync from 'browser-sync';

export const taskSvgToCss = () => {
	return gulp.src(DEVELOPMENT_ROUTE.SVG_IN_CSS_IMAGES)
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
		.pipe(svgCss({
			fileName: '_tools.svg',
			fileExt: 'scss',
			cssPrefix: 'svg_',
			addSize: false
		}))
		.pipe(gulp.dest(DEVELOPMENT_ROUTE.SVG_OUT_CSS_IMAGES))
		.pipe(browserSync.stream())
}
