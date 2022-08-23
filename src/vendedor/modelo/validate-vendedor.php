<?php
session_start();

if(!isset($_SESSION['NOME']) && !isset($_SESSION['TIPO'])){
    $dados = array (
        'tipo' => 'error',
        'mensagem' => 'Você não esta autenticando no sistema'
    );
}
else{ 
$dados = array (
    "tipo" => "sucess",
    "mensagem" => 'Seja Bem Vindo' .$_SESSION['NOME']
);
}
echo json_encode ($dados);