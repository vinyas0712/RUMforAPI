document.addEventListener('DOMContentLoaded', function() {
    var ajax = [
        'https://jsonplaceholder.typicode.com/todosdsds/1',
        'https://portal.catchpoint.com/m/g',
        'https://jsonplaceholder.typicode.com/todos/2',
        'https://jsonplaceholder.typicode.com/todos/3',
        'https://dummyjson.com/products/1',
        'https://dummyjson.com/products/2',
        'https://dummyjson.com/products/3',
        'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap'
    ];

    function makeAjaxCall() {
        ajax.forEach((a) => {
            fetch(a)
            .then(x => console.log(x))
            .catch(error => console.error('Error:', error)); // Added error handling
        });
    }

    const button = document.getElementById('button');
    button.addEventListener('click', function() {
        makeAjaxCall();    
    });

    function jsErrorFunc() {
        console.log('function called')
        throw new Error('test error');
    };

    const button1 = document.getElementById('button1');
    button1.addEventListener('click', function() {
        jsErrorFunc();    
    });

    function promiseErrorFunc() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(x => console.log(a))
            .catch(error => console.error('Error:', error)); // Added error handling
    };

    const button2 = document.getElementById('button2');
    button2.addEventListener('click', function() {
        promiseErrorFunc();    
    });

    function addingNELHeader() {
        fetch('https://jsonplaceholder.typicode.com/tdsdododss/dds/ds', {
            headers: {
                "Report-To": {"group":"network-errors","max_age":2592000,"endpoints":[{"url":"https://r.3gl.net/hawklogserver/91649/re.p"}]},
                "NEL": {"report_to":"network-errors","max_age":2592000,"success_fraction":0,"failure_fraction":1.0, "include_subdomains": true}
            }
        })
        .then(response => response.json())
        .then(x => console.log(a))
        .catch(error => console.error('Error:', error)); // Added error handling
    }

    const button3 = document.getElementById('nel-btn');
    button3.addEventListener('click', function() {
        addingNELHeader();    
    });

    // Error Simulation Functions
    document.getElementById('simulate404').addEventListener('click', function() {
        console.log('Simulate 404 button clicked'); // Log button click
        fetch('https://example.com/nonexistent')
            .then(response => {
                if (!response.ok) {
                    throw new Error('404 Not Found');
                }
                return response.json();
            })
            .catch(error => console.error('Error:', error));
    });

    document.getElementById('simulate300').addEventListener('click', function() {
        console.log('Simulate 300 button clicked'); // Log button click
        fetch('https://httpstat.us/300')
            .then(response => {
                if (response.status >= 300 && response.status < 400) {
                    throw new Error(`300 Series Error: ${response.status}`);
                }
                return response.json();
            })
            .catch(error => console.error('Error:', error));
    });
});
