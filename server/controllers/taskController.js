const Task = require('../models/Task')
class taskController {

    async add(req, res) {
        try {
            const task = await Task.findOne(req.body)
            if (task) {
                return res.status(400).json({message: "Уже существует"})
            }
            const new_task = new Task(req.body)
            await new_task.save()
            return res.json({message: "Добавлено"})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Append error'})
        }
    }
    async getTask(req, res) {
        try {
            const task = await Task.findOne({_id: req.body})

            if (!task) {
                return res.status(400).json({message: "Не найдено"})
            }
            return res.json(task)

        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Ошибка поиска по ID'})
        }
    }

    async getAll(req, res) {
        try {
            const tasks = await Task.find()
            // const obj = Object({"1", "1"})
            // костыль на создание одного объекта!!!!
            res.json(tasks)
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Ошибка получения'})
        }
    }


    async updateTask(req, res) {
        try {
            const task_id = req.params.id;

            const task = await Task.findOne({_id: task_id});
            if (!task) {
                return res.status(400).json({message: "Не найден"});
            }

            const new_task = await Task.findOneAndUpdate(
                {_id: task_id},  //filter
                req.body, //data to update
                { //options
                    returnNewDocument: true,
                    new: true,
                    strict: false
                }
            );

            await new_task.save();

            return res.json(new_task);

        } catch (e) {
            console.log(e);
        }
    }

    async deleteTask(req, res) {
        try {
            const task_id = req.params.id
            console.log(task_id)
            const obj = await Task.findOne({_id: task_id})

            if (!obj) {
                return res.status(400).json({message: "Не найден"})
            }

            await Task.deleteOne({_id: task_id})

            return res.json({message: "Удален"})
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new taskController();
