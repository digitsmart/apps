 // Your web app's Firebase configuration
            // For Firebase JS SDK v7.20.0 and later, measurementId is optional
            var firebaseConfig = {
                apiKey: "AIzaSyDVjzbTqXNzNsteN9FtUnLzG7J9G1h-Pkg",
                authDomain: "signup-de54d.firebaseapp.com",
                databaseURL: "https://signup-de54d.firebaseio.com",
                projectId: "signup-de54d",
                storageBucket: "signup-de54d.appspot.com",
                messagingSenderId: "313335894880",
                appId: "1:313335894880:web:367bf0a26531cbd0f1c405",
                measurementId: "G-TX374HDPKS"


            };
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);

            var insert = document.getElementById('insert');
            insert.addEventListener("click",function(){
                var number = document.getElementById('number').value;
                var montant = document.getElementById('montant').value;
                var prix = document.getElementById('prix').value;
                var msg = document.getElementById('msg');
                if(number == ""){
                    document.getElementById('msg').innerHTML="Veuillez entrer code d'accès";
                }
                if(montant < prix){
                    document.getElementById('msg').innerHTML="'Le prix de ce produit est'" + prix + "'FTP'";
                }else{
                    firebase.database().ref(number).update({
                    NUMBER: number,
                    BALANCE: montant - prix,
                })

                }


            })

            //............................ready data....................
            var numberV, montantV, prix;

            function Ready(){
                numberV = document.getElementById('number').value;
                montantV = document.getElementById('montant').value;
            }
            //...........................select data.........................
            document.getElementById('select').onclick = function(){
     Ready();
     firebase.database().ref(numberV).on('value',function(snapshot){;
         document.getElementById('montant').value= snapshot.val().BALANCE;
     });
 }