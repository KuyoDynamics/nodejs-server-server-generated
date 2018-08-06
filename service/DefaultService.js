'use strict';


/**
 * View Account Name
 * This endpoint returns the name of an account
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * accountId String Path variable to uniquely identify an account
 * returns accountName
 **/
exports.accountsAccountIdAccountnameGET = function(date,accountId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lei" : "lei",
  "name" : {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "nativeName" : "nativeName",
    "fullName" : "fullName",
    "middleName" : "middleName",
    "title" : "title"
  },
  "status" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View Account Balance
 * This endpoint returns the balance of an account
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * accountId String Path variable to uniquely identify an account
 * returns accountBalance
 **/
exports.accountsAccountIdBalanceGET = function(date,accountId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "reservedBalance" : "reservedBalance",
  "currentBalance" : "currentBalance",
  "currency" : { },
  "availableBalance" : "availableBalance",
  "unclearedBalance" : "unclearedBalance",
  "status" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create A Bill Payment
 * Provided with a valid object representation, this endpoint allows for a new bill payment to be created for a specific account
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * xCorrelationID String Header parameter to uniquely identify the request
 * accountId String Path variable to uniquely identify an account
 * billReference String Path variable to uniquely identify a bill
 * requestBillPayment BillPayment Represents the request body of a bill payment
 * returns billPayment
 **/
exports.accountsAccountIdBillsBillReferencePaymentsPOST = function(date,xCorrelationID,accountId,billReference,requestBillPayment) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "supplementaryBillReferenceDetails" : [ {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  } ],
  "customerReference" : "customerReference",
  "currency" : { },
  "paidAmount" : "paidAmount"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View Account Bills
 * This endpoint returns bills linked to an account
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * accountId String Path variable to uniquely identify an account
 * returns List
 **/
exports.accountsAccountIdBillsGET = function(date,accountId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "amountDue" : "amountDue",
  "metadata" : [ {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  } ],
  "dueDate" : "2000-01-23",
  "currency" : { },
  "billDescription" : "billDescription",
  "billReference" : "billReference",
  "minimumAmountDue" : "minimumAmountDue"
}, {
  "amountDue" : "amountDue",
  "metadata" : [ {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  } ],
  "dueDate" : "2000-01-23",
  "currency" : { },
  "billDescription" : "billDescription",
  "billReference" : "billReference",
  "minimumAmountDue" : "minimumAmountDue"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View A Debit Mandate
 * This endpoint returns a specific debit mandate linked to an account
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * accountId String Path variable to uniquely identify an account
 * debitMandateReference String Path variable to uniquely identify a debit mandate
 * returns responseDebitMandate
 **/
exports.accountsAccountIdDebitmandatesDebitMandateReferenceGET = function(date,accountId,debitMandateReference) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update A Debit Mandate
 * This endpoint updates a specific debit mandate linked to an account
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * xCorrelationID String Header parameter to uniquely identify the request
 * accountId String Path variable to uniquely identify an account
 * debitMandateReference String Path variable to uniquely identify a debit mandate
 * patch List Represents the request body of a patch operation
 * returns requestState
 **/
exports.accountsAccountIdDebitmandatesDebitMandateReferencePATCH = function(date,xCorrelationID,accountId,debitMandateReference,patch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pollLimit" : 0.080082819046101150206595775671303272247314453125,
  "pendingReason" : "pendingReason",
  "expiryTime" : "expiryTime",
  "objectReference" : "objectReference",
  "notificationMethod" : { },
  "error" : {
    "errorDescription" : "errorDescription",
    "errorCategory" : { },
    "errorParameters" : [ {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    } ],
    "errorDateTime" : "errorDateTime",
    "errorCode" : { }
  },
  "serverCorrelationId" : "serverCorrelationId",
  "status" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create A Debit Mandate
 * Provided with a valid object representation, this endpoint allows for a new debit mandate to be created for a specific account
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * xCorrelationID String Header parameter to uniquely identify the request
 * accountId String Path variable to uniquely identify an account
 * requestDebitMandate RequestDebitMandate Represents the request body of a debit mandate
 * returns responseDebitMandate
 **/
exports.accountsAccountIdDebitmandatesPOST = function(date,xCorrelationID,accountId,requestDebitMandate) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View A Link
 * This endpoint returns a specific link
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * accountId String Path variable to uniquely identify an account
 * linkReference String Path variable to uniquely identify a link
 * returns responseDebitMandate
 **/
exports.accountsAccountIdLinksLinkReferenceGET = function(date,accountId,linkReference) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update A Link
 * This endpoint updates a specific link
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * xCorrelationID String Header parameter to uniquely identify the request
 * accountId String Path variable to uniquely identify an account
 * linkReference String Path variable to uniquely identify a link
 * patch List Represents the request body of a patch operation
 * returns requestState
 **/
exports.accountsAccountIdLinksLinkReferencePATCH = function(date,xCorrelationID,accountId,linkReference,patch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pollLimit" : 0.080082819046101150206595775671303272247314453125,
  "pendingReason" : "pendingReason",
  "expiryTime" : "expiryTime",
  "objectReference" : "objectReference",
  "notificationMethod" : { },
  "error" : {
    "errorDescription" : "errorDescription",
    "errorCategory" : { },
    "errorParameters" : [ {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    } ],
    "errorDateTime" : "errorDateTime",
    "errorCode" : { }
  },
  "serverCorrelationId" : "serverCorrelationId",
  "status" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create A Link
 * Provided with a valid object representation, this endpoint allows for a new link to be created for a specific account
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * xCorrelationID String Header parameter to uniquely identify the request
 * accountId String Path variable to uniquely identify an account
 * requestLink Link Represents the request body of a link
 * returns responseLink
 **/
exports.accountsAccountIdLinksPOST = function(date,xCorrelationID,accountId,requestLink) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View Account Statements
 * This endpoint returns statements linked to an account
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * accountId String Path variable to uniquely identify an account
 * returns List
 **/
exports.accountsAccountIdStatemententriesGET = function(date,accountId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "amount" : "amount",
  "displayType" : "displayType",
  "modificationDate" : "modificationDate",
  "debitParty" : [ {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  } ],
  "transactionReceipt" : "transactionReceipt",
  "transactionStatus" : "transactionStatus",
  "transactionReference" : "transactionReference",
  "requestDate" : "requestDate",
  "currency" : { },
  "descriptionText" : "descriptionText",
  "creationDate" : "creationDate",
  "creditParty" : [ {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  } ]
}, {
  "amount" : "amount",
  "displayType" : "displayType",
  "modificationDate" : "modificationDate",
  "debitParty" : [ {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  } ],
  "transactionReceipt" : "transactionReceipt",
  "transactionStatus" : "transactionStatus",
  "transactionReference" : "transactionReference",
  "requestDate" : "requestDate",
  "currency" : { },
  "descriptionText" : "descriptionText",
  "creationDate" : "creationDate",
  "creditParty" : [ {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View Account Status
 * This endpoint returns the current status of an account
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * accountId String Path variable to uniquely identify an account
 * returns accountStatus
 **/
exports.accountsAccountIdStatusGET = function(date,accountId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lei" : "lei",
  "subStatus" : "subStatus",
  "status" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View Account Specific Transaction
 * This endpoint returns transactions linked to a specific account
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * accountId String Path variable to uniquely identify an account
 * limit Integer Supports pagination. If this is not supplied, then the server will apply a limit of 50 records returned for each request. (optional)
 * offset Integer Supports pagination. This value will indicate the cursor position from where to retrieve the set of records. For example, a limit of 50 and offset of 10 will return records 10 to 60. (optional)
 * fromDateTime String Indicates the minimum date for which records should be returned (optional)
 * toDateTime String Indicates the maximum date for which records should be returned (optional)
 * returns List
 **/
exports.accountsAccountIdTransactionsGET = function(date,accountId,limit,offset,fromDateTime,toDateTime) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View Account Name
 * This endpoint returns the name of an account (via MSISDN identifier)
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * msisdn String Path variable to uniquely identify an account (via MSISDN identifier)
 * returns accountName
 **/
exports.accountsMsisdnMsisdnAccountnameGET = function(date,msisdn) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lei" : "lei",
  "name" : {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "nativeName" : "nativeName",
    "fullName" : "fullName",
    "middleName" : "middleName",
    "title" : "title"
  },
  "status" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View Account Balance
 * This endpoint returns the balance of an account (via MSISDN identifier)
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * msisdn String Path variable to uniquely identify an account (via MSISDN identifier)
 * returns accountBalance
 **/
exports.accountsMsisdnMsisdnBalanceGET = function(date,msisdn) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "reservedBalance" : "reservedBalance",
  "currentBalance" : "currentBalance",
  "currency" : { },
  "availableBalance" : "availableBalance",
  "unclearedBalance" : "unclearedBalance",
  "status" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create A Bill Payment
 * Provided with a valid object representation, this endpoint allows for a new bill payment to be created for a specific account (via MSISDN identifier)
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * xCorrelationID String Header parameter to uniquely identify the request
 * msisdn String Path variable to uniquely identify an account (via MSISDN identifier)
 * billReference String Path variable to uniquely identify a bill
 * requestBillPayment BillPayment Represents the request body of a bill payment
 * returns billPayment
 **/
exports.accountsMsisdnMsisdnBillsBillReferencePaymentsPOST = function(date,xCorrelationID,msisdn,billReference,requestBillPayment) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "supplementaryBillReferenceDetails" : [ {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  } ],
  "customerReference" : "customerReference",
  "currency" : { },
  "paidAmount" : "paidAmount"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View Account Bills
 * This endpoint returns bills linked to an account (via MSISDN identifier)
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * msisdn String Path variable to uniquely identify an account (via MSISDN identifier)
 * returns List
 **/
exports.accountsMsisdnMsisdnBillsGET = function(date,msisdn) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "amountDue" : "amountDue",
  "metadata" : [ {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  } ],
  "dueDate" : "2000-01-23",
  "currency" : { },
  "billDescription" : "billDescription",
  "billReference" : "billReference",
  "minimumAmountDue" : "minimumAmountDue"
}, {
  "amountDue" : "amountDue",
  "metadata" : [ {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  } ],
  "dueDate" : "2000-01-23",
  "currency" : { },
  "billDescription" : "billDescription",
  "billReference" : "billReference",
  "minimumAmountDue" : "minimumAmountDue"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View A Debit Mandate
 * This endpoint returns a specific debit mandate linked to an account (via MSISDN identifier)
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * msisdn String Path variable to uniquely identify an account (via MSISDN identifier)
 * debitMandateReference String Path variable to uniquely identify a debit mandate
 * returns responseDebitMandate
 **/
exports.accountsMsisdnMsisdnDebitmandatesDebitMandateReferenceGET = function(date,msisdn,debitMandateReference) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update A Debit Mandate
 * This endpoint updates a specific debit mandate linked to an account (via MSISDN identifier)
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * xCorrelationID String Header parameter to uniquely identify the request
 * msisdn String Path variable to uniquely identify an account (via MSISDN identifier)
 * debitMandateReference String Path variable to uniquely identify a debit mandate
 * patch List Represents the request body of a patch operation
 * returns requestState
 **/
exports.accountsMsisdnMsisdnDebitmandatesDebitMandateReferencePATCH = function(date,xCorrelationID,msisdn,debitMandateReference,patch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pollLimit" : 0.080082819046101150206595775671303272247314453125,
  "pendingReason" : "pendingReason",
  "expiryTime" : "expiryTime",
  "objectReference" : "objectReference",
  "notificationMethod" : { },
  "error" : {
    "errorDescription" : "errorDescription",
    "errorCategory" : { },
    "errorParameters" : [ {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    } ],
    "errorDateTime" : "errorDateTime",
    "errorCode" : { }
  },
  "serverCorrelationId" : "serverCorrelationId",
  "status" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create A Debit Mandate
 * Provided with a valid object representation, this endpoint allows for a new debit mandate to be created for a specific account (via MSISDN identifier)
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * xCorrelationID String Header parameter to uniquely identify the request
 * msisdn String Path variable to uniquely identify an account (via MSISDN identifier)
 * requestDebitMandate RequestDebitMandate Represents the request body of a debit mandate
 * returns responseDebitMandate
 **/
exports.accountsMsisdnMsisdnDebitmandatesPOST = function(date,xCorrelationID,msisdn,requestDebitMandate) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View A Link
 * This endpoint returns a specific link (via MSISDN identifier)
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * msisdn String Path variable to uniquely identify an account (via MSISDN identifier)
 * linkReference String Path variable to uniquely identify a link
 * returns responseDebitMandate
 **/
exports.accountsMsisdnMsisdnLinksLinkReferenceGET = function(date,msisdn,linkReference) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update A Link
 * This endpoint updates a specific link (via MSISDN identifier)
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * xCorrelationID String Header parameter to uniquely identify the request
 * msisdn String Path variable to uniquely identify an account (via MSISDN identifier)
 * linkReference String Path variable to uniquely identify a link
 * patch List Represents the request body of a patch operation
 * returns requestState
 **/
exports.accountsMsisdnMsisdnLinksLinkReferencePATCH = function(date,xCorrelationID,msisdn,linkReference,patch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pollLimit" : 0.080082819046101150206595775671303272247314453125,
  "pendingReason" : "pendingReason",
  "expiryTime" : "expiryTime",
  "objectReference" : "objectReference",
  "notificationMethod" : { },
  "error" : {
    "errorDescription" : "errorDescription",
    "errorCategory" : { },
    "errorParameters" : [ {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    } ],
    "errorDateTime" : "errorDateTime",
    "errorCode" : { }
  },
  "serverCorrelationId" : "serverCorrelationId",
  "status" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create A Link
 * Provided with a valid object representation, this endpoint allows for a new link to be created for a specific account (via MSISDN identifier)
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * xCorrelationID String Header parameter to uniquely identify the request
 * msisdn String Path variable to uniquely identify an account (via MSISDN identifier)
 * requestLink Link Represents the request body of a link
 * returns responseLink
 **/
exports.accountsMsisdnMsisdnLinksPOST = function(date,xCorrelationID,msisdn,requestLink) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View Account Statements
 * This endpoint returns statements linked to an account (via MSISDN identifier)
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * msisdn String Path variable to uniquely identify an account (via MSISDN identifier)
 * returns List
 **/
exports.accountsMsisdnMsisdnStatemententriesGET = function(date,msisdn) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "amount" : "amount",
  "displayType" : "displayType",
  "modificationDate" : "modificationDate",
  "debitParty" : [ {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  } ],
  "transactionReceipt" : "transactionReceipt",
  "transactionStatus" : "transactionStatus",
  "transactionReference" : "transactionReference",
  "requestDate" : "requestDate",
  "currency" : { },
  "descriptionText" : "descriptionText",
  "creationDate" : "creationDate",
  "creditParty" : [ {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  } ]
}, {
  "amount" : "amount",
  "displayType" : "displayType",
  "modificationDate" : "modificationDate",
  "debitParty" : [ {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  } ],
  "transactionReceipt" : "transactionReceipt",
  "transactionStatus" : "transactionStatus",
  "transactionReference" : "transactionReference",
  "requestDate" : "requestDate",
  "currency" : { },
  "descriptionText" : "descriptionText",
  "creationDate" : "creationDate",
  "creditParty" : [ {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View Account Status
 * This endpoint returns the current status of an account (via MSISDN identifier)
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * msisdn String Path variable to uniquely identify an account (via MSISDN identifier)
 * returns accountStatus
 **/
exports.accountsMsisdnMsisdnStatusGET = function(date,msisdn) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lei" : "lei",
  "subStatus" : "subStatus",
  "status" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View Account Specific Transaction
 * This endpoint returns transactions linked to a specific account (via MSISDN identifier)
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * msisdn String Path variable to uniquely identify an account (via MSISDN identifier)
 * limit Integer Supports pagination. If this is not supplied, then the server will apply a limit of 50 records returned for each request. (optional)
 * offset Integer Supports pagination. This value will indicate the cursor position from where to retrieve the set of records. For example, a limit of 50 and offset of 10 will return records 10 to 60. (optional)
 * fromDateTime String Indicates the minimum date for which records should be returned (optional)
 * toDateTime String Indicates the maximum date for which records should be returned (optional)
 * returns List
 **/
exports.accountsMsisdnMsisdnTransactionsGET = function(date,msisdn,limit,offset,fromDateTime,toDateTime) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View Batch Completions
 * This endpoint returns completed transactions for a specific batch
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * batchId String Path variable to uniquely identify the transaction batch
 * limit Integer Supports pagination. If this is not supplied, then the server will apply a limit of 50 records returned for each request. (optional)
 * offset Integer Supports pagination. This value will indicate the cursor position from where to retrieve the set of records. For example, a limit of 50 and offset of 10 will return records 10 to 60. (optional)
 * fromDateTime String Indicates the minimum date for which records should be returned (optional)
 * toDateTime String Indicates the maximum date for which records should be returned (optional)
 * returns List
 **/
exports.batchtransactionsBatchIdCompletionsGET = function(date,batchId,limit,offset,fromDateTime,toDateTime) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "debitParty" : [ {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  } ],
  "transactionReference" : "transactionReference",
  "link" : "link",
  "completionDate" : "2000-01-23T04:56:07.000+00:00",
  "requestingOrganisationTransactionReference" : "requestingOrganisationTransactionReference",
  "creditParty" : [ {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  } ]
}, {
  "debitParty" : [ {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  } ],
  "transactionReference" : "transactionReference",
  "link" : "link",
  "completionDate" : "2000-01-23T04:56:07.000+00:00",
  "requestingOrganisationTransactionReference" : "requestingOrganisationTransactionReference",
  "creditParty" : [ {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View A Transaction Batch
 * This endpoint returns the current status of a batch transaction
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * batchId String Path variable to uniquely identify the transaction batch
 * returns responseBatchTransaction
 **/
exports.batchtransactionsBatchIdGET = function(date,batchId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update A Transaction Batch
 * This endpoint updates a specific transaction batch
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * xCorrelationID String Header parameter to uniquely identify the request
 * batchId String Path variable to uniquely identify the transaction batch
 * patch List Represents the request body of a patch operation
 * returns requestState
 **/
exports.batchtransactionsBatchIdPATCH = function(date,xCorrelationID,batchId,patch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pollLimit" : 0.080082819046101150206595775671303272247314453125,
  "pendingReason" : "pendingReason",
  "expiryTime" : "expiryTime",
  "objectReference" : "objectReference",
  "notificationMethod" : { },
  "error" : {
    "errorDescription" : "errorDescription",
    "errorCategory" : { },
    "errorParameters" : [ {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    } ],
    "errorDateTime" : "errorDateTime",
    "errorCode" : { }
  },
  "serverCorrelationId" : "serverCorrelationId",
  "status" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View Batch Rejections
 * This endpoint returns rejected transactions for a specific batch
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * batchId String Path variable to uniquely identify the transaction batch
 * limit Integer Supports pagination. If this is not supplied, then the server will apply a limit of 50 records returned for each request. (optional)
 * offset Integer Supports pagination. This value will indicate the cursor position from where to retrieve the set of records. For example, a limit of 50 and offset of 10 will return records 10 to 60. (optional)
 * fromDateTime String Indicates the minimum date for which records should be returned (optional)
 * toDateTime String Indicates the maximum date for which records should be returned (optional)
 * returns List
 **/
exports.batchtransactionsBatchIdRejectionsGET = function(date,batchId,limit,offset,fromDateTime,toDateTime) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "debitParty" : [ {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  } ],
  "transactionReference" : "transactionReference",
  "rejectionDate" : "2000-01-23T04:56:07.000+00:00",
  "requestingOrganisationTransactionReference" : "requestingOrganisationTransactionReference",
  "rejectionReason" : "rejectionReason",
  "creditParty" : [ {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  } ]
}, {
  "debitParty" : [ {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  } ],
  "transactionReference" : "transactionReference",
  "rejectionDate" : "2000-01-23T04:56:07.000+00:00",
  "requestingOrganisationTransactionReference" : "requestingOrganisationTransactionReference",
  "rejectionReason" : "rejectionReason",
  "creditParty" : [ {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create A Transaction Batch
 * Provided with a valid object representation, this endpoint allows for a new transaction batch to be created
 *
 * xCorrelationID String Header parameter to uniquely identify the request
 * date String Header parameter to indicate the date and time that the message was originated
 * requestBatchTransaction RequestBatchTransaction Represents the request body of a transaction batch
 * returns requestState
 **/
exports.batchtransactionsPOST = function(xCorrelationID,date,requestBatchTransaction) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pollLimit" : 0.080082819046101150206595775671303272247314453125,
  "pendingReason" : "pendingReason",
  "expiryTime" : "expiryTime",
  "objectReference" : "objectReference",
  "notificationMethod" : { },
  "error" : {
    "errorDescription" : "errorDescription",
    "errorCategory" : { },
    "errorParameters" : [ {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    } ],
    "errorDateTime" : "errorDateTime",
    "errorCode" : { }
  },
  "serverCorrelationId" : "serverCorrelationId",
  "status" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create A Bill Payment
 * Provided with a valid object representation, this endpoint allows for a new bill payment to be created
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * xCorrelationID String Header parameter to uniquely identify the request
 * billReference String Path variable to uniquely identify a bill
 * requestBillPayment BillPayment Represents the request body of a bill payment
 * returns billPayment
 **/
exports.billsBillReferencePaymentsPOST = function(date,xCorrelationID,billReference,requestBillPayment) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "supplementaryBillReferenceDetails" : [ {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  }, {
    "paymentReferenceType" : "paymentReferenceType",
    "paymentReferenceValue" : "paymentReferenceValue"
  } ],
  "customerReference" : "customerReference",
  "currency" : { },
  "paidAmount" : "paidAmount"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Check API availability
 * This endpoint returns the current status of the API
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * returns heartbeat
 **/
exports.heartbeatGET = function(date) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "delay" : 0.80082819046101150206595775671303272247314453125,
  "serviceStatus" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create A New Quotation
 * Provided with a valid object representation, this endpoint allows for a new quotation to be created
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * xCorrelationID String Header parameter to uniquely identify the request
 * requestQuotation RequestQuotation Represents the request body of a quotation request
 * returns responseQuotation
 **/
exports.quotationsPOST = function(date,xCorrelationID,requestQuotation) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View A Quotation
 * This endpoint returns a specific quotation
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * quotationReference String Path variable to uniquely identify a quotation
 * returns responseQuotation
 **/
exports.quotationsQuotationReferenceGET = function(date,quotationReference) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update A Quotation
 * This endpoint updates a specific quotation
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * xCorrelationID String Header parameter to uniquely identify the request
 * quotationReference String Path variable to uniquely identify a quotation
 * patch List Represents the request body of a patch operation
 * returns requestState
 **/
exports.quotationsQuotationReferencePATCH = function(date,xCorrelationID,quotationReference,patch) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pollLimit" : 0.080082819046101150206595775671303272247314453125,
  "pendingReason" : "pendingReason",
  "expiryTime" : "expiryTime",
  "objectReference" : "objectReference",
  "notificationMethod" : { },
  "error" : {
    "errorDescription" : "errorDescription",
    "errorCategory" : { },
    "errorParameters" : [ {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    } ],
    "errorDateTime" : "errorDateTime",
    "errorCode" : { }
  },
  "serverCorrelationId" : "serverCorrelationId",
  "status" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View A Request State
 * This endpoint returns a specific request state
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * serverCorrelationId String Path variable to uniquely identify a request state
 * returns requestState
 **/
exports.requeststatesServerCorrelationIdGET = function(date,serverCorrelationId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pollLimit" : 0.080082819046101150206595775671303272247314453125,
  "pendingReason" : "pendingReason",
  "expiryTime" : "expiryTime",
  "objectReference" : "objectReference",
  "notificationMethod" : { },
  "error" : {
    "errorDescription" : "errorDescription",
    "errorCategory" : { },
    "errorParameters" : [ {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    }, {
      "value" : "value",
      "key" : "key"
    } ],
    "errorDateTime" : "errorDateTime",
    "errorCode" : { }
  },
  "serverCorrelationId" : "serverCorrelationId",
  "status" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update A Request State
 * This endpoint updates a specific request state
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * xCorrelationID String Header parameter to uniquely identify the request
 * serverCorrelationId String Path variable to uniquely identify a request state
 * patch List Represents the request body of a patch operation
 * no response value expected for this operation
 **/
exports.requeststatesServerCorrelationIdPATCH = function(date,xCorrelationID,serverCorrelationId,patch) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * View A Response
 * This endpoint returns a specfic response
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * clientCorrelationId String Path variable to uniquely identify a response
 * returns response
 **/
exports.responsesClientCorrelationIdGET = function(date,clientCorrelationId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "link" : "link"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View Specific Statement
 * This endpoint returns the statement of a specific transaction
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * transactionReference String Path variable to uniquely identify the transaction
 * returns statementEntry
 **/
exports.statemententriesTransactionReferenceGET = function(date,transactionReference) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : "amount",
  "displayType" : "displayType",
  "modificationDate" : "modificationDate",
  "debitParty" : [ {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  } ],
  "transactionReceipt" : "transactionReceipt",
  "transactionStatus" : "transactionStatus",
  "transactionReference" : "transactionReference",
  "requestDate" : "requestDate",
  "currency" : { },
  "descriptionText" : "descriptionText",
  "creationDate" : "creationDate",
  "creditParty" : [ {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  }, {
    "value" : "value",
    "key" : "key"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create A Transaction
 * Provided with a valid object representation, this endpoint allows for a new transaction to be created
 *
 * xCorrelationID String Header parameter to uniquely identify the request
 * date String Header parameter to indicate the date and time that the message was originated
 * requestTransaction RequestTransaction Represents the request body of a transaction
 * returns responseTransaction
 **/
exports.transactionsPOST = function(xCorrelationID,date,requestTransaction) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View A Transaction
 * This endpoint returns the current state of a transaction
 *
 * date String Header parameter to indicate the date and time that the message was originated
 * transactionReference String Path variable to uniquely identify the transaction
 * returns responseTransaction
 **/
exports.transactionsTransactionReferenceGET = function(date,transactionReference) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create A Reversal
 * Provided with a valid object representation, this endpoint allows for a new reversal to be created
 *
 * xCorrelationID String Header parameter to uniquely identify the request
 * date String Header parameter to indicate the date and time that the message was originated
 * transactionReference String Path variable to uniquely identify the transaction
 * requestReversal RequestReversal Represents the request body of a reversal
 * returns responseReversal
 **/
exports.transactionsTransactionReferenceReversalsPOST = function(xCorrelationID,date,transactionReference,requestReversal) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

