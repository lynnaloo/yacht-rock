module.exports = function (grunt) {
	grunt.registerTask('build', [
	  'browserify',
		'compileAssets',
		'linkAssetsBuild',
		'clean:build',
		'copy:build'
	]);
};
