// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var imagemApp = angular.module('starter', ['ionic', 'firebase','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
     
     
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

imagemApp.config(function($stateProvider, $urlRouterProvider){
$stateProvider.state('lista',{
url:'/lista',
templateUrl: 'templates/lista.html', //patch
controller: 'ListaCtrl'
});

$stateProvider.state('visual',{
  url:'/visual',
  templateUrl: 'templates/visual.html', //patch
  controller: 'VisualCtrl'
  });

$stateProvider.state('auditiva',{
    url:'/auditiva',
    templateUrl: 'templates/auditiva.html', //patch
    controller: 'AuditivaCtrl'
});

$stateProvider.state('motora',{
  url:'/motora',
  templateUrl: 'templates/motora.html', //patch
  controller: 'MotoraCtrl'
});
  
$stateProvider.state('cadastroauditiva',{
  url:'/cadastroauditiva',
  templateUrl: 'templates/cadastroauditiva.html', //patch
  controller: 'CadastroaudioCtrl'
  });


  $stateProvider.state('cadastroauditivaios',{
    url:'/cadastroauditivaios',
    templateUrl: 'templates/cadastroauditivaios.html', //patch
    controller: 'CadastroaudioiosCtrl'
    });
  


  $stateProvider.state('loginauditiva',{
    url:'/loginauditiva',
    templateUrl: 'templates/loginauditiva.html', //patch
    controller: 'LoginauditivaCtrl'
    });
 
    $stateProvider.state('loginavaliacao',{
      url:'/loginavaliacao',
      templateUrl: 'templates/loginavaliacao.html', //patch
      controller: 'LoginavaliacaoCtrl'
      });
    
  
  
    $stateProvider.state('loginmotor',{
      url:'/loginmotor',
      templateUrl: 'templates/loginmotor.html', //patch
      controller: 'LoginmotorCtrl'
      });
   
      $stateProvider.state('loginvisual',{
        url:'/loginvisual',
        templateUrl: 'templates/loginvisual.html', //patch
        controller: 'LoginvisualCtrl'
        });
     

    $stateProvider.state('cadastrouser',{
      url:'/cadastrouser',
      templateUrl: 'templates/cadastrouser.html', //patch
      controller: 'CadastrouserCtrl'
});


$stateProvider.state('aplicativo',{
  url:'/aplicativo/:id',
  templateUrl: 'templates/aplicativo.html', //patch
  controller: 'AplicativoCtrl'
});

$stateProvider.state('perfil',{
  url:'/perfil/:id',
  templateUrl: 'templates/perfil.html', //patch
  controller: 'PerfilCtrl'
});
 
$stateProvider.state('perfilmotor',{
  url:'/perfilmotor/:id',
  templateUrl: 'templates/perfilmotor.html', //patch
  controller: 'PerfilmotorCtrl'
});

$stateProvider.state('perfilvisual',{
  url:'/perfilvisual/:id',
  templateUrl: 'templates/perfilvisual.html', //patch
  controller: 'PerfilvisualCtrl'
});

  $stateProvider.state('cadastromotora',{
    url:'/cadastromotora',
    templateUrl: 'templates/cadastromotor.html', //patch
    controller: 'CadastromotorCtrl'
    });

    $stateProvider.state('cadastrovisual',{
      url:'/cadastrovisual',
      templateUrl: 'templates/cadastrovisual.html', //patch
      controller: 'CadastrovisualCtrl'
      });
  
 
    $stateProvider.state('menu',{
      url:'/menu',
      templateUrl: 'templates/menu.html', //patch
      controller: 'MenuCtrl'
      });
  
      $stateProvider.state('aplicativomotor',{
        url:'/aplicativomotor/:id',
        templateUrl: 'templates/aplicativomotor.html', //patch
        controller: 'AplicativomotorCtrl'
        });
    

        $stateProvider.state('aplicativovisual',{
          url:'/aplicativovisual/:id',
          templateUrl: 'templates/aplicativovisual.html', //patch
          controller: 'AplicativovisualCtrl'
          });
      

          $stateProvider.state('editaraudio',{
            url:'/editaraudio/:id',
            templateUrl: 'templates/editaraudio.html', //patch
            controller: 'EditaraudioCtrl'
            });
        

            $stateProvider.state('editarmotor',{
              url:'/editarmotor/:id',
              templateUrl: 'templates/editarmotor.html', //patch
              controller: 'EditarmotorCtrl'
              });
        
              $stateProvider.state('editarvisual',{
                url:'/editarvisual/:id',
                templateUrl: 'templates/editarvisual.html', //patch
                controller: 'EditarvisualCtrl'
                });

   $stateProvider.state('escolha',{
  url:'/escolha/:id',
  templateUrl: 'templates/escolha.html', //patch
  controller: 'EscolhaCtrl'
                  });

                  $stateProvider.state('escolhamotor',{
                    url:'/escolhamotor/:id',
                    templateUrl: 'templates/escolhamotor.html', //patch
                    controller: 'EscolhamotorCtrl'
                                    });

                   $stateProvider.state('escolhavisual',{
                   url:'/escolhavisual/:id',
                   templateUrl: 'templates/escolhavisual.html', //patch
                   controller: 'EscolhavisualCtrl'
                                    });
  
                  $stateProvider.state('cadastromotorios',{
                    url:'/cadastromotorios/:id',
                    templateUrl: 'templates/cadastromotorios.html', //patch
                    controller: 'CadastromotoriosCtrl'
                                    });
                    
                   $stateProvider.state('cadastrovisualios',{
                   url:'/cadastrovisualios/:id',
                   templateUrl: 'templates/cadastrovisualios.html', //patch
                   controller: 'CadastrovisualiosCtrl'
                                      });
                                      




                $urlRouterProvider.otherwise('/lista');

})

