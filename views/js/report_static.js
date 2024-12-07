$(document).ready(()=>{
    //
    $('.clear-data').on("click",()=>{
        //
        $('#tr_thead_depcount').html(``)
        $('#tbody_calcResultat').html(``)
        $('#tr_tbody_depCount').html(``)
        //
    })
    //
    $('#report_submit_plus').on('click',()=>{
        //
        //
        var start_date = new Date($('#start_date').val())
        start_date.setDate(start_date.getDate() - 90)
        data ={
            //
            start:start_date,
            end:$('#start_date').val()
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
                    $('#tr_thead_depcount').html(``)
                    $('#tr_tbody_depCount').html(``)
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
                    Object.keys(response.resultat).forEach((dep)=>{
                        //
                        response.resultat[dep].forEach(res=>{
                            //
                            console.log(res)
                            $('#tbody_calcResultat').append(`
                                        <tr>
                                            <td>${res.pin[0]}</td>
                                            <td>${res.name}</td>
                                            <td>${res.sum}</td>
                                            <td>${res.department}</td>
                                            <td><a href="#ajouter-services" class="btn-detail" onclick='detali_data(${JSON.stringify(res.data)})'>Detail</a></td>
                                        </tr>
                                `)
                            //
                        })
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