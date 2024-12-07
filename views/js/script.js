new DataTable('#example');
new DataTable('#example1');
new DataTable('#example2');
new DataTable('#example3');
new DataTable('#example4');
new DataTable('#example5');
new DataTable('#example6');
$(document).ready(function(){
    $("#check").click(function(){
      $("label").toggleClass("strike");
    });
  }); 
/*
  $('.utilisateur-add').on('click', function(){
    $('#ajouter-utilisateur').css('display','block');
  })
  */

/*************dashboard tags*************/
$('.overview').on('click', function(){
    $('.user-section').show();
    $('.guichet-section').hide();
    $('.material-section').hide();
    $('.service-section').hide();
    $('.agence-section').hide();
    $('.Paramétrage-section').hide();
    $('.appeler-section').hide();
    $('.paramt-application').hide();
    $('.Paramétrage-stock-section').hide();
    $('.affectation-colis-section').hide();
    $('.liste-colis-section').hide();
    $('.inter-affichage-section').hide();
})

$('.Guichets').on('click', function(){
    $('.user-section').hide();
    $('.guichet-section').show();
    $('.material-section').hide();
    $('.service-section').hide();
    $('.agence-section').hide();
    $('.Paramétrage-section').hide();
    $('.appeler-section').hide();
    $('.paramt-application').hide();
    $('.Paramétrage-stock-section').hide();
    $('.affectation-colis-section').hide();
    $('.liste-colis-section').hide();
    $('.inter-affichage-section').hide();
})

$('.Matériels').on('click', function(){
    $('.user-section').hide();
    $('.guichet-section').hide();
    $('.material-section').show();
    $('.service-section').hide();
    $('.agence-section').hide();
    $('.Paramétrage-section').hide();
    $('.appeler-section').hide();
    $('.paramt-application').hide();
    $('.Paramétrage-stock-section').hide();
    $('.affectation-colis-section').hide();
    $('.liste-colis-section').hide();
    $('.inter-affichage-section').hide();
})

$('.Services').on('click', function(){
    $('.user-section').hide();
    $('.guichet-section').hide();
    $('.material-section').hide();
    $('.service-section').show();
    $('.agence-section').hide();
    $('.Paramétrage-section').hide();
    $('.appeler-section').hide();
    $('.paramt-application').hide();
    $('.Paramétrage-stock-section').hide();
    $('.affectation-colis-section').hide();
    $('.liste-colis-section').hide();
    $('.inter-affichage-section').hide();
})

$('.Agences').on('click', function(){
    $('.user-section').hide();
    $('.guichet-section').hide();
    $('.material-section').hide();
    $('.service-section').hide();
    $('.agence-section').show();
    $('.Paramétrage-section').hide();
    $('.appeler-section').hide();
    $('.paramt-application').hide();
    $('.Paramétrage-stock-section').hide();
    $('.affectation-colis-section').hide();
    $('.liste-colis-section').hide();
    $('.inter-affichage-section').hide();
})

$('.Paramétrage').on('click', function(){
    $('.user-section').hide();
    $('.guichet-section').hide();
    $('.material-section').hide();
    $('.service-section').hide();
    $('.agence-section').hide();
    $('.Paramétrage-section').show();
    $('.appeler-section').hide();
    $('.paramt-application').hide();
    $('.Paramétrage-stock-section').hide();
    $('.affectation-colis-section').hide();
    $('.liste-colis-section').hide();
    $('.inter-affichage-section').hide();
})

$('.appeler').on('click', function(){
  $('.user-section').hide();
  $('.guichet-section').hide();
  $('.material-section').hide();
  $('.service-section').hide();
  $('.agence-section').hide();
  $('.Paramétrage-section').hide();
  $('.appeler-section').show();
  $('.paramt-application').hide();
  $('.Paramétrage-stock-section').hide();
  $('.affectation-colis-section').hide();
  $('.liste-colis-section').hide();
  $('.inter-affichage-section').hide();
})

$('.paramètres-application').on('click', function(){
  $('.user-section').hide();
  $('.guichet-section').hide();
  $('.material-section').hide();
  $('.service-section').hide();
  $('.agence-section').hide();
  $('.Paramétrage-section').hide();
  $('.appeler-section').hide();
  $('.paramt-application').show();
  $('.Paramétrage-stock-section').hide();
  $('.affectation-colis-section').hide();
  $('.liste-colis-section').hide();
  $('.inter-affichage-section').hide();
})

$('.paramètres-stock').on('click', function(){
  $('.user-section').hide();
  $('.guichet-section').hide();
  $('.material-section').hide();
  $('.service-section').hide();
  $('.agence-section').hide();
  $('.Paramétrage-section').hide();
  $('.appeler-section').hide();
  $('.paramt-application').hide();
  $('.Paramétrage-stock-section').show();
  $('.affectation-colis-section').hide();
  $('.liste-colis-section').hide();
  $('.inter-affichage-section').hide();
})

$('.affectation-colis').on('click', function(){
  $('.user-section').hide();
  $('.guichet-section').hide();
  $('.material-section').hide();
  $('.service-section').hide();
  $('.agence-section').hide();
  $('.Paramétrage-section').hide();
  $('.appeler-section').hide();
  $('.paramt-application').hide();
  $('.Paramétrage-stock-section').hide();
  $('.affectation-colis-section').show();
  $('.liste-colis-section').hide();
  $('.inter-affichage-section').hide();
})

$('.liste-colis').on('click', function(){
  $('.user-section').hide();
  $('.guichet-section').hide();
  $('.material-section').hide();
  $('.service-section').hide();
  $('.agence-section').hide();
  $('.Paramétrage-section').hide();
  $('.appeler-section').hide();
  $('.paramt-application').hide();
  $('.Paramétrage-stock-section').hide();
  $('.affectation-colis-section').hide();
  $('.liste-colis-section').show();
  $('.inter-affichage-section').hide();
})

$('.inter-affichage').on('click', function(){
  $('.user-section').hide();
  $('.guichet-section').hide();
  $('.material-section').hide();
  $('.service-section').hide();
  $('.agence-section').hide();
  $('.Paramétrage-section').hide();
  $('.appeler-section').hide();
  $('.paramt-application').hide();
  $('.Paramétrage-stock-section').hide();
  $('.affectation-colis-section').hide();
  $('.liste-colis-section').hide();
  $('.inter-affichage-section').show();
})