// para usar o scope precisa adiconar la na função
.controller('ListaCtrl', function($scope, ContatoService){

})

.controller('EscolhaCtrl', function($scope, ContatoService){
  
  })

.controller('EscolhamotorCtrl', function($scope, ContatoService){
    
    })

.controller('EscolhavisualCtrl', function($scope, ContatoService){
      
})
  

.controller('EditaraudioCtrl', function($scope, $state, $firebaseObject, $stateParams){  
  var id = $stateParams.id;
  
  var user = firebase.auth().currentUser;
  var  uid;
  uid = user.uid; 

  

          var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
          
           if (!!navigator.platform ===iOS) {
          
            var ref = firebase.database().ref().child('cadastroaudioios').child(id);
            
              //  var ref1 = firebase.database().ref().child('appusuario').child(uid).child(id); 
              $scope.perfil = $firebaseObject(ref);
             /// $scope.perfil = $firebaseObject(ref1);
            
                $scope.salvar = function (perfil) {
                  
                        $scope.perfil = perfil;
                        $scope.perfil.$save(ref);
                        
                        $state.go('lista');
                  
                      }
                         
          
          
            }else{
        
             
              var ref = firebase.database().ref().child('cadastroaudioandroid').child(id);
              
                //  var ref1 = firebase.database().ref().child('appusuario').child(uid).child(id); 
                $scope.perfil = $firebaseObject(ref);
               /// $scope.perfil = $firebaseObject(ref1);
              
                  $scope.salvar = function (perfil) {
                    
                          $scope.perfil = perfil;
                          $scope.perfil.$save(ref);
                          
                          $state.go('lista');
                    
                        }
              
          
            }
        















})







.controller('EditarmotorCtrl', function($scope, $state, $firebaseObject, $stateParams){  
  var id = $stateParams.id;
  
  var user = firebase.auth().currentUser;
  var  uid;
  uid = user.uid; 

  var ref = firebase.database().ref().child('cadastromotor').child(id);

  //  var ref1 = firebase.database().ref().child('appusuario').child(uid).child(id); 
  $scope.perfil = $firebaseObject(ref);
 /// $scope.perfil = $firebaseObject(ref1);

    $scope.salvar = function (perfil) {
      
            $scope.perfil = perfil;
            $scope.perfil.$save(ref);
            
            $state.go('lista');
      
          }
})

