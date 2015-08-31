'use strict'
module.exports = function(grunt) {

    // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-connect');
  // Default task(s).
  grunt.registerTask('default', ['uglify']);
    
    // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
    server: {
      options: {
        port: 8000,
        keepalive: true,
        protocol:"http",  
          hostname:"localhost",
        base: {
          path: 'app',
          options: {
            index: 'index.html'
          }
        }
      }
    }
  },
      uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        //src: 'src/<%= pkg.name %>.js',
        //dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });



};