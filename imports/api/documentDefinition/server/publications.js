import { Meteor } from 'meteor/meteor';

import { DocumentDefinition } from '../documentDefinition';

Meteor.publish('ddList', function documentDefinitionPublication() {
    return DocumentDefinition.find();
});