.controller('EditarvisualCtrl', function($scope, $state, $firebaseObject, $stateParams){  
  var id = $stateParams.id;
  
  var user = firebase.auth().currentUser;
  var  uid;
  uid = user.uid; 

  var ref = firebase.database().ref().child('cadastrovisual').child(id);

  //  var ref1 = firebase.database().ref().child('appusuario').child(uid).child(id); 
  $scope.perfil = $firebaseObject(ref);
 /// $scope.perfil = $firebaseObject(ref1);

    $scope.salvar = function (perfil) {
      
            $scope.perfil = perfil;
            $scope.perfil.$save(ref);
            
            $state.go('lista');
      
          }
})



.controller('MenuCtrl', function(){  
})


.controller('AplicativovisualCtrl', function($scope,$firebaseArray, $firebaseObject, $state, $stateParams, $window){  
  
  var id = $stateParams.id;
  
  
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  
   if (!!navigator.platform ===iOS) {
  
         var ref = firebase.database().ref().child('cadastrovisualios').child(id);
     
         $scope.cadvisual = $firebaseObject(ref);         
  
         var ref1 = firebase.database().ref().child('imgappstore').child('1');
         
             $scope.baixar = $firebaseObject(ref1);         
      
  
    }else{

     var ref1 = firebase.database().ref().child('cadastrovisualandroid').child(id);
     
         $scope.cadvisual = $firebaseObject(ref1);
         var ref1 = firebase.database().ref().child('imggoogleplay').child('1');
         
             $scope.baixar = $firebaseObject(ref1);         
      

  
    }
    

    $scope.avaliar={};
    
   $scope.salvar = function(avaliar){
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
     if (!!navigator.platform ===iOS) {
     
    var ref = firebase.database().ref().child('cadastroaudioios').child(id);
       
    $firebaseArray(ref).$add(avaliar)           
    
    $state.go('lista')
  
     }else{
    
   var ref = firebase.database().ref().child('cadastroaudioandroid').child(id);
      
   $firebaseArray(ref).$add(avaliar)           
   
   $state.go('lista')
  
  
  
  
  
     }
  
  }
  
  


$scope.acessar = function() {
 
  //var bb = 'https://itunes.apple.com/us/app/whatsapp-messenger/id310633997?mt=8';

 // var bb1 = firebase.database().ref('cadastroaudioios/' + id + '/ios');
 //var ref = firebase.database().ref().child('cadastroaudioios').child(id).child('ios');
 //var bb = $firebaseObject(ref);


// var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

 // if (!!navigator.platform ===iOS) {


      // ...
    
      $window.open($scope.cadaudio.url,'_system');

};



})

  .controller('AplicativomotorCtrl', function($scope,$firebaseArray, $firebaseObject, $state, $stateParams, $window){  
    
    var id = $stateParams.id;
    
    
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
     if (!!navigator.platform ===iOS) {
    
           var ref = firebase.database().ref().child('cadastromotorios').child(id);
       
           $scope.cadaudio = $firebaseObject(ref);         
    
           var ref1 = firebase.database().ref().child('imgappstore').child('1');
           
               $scope.baixar = $firebaseObject(ref1);         
        
    
      }else{
  
       var ref1 = firebase.database().ref().child('cadastromotorandroid').child(id);
       
           $scope.cadaudio = $firebaseObject(ref1);
           var ref1 = firebase.database().ref().child('imggoogleplay').child('1');
           
               $scope.baixar = $firebaseObject(ref1);         
        
  
    
      }
      
  
 $scope.avaliar={};
 
$scope.salvar = function(avaliar){
 var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
 
  if (!!navigator.platform ===iOS) {
  
 var ref = firebase.database().ref().child('cadastroaudioios').child(id);
    
 $firebaseArray(ref).$add(avaliar)           
 
 $state.go('lista')

  }else{
 
var ref = firebase.database().ref().child('cadastroaudioandroid').child(id);
   
$firebaseArray(ref).$add(avaliar)           

$state.go('lista')


  }

}

 
  $scope.acessar = function() {
   
    //var bb = 'https://itunes.apple.com/us/app/whatsapp-messenger/id310633997?mt=8';
  
   // var bb1 = firebase.database().ref('cadastroaudioios/' + id + '/ios');
   //var ref = firebase.database().ref().child('cadastroaudioios').child(id).child('ios');
   //var bb = $firebaseObject(ref);
  
  
  // var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  
   // if (!!navigator.platform ===iOS) {
  
  
        // ...
      
        $window.open($scope.cadaudio.url,'_system');

  };
  
  
  
  })
  
  

