import * as Fetch from 'node-fetch';
import IHeaders from './IHeaders';

/**
 * Fetch headers.
 */
export default class Headers extends Fetch.Headers implements IHeaders {}
