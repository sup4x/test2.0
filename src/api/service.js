/**
 * @typedef {object} PersonGroup
 * @property {string} name
 * @property {Person[]} persons
 */
/**
 * @typedef {object} Person
 * @property {number} id
 * @property {string} name
 * @property {string} avatar
 * @property {string} position
 * @property {Comment[]} comments
 */
/**
 * @typedef {object} Comment
 * @property {number} id
 * @property {number} personId
 * @property {string} text
 * @property {string} createdAt
 */
/**
 * @typedef {object} ApiServiceOptions
 * @property {string} baseUrl
 */
export default class ApiService {
    /**
     * @param {ApiServiceOptions} options
     */
    constructor({ baseUrl = 'https://61adfd3ea7c7f3001786f510.mockapi.io/' } = {}) {
        this.options = { baseUrl };
    }
    /**
     * @returns {Promise.<PersonGroup[], Error>}
     */
    getPersonGroups() {
        // @TODO
        return Promise.resolve();
    }
    /**
     * @returns {Promise.<Person[], Error>}
     */
    getPersons() {
        const { baseUrl } = this.options;
        return fetch(`${baseUrl}/person`).then((r) => r.json());
    }
    /**
     * @returns {Promise.<Comment[], Error>}
     */
    getComments() {
        const { baseUrl } = this.options;
        return fetch(`${baseUrl}/comment`).then((r) => r.json());
    }
}
