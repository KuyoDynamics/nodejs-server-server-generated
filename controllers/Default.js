'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.accountsAccountIdAccountnameGET = function accountsAccountIdAccountnameGET (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var accountId = req.swagger.params['accountId'].value;
  Default.accountsAccountIdAccountnameGET(date,accountId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountIdBalanceGET = function accountsAccountIdBalanceGET (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var accountId = req.swagger.params['accountId'].value;
  Default.accountsAccountIdBalanceGET(date,accountId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountIdBillsBillReferencePaymentsPOST = function accountsAccountIdBillsBillReferencePaymentsPOST (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var xCorrelationID = req.swagger.params['X-CorrelationID'].value;
  var accountId = req.swagger.params['accountId'].value;
  var billReference = req.swagger.params['billReference'].value;
  var requestBillPayment = req.swagger.params['requestBillPayment'].value;
  Default.accountsAccountIdBillsBillReferencePaymentsPOST(date,xCorrelationID,accountId,billReference,requestBillPayment)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountIdBillsGET = function accountsAccountIdBillsGET (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var accountId = req.swagger.params['accountId'].value;
  Default.accountsAccountIdBillsGET(date,accountId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountIdDebitmandatesDebitMandateReferenceGET = function accountsAccountIdDebitmandatesDebitMandateReferenceGET (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var accountId = req.swagger.params['accountId'].value;
  var debitMandateReference = req.swagger.params['debitMandateReference'].value;
  Default.accountsAccountIdDebitmandatesDebitMandateReferenceGET(date,accountId,debitMandateReference)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountIdDebitmandatesDebitMandateReferencePATCH = function accountsAccountIdDebitmandatesDebitMandateReferencePATCH (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var xCorrelationID = req.swagger.params['X-CorrelationID'].value;
  var accountId = req.swagger.params['accountId'].value;
  var debitMandateReference = req.swagger.params['debitMandateReference'].value;
  var patch = req.swagger.params['patch'].value;
  Default.accountsAccountIdDebitmandatesDebitMandateReferencePATCH(date,xCorrelationID,accountId,debitMandateReference,patch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountIdDebitmandatesPOST = function accountsAccountIdDebitmandatesPOST (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var xCorrelationID = req.swagger.params['X-CorrelationID'].value;
  var accountId = req.swagger.params['accountId'].value;
  var requestDebitMandate = req.swagger.params['requestDebitMandate'].value;
  Default.accountsAccountIdDebitmandatesPOST(date,xCorrelationID,accountId,requestDebitMandate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountIdLinksLinkReferenceGET = function accountsAccountIdLinksLinkReferenceGET (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var accountId = req.swagger.params['accountId'].value;
  var linkReference = req.swagger.params['linkReference'].value;
  Default.accountsAccountIdLinksLinkReferenceGET(date,accountId,linkReference)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountIdLinksLinkReferencePATCH = function accountsAccountIdLinksLinkReferencePATCH (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var xCorrelationID = req.swagger.params['X-CorrelationID'].value;
  var accountId = req.swagger.params['accountId'].value;
  var linkReference = req.swagger.params['linkReference'].value;
  var patch = req.swagger.params['patch'].value;
  Default.accountsAccountIdLinksLinkReferencePATCH(date,xCorrelationID,accountId,linkReference,patch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountIdLinksPOST = function accountsAccountIdLinksPOST (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var xCorrelationID = req.swagger.params['X-CorrelationID'].value;
  var accountId = req.swagger.params['accountId'].value;
  var requestLink = req.swagger.params['requestLink'].value;
  Default.accountsAccountIdLinksPOST(date,xCorrelationID,accountId,requestLink)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountIdStatemententriesGET = function accountsAccountIdStatemententriesGET (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var accountId = req.swagger.params['accountId'].value;
  Default.accountsAccountIdStatemententriesGET(date,accountId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountIdStatusGET = function accountsAccountIdStatusGET (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var accountId = req.swagger.params['accountId'].value;
  Default.accountsAccountIdStatusGET(date,accountId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsAccountIdTransactionsGET = function accountsAccountIdTransactionsGET (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var accountId = req.swagger.params['accountId'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var fromDateTime = req.swagger.params['fromDateTime'].value;
  var toDateTime = req.swagger.params['toDateTime'].value;
  Default.accountsAccountIdTransactionsGET(date,accountId,limit,offset,fromDateTime,toDateTime)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsMsisdnMsisdnAccountnameGET = function accountsMsisdnMsisdnAccountnameGET (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var msisdn = req.swagger.params['msisdn'].value;
  Default.accountsMsisdnMsisdnAccountnameGET(date,msisdn)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsMsisdnMsisdnBalanceGET = function accountsMsisdnMsisdnBalanceGET (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var msisdn = req.swagger.params['msisdn'].value;
  Default.accountsMsisdnMsisdnBalanceGET(date,msisdn)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsMsisdnMsisdnBillsBillReferencePaymentsPOST = function accountsMsisdnMsisdnBillsBillReferencePaymentsPOST (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var xCorrelationID = req.swagger.params['X-CorrelationID'].value;
  var msisdn = req.swagger.params['msisdn'].value;
  var billReference = req.swagger.params['billReference'].value;
  var requestBillPayment = req.swagger.params['requestBillPayment'].value;
  Default.accountsMsisdnMsisdnBillsBillReferencePaymentsPOST(date,xCorrelationID,msisdn,billReference,requestBillPayment)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsMsisdnMsisdnBillsGET = function accountsMsisdnMsisdnBillsGET (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var msisdn = req.swagger.params['msisdn'].value;
  Default.accountsMsisdnMsisdnBillsGET(date,msisdn)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsMsisdnMsisdnDebitmandatesDebitMandateReferenceGET = function accountsMsisdnMsisdnDebitmandatesDebitMandateReferenceGET (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var msisdn = req.swagger.params['msisdn'].value;
  var debitMandateReference = req.swagger.params['debitMandateReference'].value;
  Default.accountsMsisdnMsisdnDebitmandatesDebitMandateReferenceGET(date,msisdn,debitMandateReference)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsMsisdnMsisdnDebitmandatesDebitMandateReferencePATCH = function accountsMsisdnMsisdnDebitmandatesDebitMandateReferencePATCH (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var xCorrelationID = req.swagger.params['X-CorrelationID'].value;
  var msisdn = req.swagger.params['msisdn'].value;
  var debitMandateReference = req.swagger.params['debitMandateReference'].value;
  var patch = req.swagger.params['patch'].value;
  Default.accountsMsisdnMsisdnDebitmandatesDebitMandateReferencePATCH(date,xCorrelationID,msisdn,debitMandateReference,patch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsMsisdnMsisdnDebitmandatesPOST = function accountsMsisdnMsisdnDebitmandatesPOST (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var xCorrelationID = req.swagger.params['X-CorrelationID'].value;
  var msisdn = req.swagger.params['msisdn'].value;
  var requestDebitMandate = req.swagger.params['requestDebitMandate'].value;
  Default.accountsMsisdnMsisdnDebitmandatesPOST(date,xCorrelationID,msisdn,requestDebitMandate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsMsisdnMsisdnLinksLinkReferenceGET = function accountsMsisdnMsisdnLinksLinkReferenceGET (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var msisdn = req.swagger.params['msisdn'].value;
  var linkReference = req.swagger.params['linkReference'].value;
  Default.accountsMsisdnMsisdnLinksLinkReferenceGET(date,msisdn,linkReference)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsMsisdnMsisdnLinksLinkReferencePATCH = function accountsMsisdnMsisdnLinksLinkReferencePATCH (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var xCorrelationID = req.swagger.params['X-CorrelationID'].value;
  var msisdn = req.swagger.params['msisdn'].value;
  var linkReference = req.swagger.params['linkReference'].value;
  var patch = req.swagger.params['patch'].value;
  Default.accountsMsisdnMsisdnLinksLinkReferencePATCH(date,xCorrelationID,msisdn,linkReference,patch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsMsisdnMsisdnLinksPOST = function accountsMsisdnMsisdnLinksPOST (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var xCorrelationID = req.swagger.params['X-CorrelationID'].value;
  var msisdn = req.swagger.params['msisdn'].value;
  var requestLink = req.swagger.params['requestLink'].value;
  Default.accountsMsisdnMsisdnLinksPOST(date,xCorrelationID,msisdn,requestLink)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsMsisdnMsisdnStatemententriesGET = function accountsMsisdnMsisdnStatemententriesGET (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var msisdn = req.swagger.params['msisdn'].value;
  Default.accountsMsisdnMsisdnStatemententriesGET(date,msisdn)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsMsisdnMsisdnStatusGET = function accountsMsisdnMsisdnStatusGET (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var msisdn = req.swagger.params['msisdn'].value;
  Default.accountsMsisdnMsisdnStatusGET(date,msisdn)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountsMsisdnMsisdnTransactionsGET = function accountsMsisdnMsisdnTransactionsGET (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var msisdn = req.swagger.params['msisdn'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var fromDateTime = req.swagger.params['fromDateTime'].value;
  var toDateTime = req.swagger.params['toDateTime'].value;
  Default.accountsMsisdnMsisdnTransactionsGET(date,msisdn,limit,offset,fromDateTime,toDateTime)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.batchtransactionsBatchIdCompletionsGET = function batchtransactionsBatchIdCompletionsGET (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var batchId = req.swagger.params['batchId'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var fromDateTime = req.swagger.params['fromDateTime'].value;
  var toDateTime = req.swagger.params['toDateTime'].value;
  Default.batchtransactionsBatchIdCompletionsGET(date,batchId,limit,offset,fromDateTime,toDateTime)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.batchtransactionsBatchIdGET = function batchtransactionsBatchIdGET (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var batchId = req.swagger.params['batchId'].value;
  Default.batchtransactionsBatchIdGET(date,batchId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.batchtransactionsBatchIdPATCH = function batchtransactionsBatchIdPATCH (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var xCorrelationID = req.swagger.params['X-CorrelationID'].value;
  var batchId = req.swagger.params['batchId'].value;
  var patch = req.swagger.params['patch'].value;
  Default.batchtransactionsBatchIdPATCH(date,xCorrelationID,batchId,patch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.batchtransactionsBatchIdRejectionsGET = function batchtransactionsBatchIdRejectionsGET (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var batchId = req.swagger.params['batchId'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var fromDateTime = req.swagger.params['fromDateTime'].value;
  var toDateTime = req.swagger.params['toDateTime'].value;
  Default.batchtransactionsBatchIdRejectionsGET(date,batchId,limit,offset,fromDateTime,toDateTime)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.batchtransactionsPOST = function batchtransactionsPOST (req, res, next) {
  var xCorrelationID = req.swagger.params['X-CorrelationID'].value;
  var date = req.swagger.params['Date'].value;
  var requestBatchTransaction = req.swagger.params['requestBatchTransaction'].value;
  Default.batchtransactionsPOST(xCorrelationID,date,requestBatchTransaction)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.billsBillReferencePaymentsPOST = function billsBillReferencePaymentsPOST (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var xCorrelationID = req.swagger.params['X-CorrelationID'].value;
  var billReference = req.swagger.params['billReference'].value;
  var requestBillPayment = req.swagger.params['requestBillPayment'].value;
  Default.billsBillReferencePaymentsPOST(date,xCorrelationID,billReference,requestBillPayment)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.heartbeatGET = function heartbeatGET (req, res, next) {
  var date = req.swagger.params['Date'].value;
  Default.heartbeatGET(date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.quotationsPOST = function quotationsPOST (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var xCorrelationID = req.swagger.params['X-CorrelationID'].value;
  var requestQuotation = req.swagger.params['requestQuotation'].value;
  Default.quotationsPOST(date,xCorrelationID,requestQuotation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.quotationsQuotationReferenceGET = function quotationsQuotationReferenceGET (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var quotationReference = req.swagger.params['quotationReference'].value;
  Default.quotationsQuotationReferenceGET(date,quotationReference)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.quotationsQuotationReferencePATCH = function quotationsQuotationReferencePATCH (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var xCorrelationID = req.swagger.params['X-CorrelationID'].value;
  var quotationReference = req.swagger.params['quotationReference'].value;
  var patch = req.swagger.params['patch'].value;
  Default.quotationsQuotationReferencePATCH(date,xCorrelationID,quotationReference,patch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.requeststatesServerCorrelationIdGET = function requeststatesServerCorrelationIdGET (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var serverCorrelationId = req.swagger.params['serverCorrelationId'].value;
  Default.requeststatesServerCorrelationIdGET(date,serverCorrelationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.requeststatesServerCorrelationIdPATCH = function requeststatesServerCorrelationIdPATCH (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var xCorrelationID = req.swagger.params['X-CorrelationID'].value;
  var serverCorrelationId = req.swagger.params['serverCorrelationId'].value;
  var patch = req.swagger.params['patch'].value;
  Default.requeststatesServerCorrelationIdPATCH(date,xCorrelationID,serverCorrelationId,patch)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.responsesClientCorrelationIdGET = function responsesClientCorrelationIdGET (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var clientCorrelationId = req.swagger.params['clientCorrelationId'].value;
  Default.responsesClientCorrelationIdGET(date,clientCorrelationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.statemententriesTransactionReferenceGET = function statemententriesTransactionReferenceGET (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var transactionReference = req.swagger.params['transactionReference'].value;
  Default.statemententriesTransactionReferenceGET(date,transactionReference)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.transactionsPOST = function transactionsPOST (req, res, next) {
  var xCorrelationID = req.swagger.params['X-CorrelationID'].value;
  var date = req.swagger.params['Date'].value;
  var requestTransaction = req.swagger.params['requestTransaction'].value;
  Default.transactionsPOST(xCorrelationID,date,requestTransaction)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.transactionsTransactionReferenceGET = function transactionsTransactionReferenceGET (req, res, next) {
  var date = req.swagger.params['Date'].value;
  var transactionReference = req.swagger.params['transactionReference'].value;
  Default.transactionsTransactionReferenceGET(date,transactionReference)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.transactionsTransactionReferenceReversalsPOST = function transactionsTransactionReferenceReversalsPOST (req, res, next) {
  var xCorrelationID = req.swagger.params['X-CorrelationID'].value;
  var date = req.swagger.params['Date'].value;
  var transactionReference = req.swagger.params['transactionReference'].value;
  var requestReversal = req.swagger.params['requestReversal'].value;
  Default.transactionsTransactionReferenceReversalsPOST(xCorrelationID,date,transactionReference,requestReversal)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
