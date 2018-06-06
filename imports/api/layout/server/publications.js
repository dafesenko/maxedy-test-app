import { Meteor } from 'meteor/meteor';

import { Layout } from '../layout';

Meteor.publish('layoutList',function layoutPublication() {
    return Layout.find();
});