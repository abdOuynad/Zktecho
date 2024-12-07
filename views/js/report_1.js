function detali_data(data){
    //
    console.log(data)
    $('#tbody_detail').html('')
    data.forEach((d)=>{
        //
        $('#tbody_detail').append(`
            <tr>
                <td>${d.date}</td>
                <td>${d.TIME}</td>
                <td>${d.event}</td>
                <td>${d.point}</td>
            </tr>
            `
        )
        //
    })
    //
}
//
$(document).ready(()=>{
    //
    $('#report_submit').on('click',()=>{
        //
        data ={
            //
            start:$('#start').val(),
            end:$('#end').val()
            //
        }
        //
        console.log(data)
        //
        $.ajax({
            //
            url:'/calcul',
            method:'POST',
            data:data,
            success:function(response){
                //
                if(response.status ='success'){
                    //
                    const department = response.department
                    const department_name = Object.keys(response.department)
                    const resultat = response.resultat
                    const Client = response.client_number
                    //
                    // Show the Depertment resultat
                    //
                    $('#tr_thead_depcount').append(``)
                    $('#tr_thead_depcount').append(`<th>Number Employee</th>`)
                    $('#tr_tbody_depCount').append(`<td>${Client}</td>`)
                    //
                    department_name.forEach((dep)=>{
                        //
                        $('#tr_thead_depcount').append(`<th>${dep}</th>`)
                        $('#tr_tbody_depCount').append(`<td>${department[dep]}</td>`)
                        //
                    })
                    //
                    // Show the resltat
                    //
                    $('#tbody_calcResultat').html('')
                    resultat.forEach(res=>{
                        //
                        console.log(res)
                        $('#tbody_calcResultat').append(`
                                    <tr>
                                        <td>${res.pin[0]}</td>
                                        <td>${res.name}</td>
                                        <td>${res.sum}</td>
                                        <td><a href="#ajouter-services" class="btn-detail" onclick='detali_data(${JSON.stringify(res.data)})'>Detail</a></td>
                                    </tr>
                            `)
                        //
                    })
                    //
                    // Close report Popup
                    //
                    window.location.href = '#'
                }
                //
            }
            //
        })
        //
    })
    //
})