# Menyoo

## Overview
The objective of this project is to unify the way that menus look and to provide data for each restaurant given using a user platform. [Click here](https://menyoo-1.herokuapp.com/) for project.

## Wireframe
The process of going through the website is shown in the image below.

![Wireframe](/public/assets-1/wireframe2.png)

Anyone should be able to access all points of the website except the points for editing and adding components. The first page will be going to a search bar that will allow searches based on the restaurant name as well as location. Once submitted, the page will direct you to a search page with all the restaurants within your search. You can go into restaurants and find out the details about the restaurant. There will be a menu option that will allow you to find all the foods that are within the restaurant. 

## Entity-Relation Model
![ERD](/public/assets-1/ERD.png)
The entity-relation model (ERD) shows the relations between all the models created. 

## Applications Used

* `JavaScript Vanila`
* `EJS`
* `node.js`
* `CSS`
* `Heroku`

## Website Views Examples
![Search](/public/assets-1/unnamed.png)

![Restaurant List](/public/assets-1/unnamed2.png)

![Restaurant](/public/assets-1/unnamed3.png)

## Code Snippets

### CRUD
#### CREATE
```js
router.get('/new', isLoggedIn, function (req, res) {
    res.render('pages/restaurant/new');
});

router.post('/', isLoggedIn, function(req, res) {
    console.log('SUBMITTED FORM', req.body);
    restaurant.create({
        name: req.body.name,
        mon: req.body.mon,
        tue: req.body.tue,
        wed: req.body.wed,
        thu: req.body.thu,
        fri: req.body.fri,
        sat: req.body.sat,
        sun: req.body.sun,
        area: req.body.area,
        three: req.body.three,
        four: req.body.four,
        description: req.body.description,
        location: req.body.location,
        verified: false,
        price: req.body.price
    })
    .then(function(newRestaurant) {
        console.log('NEW RESTAURANT', newRestaurant.toJSON());
        newRestaurant = newRestaurant.toJSON();
        res.redirect(`restaurant/${newRestaurant.id}`);
    })
    .catch(function(err) {
        console.log('THERE IS AN ERROR', err);
        res.render('404', { message: 'Restaurant not created. Try again.' });
    })
})
```

#### READ
```js
router.get('/', function (req, res) {
    restaurant.findAll()
    .then(function(restaurantList) {
        console.log('FOUND ALL RESTAURANTS', restaurantList);
        res.render('pages/restaurant/index', { restaurants: restaurantList });
    })
    .catch(function(err) {
        console.log('ERROR', err);
        res.render('404', { message: 'There is an error finding restaurants. Try again. '})
    })
})
```

#### UPDATE
```js
router.put('/:id', function(req, res) {
    console.log('EDIT FORM DATA', req.body);
    let restaurantIndex = Number(req.params.id);
    restaurant.update({
        name: req.body.name,
        mon: req.body.mon,
        tue: req.body.tue,
        wed: req.body.wed,
        thu: req.body.thu,
        fri: req.body.fri,
        sat: req.body.sat,
        sun: req.body.sun,
        description: req.body.description,
        location: req.body.location,
        price: req.body.price
    }, {
        where: { id: restaurantIndex }
    })
    .then(function(response) {
        console.log('RESTAURANT IS UPDATED', response);
        res.redirect(`/restaurant/${restaurantIndex}`);
    })
    .catch(function(err) {
        console.log('ERROR', err);
        res.render('404', { message: 'Update was not successful. Please try again' });
    })
})
```

#### DELETE

````js
// DELETE
// router.delete('/:id', function(req, res) {
//     let restaurantIndex = Number(req.params.id);
//     restaurant.destroy({
//         where: { id: restaurantIndex }
//     })
//     .then(function(response) {
//         console.log('DELETED', response);
//         res.redirect('/restaurants');
//     })
//     .catch(function(err) {
//         console.log('ERROR', err);
//     })
// });
````

#### Search Bar
```js
router.post('/', function (req, res) {
    let name = req.body.name;
    let location = req.body.location;
    restaurant.findAll({
        where: {
                name: {[Op.iLike]: '%' + name + '%'} ,
                location: {[Op.iLike]: '%' + location + '%'}
        }
    })
    .then(function(restaurants) {
        console.log('RESULTS ARE', restaurants);
        res.render('pages/restaurant/index', { restaurants });
    })
    .catch(function(err) {
        console.log('ERROR', err);
        res.render('404', { message: 'There is a problem with the search. Please Try again' });
    })
});
```