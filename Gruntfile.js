module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),



        copy: {
            fonts: {
                src: 'bower_components/font-awesome/fonts/*',
                dest: 'dist/fonts'
            },
            bootstrap_css: {
                src: 'bower_components/bootstrap/dist/css/bootstrap.css',
                dest: 'dist/css/bootstrap.css'
            },
            bootstrap_js: {
                src: 'bower_components/bootstrap/dist/js/bootstrap.js',
                dest: 'dist/js/bootstrap.js'
            },
            font_css: {
                src: 'bower_components/font-awesome/css/font-awesome.css',
                dest: 'dist/css/font-awesome.css'
            },
            jquery: {
                src: 'bower_components/jquery/dist/jquery.js',
                dest: 'dist/js/jquery.js'
            },



            css: {
                src: 'css/main.css',
                dest: 'dist/css/main.css'
            },
            js: {
                src: 'js/main.js',
                dest: 'dist/js/main.js'
            },
            index: {
                src: 'index.html',
                dest: 'dist/index.html'
            }
        },
        
        uglify: {
            my_target: {
                files: {
                    'dist/js/main.min.js': ['dist/js/jquery.js', 'dist/js/main.js', 'dist/js/bootstrap.js']
                }
            }
        },

        cssmin: {
            my_target: {
                files: {
                    'dist/css/main.min.css': ['dist/css/bootstrap.css', 'dist/css/font-awesome.css', 'dist/css/main.css']
                }
            }
        },

        clean: {
            css: ["dist/css/*.css", "!dist/css/*.min.css"],
            js: ["dist/js/*.js", "!dist/js/*.min.js"]
        }


    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');

    //this requires that grunt-contrib-uglify was install with npm
    //we would call this from the CLI with
    // grunt uglify

    // Default task(s).
    grunt.registerTask('default', ['copy','uglify', 'cssmin', 'clean']);
}