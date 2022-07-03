import gulp from 'gulp';
import {DEVELOPMENT_ROUTE, PRODUCTION_ROUTE, WATCH_ROUTE} from '../../common/paths.js';
import {taskPugConvertation} from '../_task.pug-convertation.js';
import {taskStylesDevelopment} from './_task.styles.development.js';
import {taskScriptsDevelopment} from './_task.scripts.development.js';
import {taskImagesOptimization} from '../_task.images-optimization.js';
import {taskImagesToWebp} from '../_task.images-to-webp.js';
import {taskSvgToCss} from '../_task.svg-to-css.js';
import {taskSvgToSprite} from '../_task.svg-to-sprite.js';
import {taskFontsConvertation} from '../_task.fonts-convertation.js';
import {taskFonts} from '../_task.fonts.js';

export const taskWatchingDevelopment = () => {
	gulp.watch(WATCH_ROUTE.LAYOUTS, gulp.parallel(taskPugConvertation));
	gulp.watch(WATCH_ROUTE.STYLES, gulp.parallel(taskStylesDevelopment));
	gulp.watch(WATCH_ROUTE.SCRIPTS, gulp.parallel(taskScriptsDevelopment));
	gulp.watch(`${DEVELOPMENT_ROUTE.RASTR_IMAGES}.+(png|jpg|jpeg|gif|svg|ico)`, gulp.parallel(taskImagesOptimization));
	gulp.watch(`${PRODUCTION_ROUTE.RASTR_IMAGES}.+(png|jpg|jpeg)`, gulp.parallel(taskImagesToWebp));
	gulp.watch(DEVELOPMENT_ROUTE.SVG_IN_CSS_IMAGES, gulp.series(taskSvgToCss, taskStylesDevelopment));
	gulp.watch(DEVELOPMENT_ROUTE.SVG_SPRITE, gulp.parallel(taskSvgToSprite));
	gulp.watch(DEVELOPMENT_ROUTE.TTF_FONTS, gulp.series(taskFontsConvertation, taskFonts));
}
