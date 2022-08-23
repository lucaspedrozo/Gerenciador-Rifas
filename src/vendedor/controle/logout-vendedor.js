$(document).ready(function() {

    $('#logout').click(function(e) {
        e.preventDefault()
        $.ajax( {
        type: 'POST',
        datatype: 'json',
        assync: true,
        url: 'src/vendedor/modelo/logout-vendedor.js',
        success: function(dados) {
            if (dados.tipo == 'sucess'){
             Swal.fire({
                 title: 'e-rifa',
                 text: dados.mensagem,
                 icon: dados.tipo,
                 confirmButtonText: 'OK'
             })
            $(location).attr('href','index.html')
            }
        }   
     })
    })         
})
 
