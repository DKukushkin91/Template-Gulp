import gulp from 'gulp';
import changed from 'gulp-changed';
import imagemin from 'gulp-imagemin';
import recompress from 'imagemin-jpeg-recompress';
import pngquant from 'imagemin-pngquant';
import browserSync from 'browser-sync';
import {DEVELOPMENT_ROUTE, PRODUCTION_ROUTE} from '../common/paths.js';

export const taskImagesOptimization = () => {
	return gulp.src(
		[`${DEVELOPMENT_ROUTE.RASTR_IMAGES}.+(png|jpg|jpeg|gif|svg|ico)`,
			`!${DEVELOPMENT_ROUTE.SVG_SPRITE}`,
			`!${DEVELOPMENT_ROUTE.SVG_CSS}`])
		.pipe(changed(PRODUCTION_ROUTE.IMAGES))
		.pipe(imagemin({
				interlaced: true,
				progressive: true,
				optimizationLevel: 5,
			},
			[
				recompress({
					loops: 6,
					min: 50,
					max: 90,
					quality: 'high',
					use: [pngquant({
						quality: [0.8, 1],
						strip: true,
						speed: 1
					})],
				}),
				imagemin.gifsicle(),
				imagemin.optipng(),
				imagemin.svgo()
			], ), )
		.pipe(gulp.dest(PRODUCTION_ROUTE.IMAGES))
		.pipe(browserSync.stream())
}
