const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')
const Role = require('../models/Role')

class RoleControllers {

    // get news
    index(req, res, next) {

        Role.find({})
            .then(roles => {

                res.render('lessor', {
                    roles: multipleMongooseToObject(roles)
                })
            })
            .catch(next)
    }


    show(req, res, next) {

        Role.findOne({ slug: req.params.slug })
            .then(roles => res.render('lessor/show', { roles: mongooseToObject(roles) }))
            .catch(next)

    }
    create(req, res, next) {
        Role.findOne({ slug: req.params.slug })
            .then(roles => res.render('lessor/create', { roles: mongooseToObject(roles) }))
            .catch(next)

    }


    store(req, res, next) {
        const formData = req.body
        formData.image = `${req.body.image}`
        const role = new Role(req.body)
        role.save()
            .then(() => res.redirect('/lessor'))
            .catch(error => {

            })
    }
    update(req, res, next) {
        Role.findById({ _id: req.params.id })
            .then(roles => res.render('lessor/update',
                { roles: mongooseToObject(roles) }
            ))
            .catch(next)
    }
    //PUT
    edit(req, res, next) {
        Role.updateMany({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/lessor/stores/post'))
            .catch(next)
    }

    //DELETE
    delete(req, res, next) {
        Role.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    search(req, res, next) {
        res.send(req.query.room)
        res.render('lessor/search')
        //const slug = req.body.slug
        // Role.find(
        //     { $text: { $search: "Horo 233" } },
        //     { score: { $meta: "textScore" } }
        // ).sort({ score: { $meta: "textScore" } }).limit(1)
        // var noMatch = null;
        // if (req.query.search) {
        //     const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        //     // Get all campgrounds from DB
        //     Role.find({ room: regex }, function (err, allRooms) {
        //         if (err) {
        //             console.log(err);
        //         } else {
        //             if (allRooms.length < 1) {
        //                 noMatch = "No campgrounds match that query, please try again.";
        //             }
        //             res.render("search/show", { campgrounds: allRooms, noMatch: noMatch });
        //         }
        //     });
        // } else {
        //     // Get all campgrounds from DB
        //     Role.find({}, function (err, allRooms) {
        //         if (err) {
        //             console.log(err);
        //         } else {
        //             res.render("search/show", { roles: allRooms, noMatch: noMatch });
        //         }
        //     });
        // }
    }
}
module.exports = new RoleControllers;