.controller('CadastromotorCtrl', function($scope,$firebaseArray,$state,Camera, $firebaseStorage, $ionicHistory, $cordovaCamera,){  
  
    $scope.imagem = null;
  
    $scope.getPicture = function () {
  
          var config = {
             quality : 75,
             targetWidth: 200,
             targetHeight: 200,
             sourceType: 0,
             destinationType: 0,
             encodingType: 0
          };
    
         
          Camera.getPicture(config).then(function(imageData) {
              $scope.picture = "data:image/jpeg;base64," + imageData;
              $scope.imagem = imageData;
  
             
          });
        }
        
        $scope.salvar = function(cadmotor) {
  


    
          var dog = [];
          var valorMaximo = 9999999999999999999999;
          
         
             
           var dog = Math.ceil(Math.random() * valorMaximo); // Escolher um numero ao acaso
            
          var teste = dog;

      var storageRef = firebase.storage().ref('userProfiles/'+teste);
      var storage = $firebaseStorage(storageRef);
    // get a file from the template (see Retrieving files from template section below)
    //  var uploadTask = storage.$put(file);
      // of upload via a RAW, base64, or base64url string
      var uploadTask = storage.$putString($scope.imagem, 'base64',{ contentType: "image/jpg" });






            uploadTask.$complete(function(snapshot) {
              // console.log(snapshot.downloadURL);
  
              cadmotor.imagemURL = snapshot.downloadURL;
  
              var ref = firebase.database().ref().child('cadastromotorandroid');
              $firebaseArray(ref).$add(cadmotor);
              $state.go('lista');
            });
        }
   })
  


.controller('CadastrovisualiosCtrl', function($scope,$firebaseArray,$state,Camera, $firebaseStorage, $ionicHistory, $cordovaCamera,){  
    
      $scope.imagem = null;
    
      $scope.getPicture = function () {
    
            var config = {
               quality : 75,
               targetWidth: 200,
               targetHeight: 200,
               sourceType: 0,
               destinationType: 0,
               encodingType: 0
            };
      
           
            Camera.getPicture(config).then(function(imageData) {
                $scope.picture = "data:image/jpeg;base64," + imageData;
                $scope.imagem = imageData;
    
               
            });
          }
          
          $scope.salvar = function(cadvisual) {
    
  
  
      
            var dog = [];
            var valorMaximo = 99999999999999999999999999;
            
           
               
             var dog = Math.ceil(Math.random() * valorMaximo); // Escolher um numero ao acaso
              
            var teste = dog;
  
        var storageRef = firebase.storage().ref('userProfiles/'+teste);
        var storage = $firebaseStorage(storageRef);
      // get a file from the template (see Retrieving files from template section below)
      //  var uploadTask = storage.$put(file);
        // of upload via a RAW, base64, or base64url string
        var uploadTask = storage.$putString($scope.imagem, 'base64',{ contentType: "image/jpg" });
  
  
  
  
  
  
              uploadTask.$complete(function(snapshot) {
                // console.log(snapshot.downloadURL);
    
                cadvisual.imagemURL = snapshot.downloadURL;
    
                var ref = firebase.database().ref().child('cadastrovisualios');
                $firebaseArray(ref).$add(cadvisual);
                $state.go('lista');
              });
          }
     })
    
  
