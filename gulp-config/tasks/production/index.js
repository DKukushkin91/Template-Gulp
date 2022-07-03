import gulp from 'gulp';
import {taskVendorScriptsProduction} from './_task.vendor-scripts.production.js';
import {taskScriptsProduction} from './_task.scripts.production.js';
import {taskFontsConvertation} from '../_task.fonts-convertation.js';
import {taskFonts} from '../_task.fonts.js';
import {taskSvgToCss} from '../_task.svg-to-css.js';
import {taskVendorStylesProduction} from './_task.vendor-styles.production.js';
import {taskStylesProduction} from './_task.styles.production.js';
import {taskImagesOptimization} from '../_task.images-optimization.js';
import {taskImagesToWebp} from '../_task.images-to-webp.js';
import {taskSvgToSprite} from '../_task.svg-to-sprite.js';
import {taskPugConvertation} from '../_task.pug-convertation.js';

const tasksJsSeriesProduction = gulp.series(
	taskVendorScriptsProduction,
	taskScriptsProduction,
)

const tasksStylesSeriesProduction = gulp.series(
	taskFontsConvertation,
	taskFonts,
	taskSvgToCss,
	taskVendorStylesProduction,
	taskStylesProduction,
)

const tasksImagesSeriesProduction = gulp.series(
	taskImagesOptimization,
	taskImagesToWebp,
	taskSvgToSprite
)

const tasksLayoutSeriesProduction = gulp.series(
	tasksJsSeriesProduction,
	tasksStylesSeriesProduction,
	tasksImagesSeriesProduction,
	taskPugConvertation
)

export default tasksLayoutSeriesProduction;
