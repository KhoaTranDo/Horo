var { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')
var UserModel = require('../models/User')


class AdminControllers {
    usersPost(req, res, next) {
        UserModel.find({}) //sử dụng lênh.find để list ra danh sách các document trong 1 collection
            .then(users => res.render('admin/userlist', { users: multipleMongooseToObject(users) })) // gọi nhiều doc 1 lần qua function multipleMongooseToObject('tên collection)
    }

    update(req, res, next) {
        UserModel.findById({ _id: req.params.id }) // Tìm kiếm id bằng lệnh .findByid, sau đó chọn đúng trường có id đó để vào trang update.hbs để chỉnh sửa dữ liệu trong 1 document
            .then(users => res.render('admin/update',
                { users: mongooseToObject(users) }
            ))
            .catch(next)
    }
    // Check id từ nút Sửa trong template HBS, xong sử dụng mongoose updatemany để sửa các trường dữ liệu
    edit(req, res, next) {
        UserModel.updateMany({ _id: req.params.id }, req.body) // select ID trong document và dùng req.body để chỉnh sửa dữ liệu trên text box
            .then(() => res.redirect('/admin/userlist')) // khi chạy update thành công sẽ quay về trang ds users
            .catch(next)
    }

}

module.exports = new AdminControllers