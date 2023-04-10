const Object = require('../models/Object');

class objectController {

    async add(req, res) {
        try {
            const obj = await Object.findOne(req.body);
            if (obj) {
                return res.status(400).json({message: "Уже существует"});
            }
            const new_obj = new Object(req.body);
            await new_obj.save();
            return res.json({message: "Добавлено"});
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'Append error'});
        }
    }
    async getObject(req, res) {
        try {
            const obj_id = req.params.id;
            const obj = await Object.findOne({_id: obj_id});

            if (!obj) {
                return res.status(400).json({message: "Объект не найден"});
            }
            return res.json(obj);

        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'Ошибка поиска объекта по ID'});
        }
    }

    async getAll(req, res) {
        try {
            const objs = await Object.find();

            res.json(objs);
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'Ошибка получения объектов'});
        }
    }

    async updateObject(req, res) {
        try {
            const obj_id = req.params.id;

            const obj = await Object.findOne({_id: obj_id});
            if (!obj) {
                return res.status(400).json({message: "Объект не найден"});
            }

            const new_obj = await Object.findOneAndUpdate(
                {_id: obj_id},  //filter
                req.body, //data to update
                { //options
                    returnNewDocument: true,
                    new: true,
                    strict: false
                }
            );

            await new_obj.save();

            return res.json(new_obj);

        } catch (e) {
            console.log(e);
        }
    }

    async deleteObject(req, res) {
        try {
            const obj_id = req.params.id;
            console.log(obj_id);
            const obj = await Object.findOne({_id: obj_id});

            if (!obj) {
                return res.status(400).json({message: "Объект не найден"});
            }

            await Object.deleteOne({_id: obj_id});

            return res.json({message: "Объект удален"});
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new objectController();
