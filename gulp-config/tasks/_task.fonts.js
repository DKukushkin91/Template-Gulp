import fs from 'fs';
import {DEVELOPMENT_ROUTE, PRODUCTION_ROUTE} from "../common/paths.js";

export const taskFonts = (done) => {
	fs.writeFile(DEVELOPMENT_ROUTE.LOCAL_FONTS, '', () => {});

	fs.readdir(PRODUCTION_ROUTE.FONTS, (err, items) => {
		if (items) {
			let c_fontName;

			for (let i = 0; i < items.length; i++) {
				let fontName = items[i].split('.');
				let fontExt;

				fontExt = fontName[1];
				fontName = fontName[0];

				if (c_fontName !== fontName) {

					if (fontExt === 'woff' || fontExt === 'woff2') {
						fs.appendFile(DEVELOPMENT_ROUTE.LOCAL_FONTS, `@include font-face("${fontName.split('-')[0]}", "${fontName}", 400);\r\n`, () => {});

						console.log(`
						Добавлен новый шрифт: ${fontName}.
						----------------------------------------------------------------------------------
						Пожалуйста, переместите содержимое файла ${DEVELOPMENT_ROUTE.LOCAL_FONTS} в ${DEVELOPMENT_ROUTE.FONTS_INIT}!
						----------------------------------------------------------------------------------
						Измените начертание в соответсвии с вложенным шрифтом!(По умолчанию 400)
						----------------------------------------------------------------------------------
						`);
					}
				}
				c_fontName = fontName;
			}
		}
	});
	done();
};
