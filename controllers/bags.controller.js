import { v4 } from "uuid";
import bags from "../models/bags.model.js";
import BagDto from "../dtos/bagDtos.dtos.js";
import logger from "../loggers.js";


// getbags
const getbags = async (req, res) => {
    try {
        const bag = await bag.find(req.body);
        res.status(200).json(bag);

    }
    catch (error) {
        logger.error('Bags not found', error);
        res.status(500).json({ message: error.message })
    }
};


//getbag
const getbag = async (req, res) => {
    try {
        const { id } = req.params;
        const bag = await bag.findById(id);
        res.status(200).json(bag);

    }
    catch (error) {
        logger.error('Bag not found', error);
        res.status(500).json({ message: error.message })
    }
};


//Create a bag
const createbag = async (req, res) => {
    try {
        const data = req.body;
        const { error } = BagDto.validate(data);
        if (error) throw new Error(error.message);

        data.bagId = v4();
        const bag = await bags.create(data);
        res.status(200).json(bag, { message: 'Bag created successfuly' });
    }
    catch (error) {
        // do some other stuff like logging it throwing a new soft error
        logger.error('Bag not created', error);
        res.status(400).json({ message: error.message });
        //throw error;
    }
};


// update a bag
const updatebag = async (req, res) => {
    try {

        const { id } = req.params;

        const bag = await bag.findByIdAndUpdate(id, req.body);

        if (!bag) {
            return res.status(404).json({ message: 'Product not found' });
        }
        const updatedbag = await bag.findById(id);
        res.status(200).json(updatedbag, { message: 'Bag updated successfully' });
    }
    catch (error) {
        logger.error('Bag not updated', error);
        res.status(500).json({ message: error.message });

    }
};


// delete a bag
const deletebag = async (req, res) => {
    try {

        const { id } = req.params;

        const bag = await bag.findByIdAndDelete(id, req.body);

        if (!bag) {
            return res.status(404).json({ message: 'Bag not Found' });
        }
        return res.status(200).json('Bag deleted successfully');
    }
    catch (error) {
        logger.error('Bag not deleted', error);
        res.status(500).json({ message: error.message });
    }
};

export {
    getbags,
    getbag,
    createbag,
    updatebag,
    deletebag
}