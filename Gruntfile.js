module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

	shell: {
      options: {
        stdout: true
      },
	  npm_install: {
        command: 'npm install'
      },
      protractor_install: {
        command: 'node ./node_modules/protractor/bin/webdriver-manager update'
      }    
    },
	
    jshint: {
      files: ['Gruntfile.js', 'src/*.*'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
	
	protractor: {
      options: {
        keepAlive: true,
        configFile: "protractorConf.js"
      },
      singlerun: {},
      auto: {
        keepAlive: true,
        options: {
          args: {
            seleniumPort: 4444
          }
        }
      }
    }
	
  });

  grunt.loadNpmTasks('grunt-shell-spawn');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-protractor-runner');
  
  grunt.registerTask('install', ['shell:npm_install', 'shell:protractor_install']);
  grunt.registerTask('default', ['jshint', 'protractor:singlerun']);
  

};