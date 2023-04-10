const Group = require('../models/Group')

class groupController {

    async add(req, res) {
        try {
            const group = await Group.findOne(req.body)
            if (group) {
                return res.status(400).json({message: "Уже существует"})
            }
            const new_group = new Group(req.body)
            await new_group.save()
            return res.json({message: "Добавлено"})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Append error'})
        }
    }
    async getGroup(req, res) {
        try {
            const group = await Group.findOne({_id: req.params.id})

            if (!group) {
                return res.status(400).json({message: "Не найдено"})
            }
            return res.json(group)

        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Ошибка поиска по ID'})
        }
    }

    async getAll(req, res) {
        try {
            const groups = await Group.find()
            // const obj = Object({"1", "1"})
            // костыль на создание одного объекта!!!!
            res.json(groups)
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Ошибка получения'})
        }
    }


    async updateGroup(req, res) {
        try {
            const group_id = req.params.id;

            const group = await Group.findOne({_id: group_id});
            if (!group) {
                return res.status(400).json({message: "Объект не найден"});
            }

            const new_group = await Group.findOneAndUpdate(
                {_id: group_id},  //filter
                req.body, //data to update
                { //options
                    returnNewDocument: true,
                    new: true,
                    strict: false
                }
            );

            await new_group.save();

            return res.json(new_group);

        } catch (e) {
            console.log(e);
        }
    }

    async deleteGroup(req, res) {
        try {
            const group_id = req.params.id
            console.log(group_id)
            const group = await Group.findOne({_id: group_id})

            if (!group) {
                return res.status(400).json({message: "Не найден"})
            }

            await Group.deleteOne({_id: group_id})

            return res.json({message: "Удален"})
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new groupController();
