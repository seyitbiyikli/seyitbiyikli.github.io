$('input[name="duzenleBtn"]').click(function(){
    $(this)
    .val(function(i,v){
        return v === 'Metni Düzenle' ? 'Metni Düzenlemeyi Bitir' : 'Metni Düzenle';
    })
    .prev('textarea[required]')
    .prop('readonly',function(i,r){
        return !r;
    });
});