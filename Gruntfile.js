module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            app: {
                src: [
                    './resources/assets/javascripts/app.js',
                    './resources/assets/javascripts/controllers/*.js',
                    './resources/assets/javascripts/directives/*.js'
                ],
                dest: './public/assets/javascripts/application.js'
            },
            angular: {
                src: [
                    './bower_components/angular/angular.js'
                ],
                dest: './public/assets/javascripts/lib/angular-bundle.js'
            },
        },
        sass: {
            dist: {
                files: {
                  "./public/assets/stylesheets/application.css": "./resources/assets/sass/application.scss"
                },
                options: {
                    style: "expanded"
                }
            },
            production: {
                files: {
                  "./public/assets/stylesheets/application.css": "./resources/assets/sass/application.scss"
                },
                options: {
                    style: "compressed"
                }
            }
        },
        watch: {
            js: {
                files: [
                    './resources/assets/javascripts/**/*.js'
                ],
                tasks: ['concat', /*'uglify:js'*/]
            },
            sass: {
                files: ['./resources/assets/sass/**/*.scss'],
                tasks: ['sass:dist'],
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('dist', ['concat', 'sass:production']);
};

