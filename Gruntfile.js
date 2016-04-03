'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    watch: {
      sass: {
        files: "styles/*.scss",
        tasks: "sass:dev"
      }
    },
    sass: {
      dev: {
        files: {
          "css/main.css": "styles/main.scss"
        }
      }
    },
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "css/*.css",
            "*.html"
          ]
        },
        options: {
          watchTask: true,
          server: "./"
        },
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['browserSync', 'watch']);
};