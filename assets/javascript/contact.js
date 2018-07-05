$(document).ready(function() {
    var config = {
        apiKey: "AIzaSyAo7WBaOtCGkEqZn0LCl_1uoRpP0cKKdEA",
        authDomain: "portfolioproject-17fea.firebaseapp.com",
        databaseURL: "https://portfolioproject-17fea.firebaseio.com",
        projectId: "portfolioproject-17fea",
        storageBucket: "portfolioproject-17fea.appspot.com",
        messagingSenderId: "974870010240"
    };
    firebase.initializeApp(config);
    
    var database = firebase.database();
    var myDBRef = database.ref();

    $('#button').on('click', function(event) {
        event.preventDefault();

        var userName = $('#name').val().trim();
        var userEmail = $('#email').val().trim();
        var userComment = $('#messageBox').val().trim(); 

        myDBRef.push().set({
            name: userName,
            email: userEmail,
            comment: userComment
        });

        $('#name').val('');
        $('#email').val('');
        $('#messageBox').val('');
    });

    myDBRef.on('value', function(snapshot) {
        console.log(snapshot);
    }, function(errorObject) {
        console.log('there was an error: ' + errorObject.code);
    });

    console.log('test');

});