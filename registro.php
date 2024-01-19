<?php
  include 'conexion.php';
  $nombre=$_POST['nombre'];
  $apellido=$_POST['apellido'];
  $nombreempresa=$_POST['nombreempresa'];
  $ciudad=$_POST['ciudad'];
  $correoempresa=$_POST['correoempresa'];
  $telefono=$_POST['telefono'];
  $ruc=$_POST['ruc'];
  

  
  $consulta="INSERT INTO registro(nombre,apellido,nombreempresa,ciudad,correoempresa,telefono,ruc) values ('$nombre','$apellido','$nombreempresa','$ciudad','$correoempresa','$telefono','$ruc')";
  $resultado=mysqli_query($conexion,$consulta);

  if($resultado){
    echo"Registro exitoso";

  }else {
    echo"No se pudo registrar";
  }

?>