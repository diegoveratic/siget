<div class="row">
	<div class="col-md-12">
<div class="btn-group pull-right">
<a href="index.php?view=newteam" class="btn btn-success"><i class='fa fa-th-list'></i> Nuevo Curso</a>
</div>
		<h1>Cursos</h1>
<br>
		<?php
		$u=null;
if(Session::getUID()!=""){
  $u = UserData::getById(Session::getUID());
		if($u->is_admin){
			$teams = TeamData::getAll();
		}else{
			$teams = TeamData::getAllByUserId($_SESSION["user_id"]);
		}
	}
		if(count($teams)>0){
			// si hay usuarios
			?>

			<table class="table table-bordered table-hover">
			<thead>
			<th></th>
			<th>Nombre</th>
			<th></th>
			</thead>
			<?php
			foreach($teams as $team){
				?>
				<tr>
				<td style="width:130px;"><a href="index.php?action=selectteam&id=<?php echo $team->id;?>" class="btn btn-primary btn-xs">Seleccionar <i class="fa fa-arrow-right"></i></a></td>
				<td><a href="./?view=team&id=<?php echo $team->id;?>"><?php echo $team->name." ".$team->lastname; ?></a></td>				
				<td style="width:130px;"><a href="index.php?view=editteam&id=<?php echo $team->id;?>" class="btn btn-warning btn-xs">Editar</a> <a href="index.php?action=delteam&id=<?php echo $team->id;?>" class="btn btn-danger btn-xs">Eliminar</a></td>
				</tr>
				<?php

			}
			echo "</table>";

		}else{
			echo "<p class='alert alert-danger'>No hay Cursos</p>";
		}


		?>


	</div>
</div>