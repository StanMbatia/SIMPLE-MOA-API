import { v4 } from 'uuid';
import trucks from "../models/trucks.model.js";
import * as TruckDto from "../dtos/trucksDtos.dto.js";
import logger from "../loggers.js";

// gettrucks
const gettrucks = async (req, res) => {
    try {

        let truck = {};

        if (req.query.id) {
            truck = await trucks.find({ truckId: req.query.id });
        }
        if (req.query.regNumber) {
            truck = await trucks.find({ regNumber: req.query.regNumber });
        }
        truck = await trucks.find();
        res.status(200).json(truck)
    }
    catch (error) {
        logger.error('Trucks not found', error);
        res.status(500).json({ message: error.message })
    }
};


//gettruck
const gettruck = async (req, res) => {
    try {
        const { id } = req.params;
        const truck = await truck.findById(id);
        res.status(200).json(truck);

    }
    catch (error) {
        logger.error('Truck not found', error);
        res.status(500).json({ message: error.message })
    }
};


//Create a truck
const createtruck = async (req, res, next) => {
    try {
        const data = req.body;
        const { error } = TruckDto.createTruckDto.validate(data);
        if (error) throw new Error(error.message);

        data.truckId = v4();
        const truck = await trucks.create(data);
        res.status(200).json({ message: 'Truck created successfully' }, truck);

    }
    catch (error) {
        logger.error('Truck not created', error);
        (res.status(500).json({ message: error.message }))
        // we might want to throw our own error
        //next(error);
    }
};


// update a truck
const updatetruck = async (req, res) => {
    try {

        const { id } = req.params;

        const truck = await trucks.findOne({ truckId: id });
        console.log({ truck })
        if (!truck) {
            logger.error('Truck not found', error)
            return res.status(404).json({ message: 'Truck not found' });
        }
        const updatedCapacity = Number(truck.currentCapacity || 0) + req.body.currentCapacity;

        const updatedtruck = await trucks.findOneAndUpdate({ truckId: truck.truckId }, { currentCapacity: updatedCapacity }, {
            new: true
        });
        res.status(200).json({ message: 'Truck updated successfully' }, updatedtruck);
    }
    catch (error) {
        logger.error('Truck not updated', error);
        res.status(500).json({ message: error.message });

    }
};


// delete a truck
const deletetruck = async (req, res) => {
    try {

        const { id } = req.params;

        const truck = await truck.findByIdAndDelete(id, req.body);

        if (!truck) {
            return res.status(404).json({ message: 'Truck not Found' });
        }
        return res.status(200).json({ message: 'Truck deleted successfully' });
    }
    catch (error) {
        logger.error('Truck not deleted', error);
        res.status(500).json({ message: error.message });
    }
};

export {
    gettrucks,
    gettruck,
    createtruck,
    updatetruck,
    deletetruck
};