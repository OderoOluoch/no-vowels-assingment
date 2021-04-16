// $(selector).action();

$(document).ready(function() {

    //hide display div
    $("div.alert").hide();


    $(".play-form").submit(function(event) {
        
        // Getting the User Input
        let selectString = $("#selectString").val();  // Get from Input
        

        // Displaying the Values
        let results = replaceVowels(selectString)
        $("#results").text(results);
      
        //Display hidden div
        $("div.alert").show();

        event.preventDefault();
    })

})


function replaceVowels(str) {
    let newString = '';
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; //Vowels array.
    for (let i = 0; i < vowels.length; i++) {
        newString = str.split(vowels[i]).join("-"); //Trick to use instead of replace(), since replace() uses regex.
        str = newString; //Pass the new string as the string to be operated on by split() and join().
    }
    return newString;
}


$('#something').click(function() {
    location.reload();
});

