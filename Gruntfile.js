module.exports = function(grunt) {
	grunt.initConfig({
		ts: {
			"default" : {
				src: ["**/*.ts", "!node_modules/**/*.ts"]
			},
			options: {
				"module": "commonjs",
				comments: false,
				target: "es5"
			}
		}
	});
	grunt.loadNpmTasks("grunt-ts");
	grunt.registerTask("default", ["ts"]);
};