$(document).ready(() => {
    $('#delete-article').on('click', function(e) {
        $target = $(e.target);
        const id = $target.attr('data-id');
        $.ajax({
            type: 'DELETE',
            url: '/articles/' + id,
            success: (response) => {
                alert('Deleting Article');
                window.location.href = '/';
            },
            error: (err) => {
                console.log(err)
            }
        })
    })
})

// console.log('This is a string')