function agregarDatos() {

    var fecha = new Date();
    var html = '<tr>'
    html += '<td>' + $('#usuario').val() + '</td>';
    html += '<td>' + fecha.getDate() + '/' + fecha.getMonth() + '/' + fecha.getFullYear() + '</td>';
    html += '<td>CRYP ' + $('#cantidad').val() + '</td>';
    html += '</tr>';
    $('#movimientos').append(html);
    $('#usuario').val('')
    $('#cantidad').val(0)

}