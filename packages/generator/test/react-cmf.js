const path = require('path');
const helpers = require('yeoman-test');
const assert = require('yeoman-assert');

var deps = [
	[helpers.createDummyGenerator(), 'talend:dotfiles']
];

describe('talend:react-cmf', function () {
	const appPath = 'customAppPath';

	beforeEach(function () {
		this.app = helpers
			.run(path.join(__dirname, '../generators/react-cmf'))
			.withGenerators(deps)
			.withOptions({})
			.withPrompts({
				name: 'helloapp',
			});
	});

	describe('default settings', function () {
		beforeEach(function onDone(done) {
			this.app.on('end', done);
		});

		it('generates base files', function () {
			assert.file([
				'package.json',
				'webpack.config.js',
				'webpack.config.dev.js',
				'webpack.config.prod.js',
			]);
		});
	});
});
