const activity = require('../models/activities');
const addActivity = async (req, res) => {
    const { condition , activity } = req.body;

    try {
        const newActivity = new Activity({
           condition,
           activity
        });

        await newActivity.save();

        res.status(201).json({ msg: 'Activity added', activity: newActivity });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
const addAllActivities = async (req, res) => {
    const activities = req.body;

    try {
        const newActivities = await Activity.insertMany(activities);

        res.status(201).json({ msg: 'Activities added', activities: newActivities });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

const getActivities = async (req, res) => {
    try {
        const activities = await Activity.find();
        res.status(200).json({ activities });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

module.exports = { addActivity, addAllActivities, getActivities };
