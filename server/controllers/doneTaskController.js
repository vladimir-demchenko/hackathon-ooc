const DoneTask = require('../models/DoneTask')
const Object = require("../models/Object");

class doneTaskController {
    async add(req, res) {
        try {
            const task = await DoneTask.findOne(req.body)
            if (task) {
                return res.status(400).json({message: "Уже существует"})
            }
            const new_task = new DoneTask(req.body)
            await new_task.save()
            return res.json({message: "Добавлено"})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Append error'})
        }
    }
    async getTask(req, res) {
        try {
            const task = await DoneTask.findOne({_id: req.params.id})

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
            const tasks = await DoneTask.find()

            res.json(tasks)
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Ошибка получения'})
        }
    }

    async updateDoneTask(req, res) {
        try {
            const task_id = req.params.id;

            const task = await DoneTask.findOne({_id: task_id});
            if (!task) {
                return res.status(400).json({message: "Не найден"});
            }

            const new_task = await DoneTask.findOneAndUpdate(
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
            const obj = await DoneTask.findOne({_id: task_id})

            if (!obj) {
                return res.status(400).json({message: "Не найден"})
            }

            await DoneTask.deleteOne({_id: task_id})

            return res.json({message: "Удален"})
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new doneTaskController()
