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
        <td>a</td>
        <td>b</td>
        <td>c</td>
        <td>d</td>
        <td>e</td>
    </tbody>
</table>
}
export default Mickpage;