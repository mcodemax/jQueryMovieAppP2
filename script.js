let movID = 0;

$('#submit').on('click', function(e) {
    e.preventDefault();


    const movie = $('#movie').val();
    const rating = $('#rating').val();
    
    $('ul').append(`<li>${movie}, RATING: ${rating}<button id=${movID}>DELETE</button></li>`);
    

    //add event handler on specific del using its id
    const movieIdSelector = '#' + movID;
    $(movieIdSelector).on('click', deleteListing);

    
    console.log(movie, rating)

    movID++;
});

function deleteListing(){
    $(this).parent('li').remove();
}


/*

$('#submit').on('click', () => {
    console.log($(this)); //gives window obj
    $('body').append('<li></li>');
});

*/