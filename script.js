/*global $ */
/*jslint white: true, browser: true */

function remote(ms) {
    'use strict';
    console.log('start remote with ' + ms);
    return $.ajax({
        url: 'http://localhost:4210/sleep/' + ms,
        method: 'GET'
    }).then(function(data) {
        console.log('success ' + ms + ', ', data);
    }, function(data) {
        console.error('error ' + ms + ', ', data);
    });
}

$.when(remote(5001), remote(3000), remote(1000)).done(function(data) {
    'use strict';
    console.log('done waiting all: success', data);
}).fail(function(data) {
    'use strict';
    console.log('done waiting all: error', data);
});
