var express = require('express');

var eventRouter = express.Router();

var mongodb = require('mongodb').MongoClient;

eventRouter.route('/')
    .get(function(req, res){
        
         var url = 'mongodb://localhost:27017/eventsApp';
        mongodb.connect(url, function(err, db){
            var collection = db.collection('events');
            collection.find({}).toArray(function(err, results){
                res.render('events', {
                list:['first event','2nd event', '3rd event'],
                  nav:[{ Link :'services', Text: 'Services'},
                  { Link :'portfolio', Text: 'Portfolio'},
                  { Link :'about', Text: 'About'},
                  { Link :'team', Text: 'Team'},
                  { Link :'contact', Text: 'Contact'},
                  { Link :'events', Text: 'Events'}
                ],
                events :results
            });
        });
    });
});

eventRouter.route('/:id')
    .get(function(req, res){
        var id = req.params.id;
           res.render('event', {
         list:['first event','2nd event', '3rd event'],
         nav:[{ Link :'services', Text: 'Services'},
              { Link :'portfolio', Text: 'Portfolio'},
              { Link :'about', Text: 'About'},
              { Link :'team', Text: 'Team'},
              { Link :'contact', Text: 'Contact'},
              { Link :'events', Text: 'Events'}
        ],
        events : eventsData[id]
    });    
});

module.exports = eventRouter;