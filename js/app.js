var bower_grunt = {
    
    // Application Constructor
    initialize: function() {
        alert("test");
        this.bindEvents();
    },
    // Bind Event Listeners
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('DOMContentLoaded', this.receivedEvent, false);
    },
    receivedEvent: function() {
        console.log("receivedEvent");
    }
};

bower_grunt.initialize();
    