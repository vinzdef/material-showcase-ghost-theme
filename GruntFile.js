'use strict';

module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		project: {
			sass: 'assets/sass/style.scss',
			css: 'assets/css/style.css', 
			libs: 'js/vendor'			
		},

		/**
		*	BANNER
		*/

		tag: {
			banner: '/*!\n' + 
				' * <%= pkg.name %>\n' +
			    ' * <%= pkg.url %>\n' +
			    ' * @author <%= pkg.author %>\n' +
			    ' * @version <%= pkg.version %>\n' +
			    ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
			    ' */\n'
		},


		/**
		*	SASS
		*/

		sass: {
			
			dev: {
				options: {
					style: 'expanded',
					banner: '<%= tag.banner %>'				
				},
				files: {
					'<%= project.css %>': '<%= project.sass %>'
				}			
			}, 

			dist: {
				options: {
					style: 'compressed',
                    banner: '<%= tag.banner %>'
				}, 
				files: {
					'<%= project.css %>': '<%= project.sass %>'
				}
			}
		}, 
		
		/**
		 * Watch
		 */
		watch: {
			sass: {
		    	files: '<%= project.sass %>',
		    	tasks: ['sass:dev']
			},
	   		
	   		all: {
 	   			files: [
 	   				'*.hbs',
 	   				'*.html',
 	   				'*.css'
 	   			]        		
			}, 
			 options : {
		        livereload: true
	        } 
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');


	grunt.registerTask('default', [
			'sass:dev',
			'watch'						
		]);
};