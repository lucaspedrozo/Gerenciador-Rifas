<?php

     $hostname = "sql102.epizy.com";
     $database = "epiz_31463409_bancodedados";
     $username = "epiz_31463409";
     $password = "TZI1z0RISsCH";

     if($conecta = mysqli_connect($hostname, $username , $password , $database)){
         echo 'Conectado ao Banco de Dados' . $database . '......';
     } else {
         echo  ' Erro: ' .mysqli_connect_error();
     }