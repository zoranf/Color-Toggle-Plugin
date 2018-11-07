let gulp = require("gulp");
let sass = require("gulp-sass");
let minifyCss = require("gulp-csso");
let sassLint = require("gulp-sass-lint");

gulp.task("build:min", function () {
    return gulp.src("sass/main.scss")
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(gulp.dest("css"));
});

gulp.task("build", function () {
    return gulp.src("sass/main.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"));
});

gulp.task("lint", function () {
    return gulp.src("sass/main.scss")
        .pipe(sassLint({
            options: {
                configFile: 'config/other/.sass-lint.yml',
                style: 'compressed'
            }
        }))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
});

gulp.task("watch", function () {
    gulp.watch("sass/**/*.scss", ["sass"]);
});

gulp.task("default", ["lint", "build"]);
