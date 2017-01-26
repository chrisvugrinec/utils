var appRouter = function(app) {
var redis = require("redis");

var client= redis.createClient(6380,'rcache1.redis.cache.windows.net', {auth_pass:process.env.REDIS_PASSWORD, tls: {servername: 'rcache1.redis.cache.windows.net'}});


  // BROADCAST MESSAGE
  // params: 1 = from, 2 = message
  app.get("/build", function(req, res) {
    //res.setHeader('Access-Control-Allow-Origin', 'http://msbf.datalinks.nl:8080');
    var result = {
        "from": req.query.from
    }
    console.log("message send by: "+req.query.from );
    client.publish("MSBUDDYFINDER_BROADCAST", JSON.stringify(result));
    return res.send("BROADCAST OK");
  });
}

module.exports = appRouter;
                                                            
