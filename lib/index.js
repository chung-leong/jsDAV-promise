'use strict';

var jsDAVFile = require("../jsDAV/lib/DAV/file");
var jsDAVCollection = require("../jsDAV/lib/DAV/collection");
 
exports.File = jsDAVFile.extend({
    get: function(callback) {
        if (this.getAsync) {
            this.getAsync().then(function(buffer) {
                callback(null, buffer);
            }).catch(function(err) {
                callback(err);
            });
        } else {
            jsDAVFile.get.apply(this, arguments);
        }
    },

    put: function(data, type, callback) {
        if (this.putAsync) {
            this.putAsync(data, type).then(function(etag) {
                callback(null, etag);
            }).catch(function(err) {
                callback(err);
            });
        } else {
        }
    },
    
    delete: function(callback) {
        if (this.deleteAsync) {
            this.deleteAsync().then(function() {
                callback(null);
            }).catch(function(err) {
                callback(err);
            });
        } else {
        }
    },
                         
    getSize: function(callback) {
        if (this.getSizeAsync) {
            this.getSizeAsync().then(function(size) {
                callback(null, size);
            }).catch(function(err) {
                callback(err);
            });
        } else {
        }
    },
    
    getETag: function(callback) {
        if (this.getETagAsync) {
            this.getETagAsync().then(function(etag) {
                callback(null, etag);
            }).catch(function(err) {
                callback(err);
            });
        } else {
        }
    },

    getContentType: function(callback) {
        if (this.getContentTypeAsync) {
            this.getContentTypeAsync().then(function(type) {
                callback(null, type);
            }).catch(function(err) {
                callback(err);
            });
        } else {
        }
    },
    
    getLastModified: function(callback) {
        if (this.getLastModifiedAsync) {
            this.getLastModifiedAsync().then(function(date) {
                callback(null, date);
            }).catch(function(err) {
                callback(err);
            });
        } else {
        }
    },
});

exports.Collection = jsDAVCollection.extend(
{
    getChildren: function(callback) {
        if (this.getChildrenAsync) {
            this.getChildrenAsync().then(function(list) {
                callback(null, list);
            }).catch(function(err) {
                callback(err);
            });
        } else {
        }
    },
    
    getChild: function(name, callback) {
        if (this.getChildAsync) {
            this.getChildAsync(name).then(function(child) {
                callback(null, child);
            }).catch(function(err) {
                callback(err);
            });
        } else {
        }
    },
    
    childExists: function(name, callback) {
        if (this.childExistsAsync) {
            this.childExistsAsync(name).then(function(state) {
                callback(null, state);
            }).catch(function(err) {
                callback(err);
            });
        } else {
        }
    },
    
    createFile: function(name, data, type, callback) {
        if (this.createFileAsync) {
            this.createFileAsync(name, data, type).then(function(state) {
                callback(null, state);
            }).catch(function(err) {
                callback(err);
            });
        } else {
        }
    }
});