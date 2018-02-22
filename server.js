import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000;
const app = express();

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/TributePage', express.static(path.join(__dirname+ '/TributePage')));
app.use('/RandomQuoteGenerator', express.static(path.join(__dirname+ '/RandomQuoteGenerator')));
app.use('/LocalWeather', express.static(path.join(__dirname+ '/LocalWeather')));

app.listen(port, function(err){
    if(err){
      console.log(err);
    } else {
      open("localhost:" + port);
    }
})
  