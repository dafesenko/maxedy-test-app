import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { DocumentDefinition } from './documentDefinition';

Meteor.methods({
    'ddList.insert'(data) {
        const {label, name, type} = data;

        check(label, String);
        check(name, String);
        check(type, String);

        console.log(label, name, type);
        return DocumentDefinition.insert(data);
    },
    'ddList.getDdList'() {
        // console.log('ddList.getDdList returns', DocumentDefinition.find());
        return DocumentDefinition.find();
    },
    'ddList.removeAll'() {
        return DocumentDefinition.remove({});
    },
});