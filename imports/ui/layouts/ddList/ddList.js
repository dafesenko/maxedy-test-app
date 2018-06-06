import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './ddList.html';
import '../../../api/documentDefinition/methods';
import { DocumentDefinition } from '../../../api/documentDefinition/documentDefinition';


Template.ddList.onCreated(function ddListOnCreated(){
    const handler = Meteor.subscribe('ddList');
    let handlerStatus = handler.ready();
    // console.log(`ddList subscription is ready ${handlerStatus}`);
});

Template.ddList.helpers({
    getDdList(p) {
        if (p) {
            return DocumentDefinition.find().count();    
        }
        return DocumentDefinition.find();
    }
});