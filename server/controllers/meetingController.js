const Meeting = require('../models/Meeting')
const Group = require("../models/Group");

class meetingController {

    async add(req, res) {
        try {
            const meeting = await Meeting.findOne(req.body)
            if (meeting) {
                return res.status(400).json({message: "Уже существует"})
            }
            const new_meeting = new Meeting(req.body)
            await new_meeting.save()
            return res.json({message: "Добавлено"})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Append error'})
        }
    }
    async getMeeting(req, res) {
        try {
            const meeting = await Meeting.findOne({_id: req.params.id})

            if (!meeting) {
                return res.status(400).json({message: "Не найдено"})
            }
            return res.json(meeting)

        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Ошибка поиска по ID'})
        }
    }

    async getAll(req, res) {
        try {
            const meetings = await Meeting.find()
            // const obj = Object({"1", "1"})
            // костыль на создание одного объекта!!!!
            res.json(meetings)
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Ошибка получения'})
        }
    }


    // В РАЗРАБОТКЕ!!!
    async updateMeeting(req, res) {
        try {
            const meeting_id = req.params.id;

            const meeting = await Meeting.findOne({_id: meeting_id});
            if (!meeting) {
                return res.status(400).json({message: "Объект не найден"});
            }

            const new_meeting = await Meeting.findOneAndUpdate(
                {_id: meeting_id},  //filter
                req.body, //data to update
                { //options
                    returnNewDocument: true,
                    new: true,
                    strict: false
                }
            );

            await new_meeting.save();

            return res.json(new_meeting);

        } catch (e) {
            console.log(e);
        }
    }

    async deleteMeeting(req, res) {
        try {
            const meeting_id = req.params.id
            console.log(meeting_id)
            const meeting = await Meeting.findOne({_id: meeting_id})

            if (!meeting) {
                return res.status(400).json({message: "Не найден"})
            }

            await Meeting.deleteOne({_id: meeting_id})

            return res.json({message: "Удален"})
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new meetingController();
