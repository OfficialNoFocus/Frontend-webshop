import React from 'react';

function Mickpage(props){
    return 
    <table class="table table-responsive-sm">
    <thead>
    <tr>
        <th scope="col">Naam</th>
        <th scope="col">Jaar</th>
        <th scope="col">Role</th>
        <th scope="col">Title</th>
        <th scope="col"><a class="btn btn-create" href="<?php echo REMOTE_URL?>/admin-kanidaten/create.php"><i class="fas fa-plus"></i></a></th>
    </tr>
    </thead>
    <tbody>
    
    </tbody>
</table>
}
export default Mickpage;