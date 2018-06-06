import { Mongo } from 'meteor/mongo';

import DocumentDefinitionSchema from './schema';

const DocumentDefinition = new Mongo.Collection('document_definition');

DocumentDefinition.attachSchema(DocumentDefinitionSchema);

export {DocumentDefinition};