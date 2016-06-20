module.exports = function(grunt){
	"use strict";

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dev: {
        files: {
          'build/build.js': ['src/index.js']
        },
        options: {
          browserifyOptions: {
            debug: true
          }
        }
      },
      specs: {
				src: ["spec/*.spec.js"],
				dest: "spec/specs.js",
				options: {
					browserifyOptions: {
						debug: true
					}
				}
			}
    },
    jasmine: {
			src: "spec/specs.js",
			options: {
				outfile: "SpecRunner.html"
			}
			// helpers: "spec/spec_helper.js"
		}
  });

  grunt.registerTask("test", ["browserify:specs", "jasmine"]);

};