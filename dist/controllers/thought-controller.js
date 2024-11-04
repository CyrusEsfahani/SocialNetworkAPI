import { thought, user } from '../models/index.js';
export const getThoughts = async (_req, res) => {
    try {
        const dbThoughtData = await thought.find()
            .sort({ createdAt: -1 });
        return res.json(dbThoughtData);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
export const getSingleThought = async (req, res) => {
    try {
        const dbThoughtData = await thought.findOne({ _id: req.params.thoughtId });
        if (!dbThoughtData) {
            return res.status(404).json({ message: 'No thought with this id!' });
        }
        return res.json(dbThoughtData);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
export const createThought = async (req, res) => {
    try {
        const dbThoughtData = await thought.create(req.body);
        const dbUserData = await user.findOneAndUpdate({ username: req.body.username }, { $push: { thoughts: dbThoughtData._id } }, { new: true });
        if (!dbUserData) {
            return res.status(404).json({ message: 'Thought created but no user with this id!' });
        }
        return res.json({ message: 'Thought successfully created!' });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
export const updateThought = async (req, res) => {
    try {
        const dbThoughtData = await thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body }, { runValidators: true, new: true });
        if (!dbThoughtData) {
            return res.status(404).json({ message: 'No thought with this id!' });
        }
        return res.json(dbThoughtData);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
export const deleteThought = async (req, res) => {
    try {
        const dbThoughtData = await thought.findOneAndDelete({ _id: req.params.thoughtId });
        if (!dbThoughtData) {
            return res.status(404).json({ message: 'No thought with this id!' });
        }
        const dbUserData = await user.findOneAndUpdate({ thoughts: req.params.thoughtId }, { $pull: { thoughts: req.params.thoughtId } }, { new: true });
        if (!dbUserData) {
            return res.status(404).json({ message: 'Thought created but no user with this id!' });
        }
        return res.json({ message: 'Thought successfully deleted!' });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
export const addReaction = async (req, res) => {
    try {
        const dbThoughtData = await thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $addToSet: { reactions: req.body } }, { runValidators: true, new: true });
        if (!dbThoughtData) {
            return res.status(404).json({ message: 'No thought with this id!' });
        }
        return res.json(dbThoughtData);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
export const removeReaction = async (req, res) => {
    try {
        const dbThoughtData = await thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $pull: { reactions: { reactionId: req.params.reactionId } } }, { runValidators: true, new: true });
        if (!dbThoughtData) {
            return res.status(404).json({ message: 'No thought with this id!' });
        }
        return res.json(dbThoughtData);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
