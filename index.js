var antes = 'antes';
var validaEscopo = function () {
    var antesNaFunc = 'antes-na-func';
    console.log(`Na Func ${antes}, ${depois}, ${antesNaFunc}, ${depoisNaFunc}, ${naoDefinida}`);
    var depoisNaFunc = 'depois-na-func';
}
var depois = 'depois';
var naoDefinida;

validaEscopo();