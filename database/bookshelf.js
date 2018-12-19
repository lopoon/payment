'use strict';

import {mapValues} from 'lodash';
import knex from './knex';


const bookshelf = require('bookshelf')(knex);

export const Transactions = bookshelf.Model.extend({
	tableName: 'transactions'
});