.controller('CadastrovisualCtrl', function($scope,$firebaseArray,$state,Camera, $firebaseStorage, $ionicHistory, $cordovaCamera,){  
      
        $scope.imagem = null;
      
        $scope.getPicture = function () {
      
              var config = {
                 quality : 75,
                 targetWidth: 200,
                 targetHeight: 200,
                 sourceType: 0,
                 destinationType: 0,
                 encodingType: 0
              };
        
             
              Camera.getPicture(config).then(function(imageData) {
                  $scope.picture = "data:image/jpeg;base64," + imageData;
                  $scope.imagem = imageData;
      
                 
              });
            }
            
            $scope.salvar = function(cadvisual) {
      
    
    
              var dog = [];
              var valorMaximo = 99999999999;
              
             
                 
               var dog = Math.ceil(Math.random() * valorMaximo); // Escolher um numero ao acaso
                
              var teste = dog;
          var storageRef = firebase.storage().ref('userProfiles/'+teste);
          var storage = $firebaseStorage(storageRef);
        // get a file from the template (see Retrieving files from template section below)
        //  var uploadTask = storage.$put(file);
          // of upload via a RAW, base64, or base64url string
          var uploadTask = storage.$putString($scope.imagem, 'base64',{ contentType: "image/jpg" });
    
    
    
    
    
    
                uploadTask.$complete(function(snapshot) {
                  // console.log(snapshot.downloadURL);
      
                  cadvisual.imagemURL = snapshot.downloadURL;
      
                  var ref = firebase.database().ref().child('cadastrovisualandroid');
                  $firebaseArray(ref).$add(cadvisual);
                  $state.go('lista');
                });
            }
       })
      
    

.controller('AuditivaCtrl', function($scope, $firebaseObject, $state, $stateParams, $firebaseArray, $window){  

//  var ref = firebase.database().ref().child('cadastroaudio');
  
//      $scope.cadaudios = $firebaseArray(ref);
  

  
        
       
         var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
       
         if (!!navigator.platform ===iOS) {
       
              var ref = firebase.database().ref().child('cadastroaudioios');
          
              $scope.cadaudios = $firebaseArray(ref);         
       
       
       
         }else{
  
          var ref1 = firebase.database().ref().child('cadastroaudioandroid');
          
              $scope.cadaudios = $firebaseArray(ref1);
          

       
         }
       
})

