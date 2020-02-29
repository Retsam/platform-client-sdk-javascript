import ApiClient from '../ApiClient.js';


class AuditApi {
	/**
	 * Audit service.
	 * @module purecloud-platform-client-v2/api/AuditApi
	 * @version 72.0.0
	 */

	/**
	 * Constructs a new AuditApi. 
	 * @alias module:purecloud-platform-client-v2/api/AuditApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Get status of audit query execution
	 * 
	 * @param {String} transactionId Transaction ID
	 */
	getAuditsQueryTransactionId(transactionId) { 
		// verify the required parameter 'transactionId' is set
		if (transactionId === undefined || transactionId === null) {
			throw 'Missing the required parameter "transactionId" when calling getAuditsQueryTransactionId';
		}

		return this.apiClient.callApi(
			'/api/v2/audits/query/{transactionId}', 
			'GET', 
			{ 'transactionId': transactionId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get results of audit query
	 * 
	 * @param {String} transactionId Transaction ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 */
	getAuditsQueryTransactionIdResults(transactionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'transactionId' is set
		if (transactionId === undefined || transactionId === null) {
			throw 'Missing the required parameter "transactionId" when calling getAuditsQueryTransactionIdResults';
		}

		return this.apiClient.callApi(
			'/api/v2/audits/query/{transactionId}/results', 
			'GET', 
			{ 'transactionId': transactionId }, 
			{ 'cursor': opts['cursor'],'pageSize': opts['pageSize'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Create audit query execution
	 * 
	 * @param {Object} body query
	 */
	postAuditsQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAuditsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/audits/query', 
			'POST', 
			{  }, 
			{  }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

}


export default AuditApi;