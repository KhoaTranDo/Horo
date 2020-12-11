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
            // .then(roles => { res.render('lessor', { roles: mongooseToObject(roles) }) })
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
        Role.findOne({ slug: req.query.slug })
            .then(roles => res.render('lessor/search', { roles: mongooseToObject(roles) }))
            // .then(roles => { res.render('lessor', { roles: mongooseToObject(roles) }) })
            .catch(next)
    }

}

module.exports = new RoleControllers;