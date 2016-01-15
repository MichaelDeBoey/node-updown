# node-updown
A simple Node.js API wrapper for [updown.io](http://updown.io)

# Usage
Simply create a new Updown instance:
```javascript
Updown = require('node-updown');
var ud = new Updown('api_key');
```

All methods in the Updown class return promises.

## Methods
For more information on the various API endpoints, see the [Updown API documentation](https://updown.io/api)

#### getChecks()
Gets all checks
```javascript
ud.getChecks().then(function(checks) {
    console.log(checks);
});
```

#### getCheckDowntime(token [, page])
Gets downtime information for a check.
```javascript
ud.getCheckDowntime('check_token').then(function(downtime) {
    console.log(downtime);
});
```

#### getCheckMetrics(token [, from][, to][, sortByTime])
Gets all metrics for a check. Parameters `from` and `to` are timestamps in milliseconds (e.g. from `Date.getTime()`).
```javascript
ud.getCheckMetrics('check_token').then(function(metrics) {
    console.log(metrics);
});
```

#### addCheck (url [, interval][, name])
Adds a new check. Parameter `interval` can be 30, 60, 120, 300 or 600.
```javascript
ud.addCheck('http://example.com', 300).then(function(newCheck) {
    console.log(newCheck);
});
```

## Issues
If you have any problems or questions, just create an issue and I will take a look at it asap.