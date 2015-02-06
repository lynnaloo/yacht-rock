module.exports = function (grunt) {
	grunt.registerTask('buildProd', [
		'compileAssets',
		'concat',
		'uglify',
		'cssmin',
		'browserify',
		'linkAssetsBuildProd',
		'clean:build',
		'copy:build'
	]);
};
