import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './layoutList.html';
import '../../../api/layout/methods';
import { Layout } from '../../../api/layout/layout';


Template.layoutList.onCreated(function layoutListOnCreated() {
    const handler = Meteor.subscribe('layoutList');
    let handlerStatus = handler.ready();
    // console.log(`layoutList subscription is ready ${handlerStatus}`);
});

Template.layoutList.helpers({
    getLayoutList(p) {
        if (p) {
            return Layout.find({}, { buttons: {$exists: true}})    
        }
        return Layout.find();
    },
    getLayoutButtons() {
        return Layout.findOne();
    },
});

Template.layoutList.events({
    'click .add-button-to-layout'(e) {
        e.preventDefault();

        const buttonNameInput = document.getElementById("add-button-name");
        const buttonNameInputValue = buttonNameInput.value.trim();

        if (buttonNameInputValue.length > 0) {
            console.log('calling button');
            Meteor.call('layoutList.insertButton', buttonNameInputValue, (error) => {
                if (error) {
                    alert(error);
                } else {
                    buttonNameInput.value = '';
                }
            });
        }
    },
    'click .remove-all-buttons-from-layout'(e) {
        e.preventDefault();
        Meteor.call('layoutList.removeAllButtons', (error) => {
            if (error) {
                alert(error);
            } else {
                console.log('Layout buttons removed');
            }
        });
    }, 
});
