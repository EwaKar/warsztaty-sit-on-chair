// tworzymy zmienną, które wpisujemy nazwę pakietu , który wcześniej stworzyliśmy
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


gulp.task("pranie", function() {

  console.log("pranie")

});

sassOptions = {
  outputStyle: 'expanded'
};
 //wejściowa ścieżka i wyjściowa mega ważne

var input = 'sass/**/*.scss';
var output = 'css/';

// w funkcji wrzucamy ( do rury) plik scss i pipe je procesuje "sass" to operacja kompilująca
// on Error - jeżeli jest błąd w kompilacji to wykrywa typ eventu, który
//sassOptions - metoda kompilacji

gulp.task('sass', function() {
  //taking the path from the above object
  return gulp.src(input)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output))
})


// task watch obserwuje plik. Może wykonywać wiele zadań.
gulp.task('watch', function() {

  gulp.watch(input, ['sass']);

})

/*
note js
npm
gulp i paczkę globalnie
jeżeli chcemy pracowac nad zadaniem musimy zainstalować lokalnie
tworzymy katalog gulpfile.js i tworzymy w nim polecenia

*/
