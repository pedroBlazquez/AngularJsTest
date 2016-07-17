module.exports = function(grunt) {

  grunt.initConfig({
    injector: {
      options: {
        ignorePath:['/node_modules','Gruntfile.js',],
        prefix: '.'
      },
      build: {
        files: {
          'index.html': ['src/**/*.js', 'src/**/*.css'],
        }
      }
    }
})

  grunt.loadNpmTasks('grunt-injector');
  grunt.registerTask('build', ['injector']);
};
