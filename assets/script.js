$(document).ready(function () {
    $('#search').on('keyup', function () {
        console.log(1123);
    })

    data = [{
        no: 1,
        name: 'test',
        elo: 20,
        gender: 'Nam'
    },
    {
        no: 1,
        name: 'test',
        elo: 20,
        gender: 'Nam'
    }, {
        no: 1,
        name: 'test',
        elo: 20,
        gender: 'Nam'
    }
        , {
        no: 1,
        name: 'test',
        elo: 20,
        gender: 'Nam'
    }]

    const tbody = $('tbody');

    data.map((item, index) => {
        const tr = document.createElement('tr');

        $.each(item, function (key, value) {
            const td = document.createElement('td');
            td.textContent = value; // Set the content for each <td>
            tr.appendChild(td); // Append <td> to <tr>
        });

        tbody.append(tr);
    });
});