.controller('VisualCtrl', function($scope, $firebaseObject, $state, $stateParams, $firebaseArray, $window){  
  
  //  var ref = firebase.database().ref().child('cadastroaudio');
    
  //      $scope.cadaudios = $firebaseArray(ref);
    
  
    
          
         
           var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
         
           if (!!navigator.platform ===iOS) {
         
                var ref = firebase.database().ref().child('cadastrovisualios');
            
                $scope.cadvisuals = $firebaseArray(ref);         
         
         
         
           }else{
    
            var ref1 = firebase.database().ref().child('cadastrovisualandroid');
            
                $scope.cadvisuals = $firebaseArray(ref1);
            
  
         
           }
         
  
  })
  
  .controller('MotoraCtrl', function($scope, $firebaseObject, $state, $stateParams, $firebaseArray, $window){  
    
    //  var ref = firebase.database().ref().child('cadastroaudio');
      
    //      $scope.cadaudios = $firebaseArray(ref);
      
    
      
            
           
             var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
           
             if (!!navigator.platform ===iOS) {
           
                  var ref = firebase.database().ref().child('cadastromotorios');
              
                  $scope.cadmotors = $firebaseArray(ref);         
           
           
           
             }else{
      
              var ref1 = firebase.database().ref().child('cadastromotorandroid');
              
                  $scope.cadmotors = $firebaseArray(ref1);
              
    
           
             }          
    })
    

    .controller('CadastroaudioCtrl', function($scope,$firebaseArray,$state,Camera, $firebaseStorage, $ionicHistory, $cordovaCamera,){  
      
        $scope.imagem = null;
      
        $scope.getPicture = function () {
      
              var config = {
                 quality : 75,
                 targetWidth: 200,
                 targetHeight: 200,
                 sourceType: 0,
                 destinationType: 0,
                 encodingType: 0
              };
        
             
              Camera.getPicture(config).then(function(imageData) {
                  $scope.picture = "data:image/jpeg;base64," + imageData;
                  $scope.imagem = imageData;
      
                 
              });
            }
            
            $scope.salvar = function(cadaudio) {
      
    
    
        
              var dog = [];
              var valorMaximo = 999999999999999999999999;
              
             
                 
               var dog = Math.ceil(Math.random() * valorMaximo); // Escolher um numero ao acaso
                
              var teste = dog;
    
          var storageRef = firebase.storage().ref('userProfiles/'+teste);
          var storage = $firebaseStorage(storageRef);
        // get a file from the template (see Retrieving files from template section below)
        //  var uploadTask = storage.$put(file);
          // of upload via a RAW, base64, or base64url string
          var uploadTask = storage.$putString($scope.imagem, 'base64',{ contentType: "image/jpg" });
    
    
    
    
    
    
                uploadTask.$complete(function(snapshot) {
                  // console.log(snapshot.downloadURL);
      
                  cadaudio.imagemURL = snapshot.downloadURL;
      
                  var ref = firebase.database().ref().child('cadastroaudioandroid');
                  $firebaseArray(ref).$add(cadaudio);
                  $state.go('lista');
                });
            }
       })
      
          
     
 .controller('CadastroaudioiosCtrl', function($scope,$firebaseArray,$state,Camera, $firebaseStorage, $ionicHistory, $cordovaCamera,){  
  
    $scope.imagem = null;
  
    $scope.getPicture = function () {
  
          var config = {
             quality : 75,
             targetWidth: 200,
             targetHeight: 200,
             sourceType: 0,
             destinationType: 0,
             encodingType: 0
          };
    
         
          Camera.getPicture(config).then(function(imageData) {
              $scope.picture = "data:image/jpeg;base64," + imageData;
              $scope.imagem = imageData;
  
             
          });
        }
        
        $scope.salvar = function(cadaudio) {
  


    
          var dog = [];
          var valorMaximo = 999999999999999999999999;
          
         
             
           var dog = Math.ceil(Math.random() * valorMaximo); // Escolher um numero ao acaso
            
          var teste = dog;

      var storageRef = firebase.storage().ref('userProfiles/'+teste);
      var storage = $firebaseStorage(storageRef);
    // get a file from the template (see Retrieving files from template section below)
    //  var uploadTask = storage.$put(file);
      // of upload via a RAW, base64, or base64url string
      var uploadTask = storage.$putString($scope.imagem, 'base64',{ contentType: "image/jpg" });






            uploadTask.$complete(function(snapshot) {
              // console.log(snapshot.downloadURL);
  
              cadaudio.imagemURL = snapshot.downloadURL;
  
              var ref = firebase.database().ref().child('cadastroaudioios');
              $firebaseArray(ref).$add(cadaudio);
              $state.go('lista');
            });
        }
   })
  

 .controller('CadastromotoriosCtrl', function($scope,$firebaseArray,$state,Camera, $firebaseStorage, $ionicHistory, $cordovaCamera,){  
    
      $scope.imagem = null;
    
      $scope.getPicture = function () {
    
            var config = {
               quality : 75,
               targetWidth: 200,
               targetHeight: 200,
               sourceType: 0,
               destinationType: 0,
               encodingType: 0
            };
      
           
            Camera.getPicture(config).then(function(imageData) {
                $scope.picture = "data:image/jpeg;base64," + imageData;
                $scope.imagem = imageData;
    
               
            });
          }
          
          $scope.salvar = function(cadmotor) {
    
  
            var dog = [];
            var valorMaximo = 99999999999999999;
            
           
               
             var dog = Math.ceil(Math.random() * valorMaximo); // Escolher um numero ao acaso
              
            var teste = dog;
        var storageRef = firebase.storage().ref('userProfiles/'+teste);
        var storage = $firebaseStorage(storageRef);
      // get a file from the template (see Retrieving files from template section below)
      //  var uploadTask = storage.$put(file);
        // of upload via a RAW, base64, or base64url string
        var uploadTask = storage.$putString($scope.imagem, 'base64',{ contentType: "image/jpg" });
  
  
  
  
  
  
              uploadTask.$complete(function(snapshot) {
                // console.log(snapshot.downloadURL);
    
                cadmotor.imagemURL = snapshot.downloadURL;
    
                var ref = firebase.database().ref().child('cadastromotorios');
                $firebaseArray(ref).$add(cadmotor);
                $state.go('lista');
              });
          }
     })
    
  

