var gulp = require('gulp');
var ncp = require('child_process');

gulp.task("functionaltest", (done) => {
    //console.log('It works!');
    ncp.execSync('npm test tests/func_test/*.js');
    done();
});

gulp.task("unittest", (done) => {
    //console.log('It works!');
    ncp.execSync('npm test tests/unit_test/*.js');
    done();
});