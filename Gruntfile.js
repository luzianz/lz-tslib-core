module.exports = function(grunt) {
	grunt.initConfig({
		ts: {
			"default" : {
				//src: ["**/*.ts", "!node_modules/**/*.ts"]
				files: [
					{
						src: ["src/**/*.ts"],
						dest: "js"
					}
				]
			},
			options: {
				"module": "commonjs",
				comments: false,
				target: "es6",
				declaration: false,
				sourceMap: false
			}
		}
	});
	grunt.loadNpmTasks("grunt-ts");
	grunt.registerTask("default", ["ts"]);
};