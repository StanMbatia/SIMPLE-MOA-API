import mongoose from "mongoose";

const truckSchema = mongoose.Schema(
    {
        truckId: {
            type: String,
            required: [true, 'Enter the truckId'],
        },
        regNumber: {
            type: String,
            required: [true, 'Enter the RegNumber'],
        },
        currentCapacity: {
            type: Number,
            required: false,
            default: 0
        },
        driver: {
            type: String,
            required: [true, 'Enter Driver name'],
        },
        destination: {
            type: String,
            required: [true, 'Enter Destination'],
        },
        maximumLoad: {
            type: Number,
            required: true,
        }

    }
)

const Truck = mongoose.model('Truck', truckSchema);

export default Truck;
