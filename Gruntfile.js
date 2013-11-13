module.exports = function(grunt) {
  grunt.initConfig({
		copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'app',
          dest: 'dist',
          src: ['**/*']
        }]
      }
    },
    'gh-pages': {
       options: {
        base: 'dist',
        message:'Automatically generated gh-pages update'
      },
      src: ['**']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('build', [
    'copy:dist',
  ]);

  grunt.registerTask('deploy', [
    'build',
    'gh-pages'
  ]);
};
