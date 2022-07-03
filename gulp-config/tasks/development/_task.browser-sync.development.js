import browserSync from "browser-sync";
import {PRODUCTION_ROUTE} from "../../common/paths.js";

export const taskBrowserSyncDevelopment = () => {
	browserSync.init({
		startPath: '/html',
		server: {
			baseDir: PRODUCTION_ROUTE.BUILD,
		},
		callbacks: {
			ready: function (err, bs) {
				bs.addMiddleware("*", function (req, res) {
					res.writeHead(302, {
						location: "404.html"
					});
					res.end("Redirecting!");
				});
			}
		},
		logPrefix: 'BS-HTML:',
		logLevel: 'info',
		logConnections: true,
		logFileChanges: true,
		open: true
	})
}
