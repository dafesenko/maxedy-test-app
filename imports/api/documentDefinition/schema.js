import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({
    _id: {
        type: String,
        label: "ID",
        optional: true
    },
    label: String,
    name: String,
    type: String,
    maxLength: {
        type: Number,
        label: "Max Length",
        optional: true
    },
});