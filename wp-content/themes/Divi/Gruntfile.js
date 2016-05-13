module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    modernizr_builder: {
        build: {
            options: {
                config: 'modernizr-config.json',
                dest: 'js/modernizr-custom.min.js'
            }
        }
    },
    /*
    sass: {
      dist: {
        options: {
          outputStyle: 'compressed',
          sourceMap: true,
        },
        files: {
          'css/app.min.css': 'scss/app.scss'
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({
            browsers: ['> 1%', 'last 20 versions', 'Firefox ESR', 'Opera 12.1']
          })
        ]
      },
      dist: {
        src: 'css/app.min.css',
        dest: 'css/app.min.css'
      }
    },*/

    uglify: {
      js: {
        files: {
          'js/modernizr-custom.min.js': 'js/modernizr-custom.min.js',
          'js/app.min.js': [
            'bower_components/foundation/js/foundation.min.js',
            'bower_components/foundation/js/foundation/foundation.equalizer.js',
            'bower_components/slick-carousel/slick/slick.js',
            'js/app.js',
          ],
          'js/slick.min.js': 'bower_components/slick-carousel/slick/slick.js'
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      }/*,
      sass: {
        files: 'scss/*.scss',
        tasks: ['sass']
      }*/,
      js: {
        files: ['js/app.js'],
        tasks: ['js']
      }
    }
  });

  //grunt.registerTask('css', ['sass', 'postcss', 'pixrem']);
  //grunt.registerTask('js', ['uglify']);
  //grunt.registerTask('default', ['modernizr_builder', 'uglify', 'sass', 'postcss', 'watch']);
  grunt.registerTask('default', ['modernizr_builder', 'uglify', 'watch']);

};
