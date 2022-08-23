$(document).ready(function() {
    $.ajax({
        type: 'POST',
        datatype: 'json',
        assync: true,
        url: 'src/vendedor/validate-vendedor.js',
        success: function(dados) {
            if (dados.tipo == 'sucess'){
             Swal.fire({
                 title: 'e-rifa',
                 text: dados.mensagem,
                 icon: dados.tipo,
                 confirmButtonText: 'OK'
             })
            }
            else {
                $(location).attr('href', 'index.html')
            }
         }
     }
         )
 
 
    })