.controller('LoginauditivaCtrl', function($scope, $firebaseAuth,$state){  

  $scope.usuario = {}; // Usuario usuario = new Usuario ();
  
      $scope.login = function (usuario) {
        
        $firebaseAuth().$signInWithEmailAndPassword(usuario.email, usuario.password)
  
          .then(function (firebaseUser) {
            $state.go('perfil');
          })
          .catch(function (error) {
            // falha na autenticacao.
  
            alert(error);
          });
  
      }
  
})



.controller('LoginvisualCtrl', function($scope, $firebaseAuth,$state){  
  
    $scope.usuario = {}; // Usuario usuario = new Usuario ();
    
        $scope.login = function (usuario) {
          
          $firebaseAuth().$signInWithEmailAndPassword(usuario.email, usuario.password)
    
            .then(function (firebaseUser) {
              $state.go('perfilvisual');
            })
            .catch(function (error) {
              // falha na autenticacao.
    
              alert(error);
            });
    
        }
    
  })
  
  
  

.controller('LoginavaliacaoCtrl', function($scope, $firebaseAuth,$state){  
  
    $scope.usuario = {}; // Usuario usuario = new Usuario ();
    
        $scope.login = function (usuario) {
          
          $firebaseAuth().$signInWithEmailAndPassword(usuario.email, usuario.password)
    
            .then(function (firebaseUser) {
              $state.go('lista');
            })
            .catch(function (error) {
              // falha na autenticacao.
    
              alert(error);
            });
    
        }
    
  })
  


  .controller('LoginmotorCtrl', function($scope, $firebaseAuth,$state){  
    
      $scope.usuario = {}; // Usuario usuario = new Usuario ();
      
          $scope.login = function (usuario) {
            
            $firebaseAuth().$signInWithEmailAndPassword(usuario.email, usuario.password)
      
              .then(function (firebaseUser) {
                $state.go('perfilmotor');
              })
              .catch(function (error) {
                // falha na autenticacao.
      
                alert(error);
              });
      
          }
      
    })
    

.controller('CadastrouserCtrl', function($scope,$firebaseAuth,$state){  
 
  $scope.usuario = {}; // Usuario usuario = new Usuario ();
  
      $scope.salvar = function (usuario) {
        
        firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
        

       // $firebaseAuth().$createuserWithEmailAndPassword(usuario.email, usuario.password)
  
                      $state.go('lista');
          
  
      }
 
 
 
 
 // $scope.usuario={};
  
//    $scope.salvar = function(usuario){
//      var ref = firebase.database().ref().child('usuarios');
//      $firebaseArray(ref).$add(usuario)
          
//      $state.go('lista')
//    }
  
})



.controller('PerfilCtrl', function($scope, $firebaseObject, $state, $stateParams, $firebaseArray, $window){  
  
  //  var user = firebase.auth().currentUser;
  //  var  uid;
  //  uid = user.uid; 

  //  var id = $stateParams.id;
  //    var ref = firebase.database().ref().child('appusuario').child(uid);
  //  var ref1 = firebase.database().ref().child('cadastroaudio').child(id);  
 //   $scope.perfils = $firebaseArray(ref);
  //  $scope.perfils = $firebaseArray(ref1);
//-------------------------------------------------------------------------------------------



var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

 if (!!navigator.platform ===iOS) {
  
  
  var ref = firebase.database().ref().child('cadastroaudioios');
  
      $scope.perfils = $firebaseArray(ref);         

      $scope.apagar = function (id) {
        var obj = $scope.perfils.$getRecord(id);
        $scope.perfils.$remove(obj);
      }
               


  }else{

    var ref1 = firebase.database().ref().child('cadastroaudioandroid');
    
    
        $scope.perfils = $firebaseArray(ref1);
    

  
        $scope.apagar = function (id) {
          var obj = $scope.perfils.$getRecord(id);
          $scope.perfils.$remove(obj);
        }
  
  
      }


})

