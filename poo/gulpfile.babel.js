import gulp from 'gulp';
import babel from 'gulp-babel';
//const gulp = require('gulp');

//gulp.task();//define una tarea recibe dos paremetros
//gulp.src();//indica un directorio en el cual gulp busca los archivos que va a trabajar
//gulp.dest();//destino de los archivos trabajados
//gulp.watch();//mira los cambios en un directorio en especifico

gulp.task('es6',() =>{
    gulp.src('./es6/*.js')
    .pipe(babel())//manda los datos de uno a otro
    .pipe(gulp.dest('./es5'))
}

);