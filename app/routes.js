module.exports = function(app, streams) {

  // GET home 
  var index = function(req, res) {
    res.render('index', { 
                          title: 'JamStrands', 
                          header: 'JamStrands',
                          username: 'Username',
                          share: '',
                          footer: 'Copyright 2016 PocketNerds.',
                          id: req.params.id
                        });
  };
  
  var records = function(req, res) {
    res.render('records', { 
                          title: 'JamStrands', 
                          header: 'JamStrands',
                          username: 'Username',
                          share: '',
                          footer: 'Copyright 2016 PocketNerds.',
                          
                        });
  };

  // GET streams as JSON
  var displayStreams = function(req, res) {
    var streamList = streams.getStreams();
    // JSON exploit to clone streamList.public
    var data = (JSON.parse(JSON.stringify(streamList))); 

    res.status(200).json(data);
  };

  app.get('/records', records);
  app.get('/streams.json', displayStreams);
  app.get('/', index);
  app.get('/:id', index);
  
}

