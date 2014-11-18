module.exports = function (grunt) {
	grunt.registerTask('default', ['browserify', 'compileAssets', 'linkAssets',  'watch']);
};
