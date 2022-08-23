<?php
session_start();

session_destroy();

$dados = array (
    "tipo" => "sucess",
    "mensagem" => "Sua sesão foi encerrada."
);

echo json_encode ($dados);