$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()


        $('.modal-title').append('Adicionar novo tipo de tipo')

        $('.modal-body').load('src/comprador/view/comprador.html')

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-comprador').modal('show')
    })

    $('.close, #close').click(function(e) {
        e.preventDefault()
        $('#modal-comprador').modal('hide')
    })
})