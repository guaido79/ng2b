module.exports = function() {

    var buildDir = './build/';
    var npmRelease = './npm-release/';

    var config = {
        ng2bSrc: [
            'src/components/*.ts',
            'src/ng2b.ts'
        ],
        demoSrc: ['demo/*.ts'],
        typingsConf: 'typings.json',
        typingsSrc: [
            'typings/browser.d.ts'
        ],
        tscConf: {
            "target": "es5",
            "module": "commonjs",
            "moduleResolution": "node",
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": false,
            "noImplicitAny": false,
            "declaration": true
        },
        buildDir: buildDir,
        buildJsSrc: [
            buildDir + '*.js',
            buildDir + '/**/*.js',
        ],
        npmRelease: npmRelease,
        distDir: npmRelease + 'dist/',
    }

    return config;
};
