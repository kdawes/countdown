module.exports = function(grunt) {

  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      bundle: {
        src: ['js/jquery/jquery.js', 
        'js/flipclock/flipclock.min.js', 
        'bower_components/momentjs/moment.js'],
        dest: 'bundle.js',
      },
    },
   });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.loadNpmTasks('grunt-contrib-concat');
  // Default task(s).
  grunt.registerTask('default', ['concat']);

};