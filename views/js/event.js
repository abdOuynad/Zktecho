function Show_all_events(pin){
    //
    $(document).ready(()=>{
        //
        $('#tbody_event').html('')
        console.log(pin)
        //
        $.ajax({
            url:`/all_events?pin=${pin}`,
            methode:'GET',
            success:function(response){
                //
                if(response.data != 'err'){
                    //
                    console.log(response.data)
                    if(response.data.length != 0){
                        //
                        response.data.forEach(element => {
                            //
                            $('#tbody_event').append(
                                `<tr>
                                    <td>#${element.USERID}</td>
                                    <td>${element.MachineAlias}</td>
                                    <td>${element.CHECKTIME}</td>
                                </tr>`
                            )
                            //
                        });
                        //
                    }
                    //
                }
                //
            }
        })
        //
    })
    //
}
//
function Show_all_events_with_datatable(pin){
    //
    $(document).ready(()=>{
        //
        console.log(pin)
        //
        $.ajax({
            url:`/all_events?pin=${pin}`,
            methode:'GET',
            success:function(response){
                //
                if(response.data != 'err'){
                    //
                    console.log(response.data)
                    new DataTable('#example2',{
                        data:response,
                        paging: false
                    })
                    //
                }
                //
            }
        })
        //
    })
    //
}