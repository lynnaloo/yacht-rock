/**
 * Check Files with Js/Jsx Hint.
 *
 * ---------------------------------------------------------------
 *
 */
module.exports = function(grunt) {

  grunt.config.set('jshint', {
    all: ['views/**/*.js', 'models/**/*.js', 'views/**/*.jsx'],
    options: {
      newcap: false
    }
  });

  grunt.loadNpmTasks('grunt-jsxhint');
};