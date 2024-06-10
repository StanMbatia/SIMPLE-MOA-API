import mongoose from "mongoose";

const BagSchema = mongoose.Schema(
    {
        bagId: {
            type: 'String',
            required: [true, 'Enter BagId'],
        },
        destination: {
            type: 'String',
            require: [true, 'Enter Destination'],
        },
        weight: {
            type: 'Number',
            required: true,
            default: 0,
        },
        units: {
            type: 'String',
            required: true,
            enum: ['kgs', 'lbs'],
        },
        truckId: {
            type: 'String',
            required: [true, 'Enter truckId'],
        }
    }
)

const Bag = mongoose.model('Bag', BagSchema);
export default Bag;