.controller('PerfilmotorCtrl', function($scope, $firebaseObject, $state, $stateParams, $firebaseArray, $window){  
  


var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

 if (!!navigator.platform ===iOS) {
  
  
  var ref = firebase.database().ref().child('cadastromotorios');
  
      $scope.perfils = $firebaseArray(ref);         


      $scope.apagar = function (id) {
        var obj = $scope.perfils.$getRecord(id);
        $scope.perfils.$remove(obj);
      }
               


  }else{

    var ref1 = firebase.database().ref().child('cadastromotorandroid');
    
    
        $scope.perfils = $firebaseArray(ref1);
    

        $scope.apagar = function (id) {
          var obj = $scope.perfils.$getRecord(id);
          $scope.perfils.$remove(obj);
        }
  
  
  
      }


})

.controller('PerfilvisualCtrl', function($scope, $firebaseObject, $state, $stateParams, $firebaseArray, $window){  
  
  //  var user = firebase.auth().currentUser;
  //  var  uid;
  //  uid = user.uid; 

  //  var id = $stateParams.id;
  //    var ref = firebase.database().ref().child('appusuario').child(uid);
  //  var ref1 = firebase.database().ref().child('cadastroaudio').child(id);  
 //   $scope.perfils = $firebaseArray(ref);
  //  $scope.perfils = $firebaseArray(ref1);
//-------------------------------------------------------------------------------------------



var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

 if (!!navigator.platform ===iOS) {
  
  
  var ref = firebase.database().ref().child('cadastrovisualios');
  
      $scope.perfils = $firebaseArray(ref);         

               

      $scope.apagar = function (id) {
        var obj = $scope.perfils.$getRecord(id);
        $scope.perfils.$remove(obj);
      }



  }else{

    var ref1 = firebase.database().ref().child('cadastrovisualandroid');
    
    
        $scope.perfils = $firebaseArray(ref1);
    

  
//        $scope.apagar = function (id) {
//          var obj = $scope.perfils.$getRecord(id);
//          $scope.perfils.$remove(obj);
//        }
  
  
      }


})



.controller('AplicativoCtrl', function($scope,$firebaseArray, $firebaseObject, $state, $stateParams, $window){  
  
  var id = $stateParams.id;
  
  
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  
   if (!!navigator.platform ===iOS) {
  
         var ref = firebase.database().ref().child('cadastroaudioios').child(id);
     
         $scope.cadaudio = $firebaseObject(ref);         
  
         var ref1 = firebase.database().ref().child('imgappstore').child('1');
         
             $scope.baixar = $firebaseObject(ref1);         
      
  
    }else{

     var ref1 = firebase.database().ref().child('cadastroaudioandroid').child(id);
     
         $scope.cadaudio = $firebaseObject(ref1);
         var ref1 = firebase.database().ref().child('imggoogleplay').child('1');
         
             $scope.baixar = $firebaseObject(ref1);         
      

  
    }

    




 $scope.avaliar={};
  
 $scope.salvar = function(avaliar){
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  
   if (!!navigator.platform ===iOS) {
   
  var ref = firebase.database().ref().child('cadastroaudioios').child(id);
     
  $firebaseArray(ref).$add(avaliar)           
  
  $state.go('lista')

   }else{
  
 var ref = firebase.database().ref().child('cadastroaudioandroid').child(id);
    
 $firebaseArray(ref).$add(avaliar)           
 
 $state.go('lista')





   }

}






$scope.acessar = function() {
 
  //var bb = 'https://itunes.apple.com/us/app/whatsapp-messenger/id310633997?mt=8';

 // var bb1 = firebase.database().ref('cadastroaudioios/' + id + '/ios');
 //var ref = firebase.database().ref().child('cadastroaudioios').child(id).child('ios');
 //var bb = $firebaseObject(ref);


// var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

 // if (!!navigator.platform ===iOS) {


      // ...
    
      $window.open($scope.cadaudio.url,'_system');

  

    
    
    




};



})


.factory('ContatoService', function(){// ~ DAO (database)
var database = [];

return {

read: function(){
  return database;
},
create: function(objeto){
database.push(objeto);
}

} 

})

.factory('Camera', function($q) {
  
     return {
        getPicture: function(options) {
           var q = $q.defer();
  
           navigator.camera.getPicture(function(result) {
              q.resolve(result);
           }, function(err) {
              q.reject(err);
           }, options);
  
           return q.promise;
        }
     }
  
  });

