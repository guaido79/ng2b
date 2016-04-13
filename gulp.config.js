module.exports = function() {

    var buildDir = './build/';

    var config = {
        componentsSrc: [
            'components/*.ts',
            'ng2b.ts'
        ],
        demoSrc: ['demo/*.ts'],
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
        distDir: './dist/',
    }

    return config;
};
