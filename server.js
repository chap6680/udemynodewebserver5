const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
console.log(__dirname + '/public');

app.use(express.static(__dirname + '/public'));


hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
});

hbs.registerHelper('getAllCaps', (info) => {
	return info.toUpperCase();
});

app.use((req, res, next) => {
	res.render('maintenance.hbs', {
		pageTitle: 'working on it'
		// currentYear: new Date().getFullYear()
	});

	// couldnt really get next to work
	// next();
});


app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'Home Page',
		welcomeMessage: 'Welcome Here'
		// currentYear: new Date().getFullYear()
	});
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About Page'
		// currentYear: new Date().getFullYear()
	});
});



app.listen(port);
console.log(`Server listening on ${port}`);