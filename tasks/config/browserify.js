/**
 * Run Browserify and Reactify.
 *
 * ---------------------------------------------------------------
 *
 */
module.exports = function(grunt) {

  grunt.config.set('browserify', {
    options: {
      transform: [ require('grunt-react').browserify ]
    },
    client: {
      src: ['views/**/*.js', 'views/**/*.jsx'],
      dest: 'assets/js/bundle.js'
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
};
