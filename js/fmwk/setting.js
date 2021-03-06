/*************************************************************************
 * 
 * VLOCITY, INC. CONFIDENTIAL
 * __________________
 * 
 *  [2014] - [2017] Vlocity, Inc. 
 *  All Rights Reserved.
 * 
 * NOTICE:  All information contained herein is, and remains
 * the property of Vlocity, Inc. and its suppliers,
 * if any. The intellectual and technical concepts contained
 * herein are proprietary to Vlocity, Inc. and its suppliers and may be 
 * covered by U.S. and Foreign Patents, patents in process, and are 
 * protected by trade secret or copyright law. Dissemination of this
 * information and reproduction, modification or reverse-engineering 
 * of this material, is prohibited unless prior written permission 
 * is obtained from Vlocity, Inc.
 */
	// Sample SFDC Connected App Consumer Key
	var SAMP_CONNECTED_APP_CONSUMER_KEY = '3MVG9szVa2RxsqBa5tQyU6.tKh61yiGXNhItGzvNJWh1oJh4fcI4pRlqlx1i2MLagkNovsmbaZfSE5mSZ6rCo';
	// Sample SFDC name space prefix
	var SAMP_SFDC_NAMESPACE = 'vlocity_cmt';
	
	window.sessionId = '{!$Api.Session_ID}';  
	var moduleList = 'default';	
	
	window.VOmniForcengConAppId = SAMP_CONNECTED_APP_CONSUMER_KEY;
	window.VOmniScriptDefPath = './scripts/';
	window.VOmniServicesInject = [];
	
	var sfdcVars = {};        
	sfdcVars.sNS = (window.parent.nsPrefix)?(window.parent.nsPrefix):(SAMP_SFDC_NAMESPACE);
	sfdcVars.scriptState = 'new';
	sfdcVars.previewMode = false;
	sfdcVars.verticalMode = false;        
	sfdcVars.noneDataControlTypeListV2 = 'default';   
	sfdcVars.jsonTreeHTMLTmpl = "JSONApplicationReviewHTMLTemplate.html";        
	sfdcVars.bMobile = false;          
	sfdcVars.eleTypeToHTMLTemplateMap = {};
	sfdcVars.layout = 'lightning';         
	sfdcVars.urlParams = {};  
	sfdcVars.overwriteHTMLTemplateMapping = {};           
	sfdcVars.thousandSep = ",";
	sfdcVars.decimalSep = ".";     
	sfdcVars.bPreview = false;  
	sfdcVars.redirectController = 'ctrlRedirect';  
	sfdcVars.bpDef = {};  
	sfdcVars.animate = true;

	// SFDC labels
	var customLabels = {"OmniSideBarError1":"There are Actions embedded between Steps, therefore you can not navigate to a future Step.",
	                    "OmniSideBarError2":"There are validation errors in the current Step and validationRequired property is set to true, therefore you can not navigate to a future Step.",
                        "OmniSideBarError3":"You are on a redirect page, please first navigate back to the OmniScript before clicking a Step.",
                        "OmniSideBarError4":"There are validation errors in a Step in between and validationRequired property is set to true for that Step, therefore you can not navigate to a future Step.",
                        "OmniActionValidationError":"There are validation errors with the OmniScript and validationRequired is set to 'Submit' for this Action, therefore this Action will not be executed.",
                        "OmniGeoError":"Geolocation is not supported by this browser.",
                        "OmniPDFError":"Not a valid fillable PDF file",
                        "OmniStepValidationError":"Please fix all the fields with errors.",
                        "OmniScriptValidationError":"This script has validation errors.",
                        "OmniValidationErrors":"Validation error(s) returned from the Remote call, please fix them in all affected steps.",
                        "OmniScriptDataCategory":"Data Category:",
                        "OmniPreTransform":" (Pre Transform)",
                        "OmniPostTransform":" (Post Transform)",
                        "OmniScriptSearch":"Search",
                        "OmniScriptOpen":"Open in OmniScript",
                        "OmniScriptModal":"Open in popup",
                        "OmniScriptLastPublished":"Last Published",
                        "OmniOneTime":"One Time",
                        "OmniMonthly":"Monthly",
                        "OmniCurrentSetup":"Current Setup",
                        "OmniYourSelections":"Your Selections",
                        "AddToCart":"Add to Cart",
                        "OmniClear":"-- Clear --",
                        "OmniSteps":"Steps",
                        "OmniInstruction":"Instructions",
                        "OmniAddNew":"Add new",
                        "OmniAdd":"Add",
                        "OmniDelete":"Delete",
                        "OmniScriptResumeLink":"This script has been automatically saved, in order to resume in the future:",
                        "OmniCopyToClipBoard":"Copy to clipboard: Ctrl+C/Cmd+C, Enter",
                        "OmniCopyLink":"Copy the link",
                        "OmniResumeLink":"Resume link:",
                        "OmniSaveEmailBody":"Note: for an authenticated user, please log in first before accessing the link.",
                        "OmniEmailMe":"Email me the link",
                        "OmniSummary":"Summary",
                        "OmniDataJSON":"Data JSON",
                        "OmniCallResult":"Call Result",
                        "OmniApplicationAcknowledge":"Thank you for submitting the Application, the Application Reference Number is",
                        "OmniSaved":"Your OmniScript is saved for later",
                        "OmniSavedFailed":"Save for Later failed. If your form includes large attachments, please remove them and try again. Otherwise, navigating away from this page will lose all current information. Reason:",
                        "OmniError":"Error",
                        "OmniAlert":"Alert",
                        "OmniConfirm":"Confirm",
                        "OmniPrompt":"Prompt",
                        "OmniResume":"To resume, please click or bookmark the",
                        "OmniLink":"link",
                        "OmniDRCallResult":"Data Raptor Call Result",
                        "MRC":"MRC",
                        "NRC":"NRC",
                        "OmniOneTimeCost":"One Time Cost",
                        "OmniMonthlyCost":"Monthly Cost",
                        "OmniYourSelections":"Your Selections",
                        "OmniAssetSerialNumber":"Serial Number",
                        "OmniAssetName":"Name",
                        "OmniAssetProductName":"Product Name",
                        "OmniAssetActivationDate":"Activation Date",
                        "OmniConfigProdModalHeader":"Configure Product",
                        "OmniConfigProdName":"PRODUCT",
                        "OmniConfigProdQTY":"Qty",
                        "OmniConfigProdModalOk":"Save",
                        "OmniConfigProdModalCancel":"Cancel",
                        "OmniConfigProdQtyError0":"Please select a quantity greater than 0.",
                        "OmniConfigProdQtyError":"Please select a quantity between",
                        "OmniConfigProdQtyErrorAnd":"and",
                        "OmniConfigProdQtyError1":"Please select a quantity greater than or equal to",
                        "OmniConfigProdQueryError":"There are no results.",
                        "OmniConfigProdRequired":"required",
                        "OmniScriptWebCalloutFailed":"Web callout failed:",
                        "OmniDocuSignNoRecipients":"No recipients were found in the request",
                        "OmniDocuSignModalClose":"Close",
                        "OmniDocuSignModalViewPdf":"View PDF",
                        "OmniDocuSignModalTitle":"DocuSign Signing Ceremony",
                        "OmniCancelled":"Your OmniScript has been cancelled.",
                        "OmniTypeAheadEditLabel":"Edit",
                        "OmniSendEmailNoTemplate":"No Template found in the request",
                        "OmniLoading" : "Loading from the server..",
                        "OmniPopupBlocked":"Popup Blocked. Please disable any Popup Blocker and try again.",
                        "OmniMinLength":"Minimum length of",
                        "OmniMaxLength":"Maximum length of",    
                        "OmniMinValue":"Minimum value",      
                        "OmniMaxValue":"Maximum value",
                        "OmniMinInt":"Minimum Permitted Value: -9007199254740991",      
                        "OmniMaxInt":"Maximum Permitted Value: 9007199254740991",           
                        "OmniRequired":"required",
                        "OmniScriptSavingAttachments":"Saving Attachments",
                        "OmniScriptSavingAttachmentsFailed":"Saving Attachments Failed",
                        "RequestTooLarge":"Request Too Large",                                                 
                        "OmniScriptLoadingAttachments":"Loading Attachments",
                        "Omnicmtcartshowchild":"Show",
                        "Omnicmtcarthidechild":"Hide",
                        "OmniEmailActionLargeFileErr":"Exceeds maximum limit of 5MB",
                        "OmniStepChartDesc":"Steps",
                        "OmniSelItemLoadMore":"Load More",
                        "OmniNoConfigAttrMsg":"No configurable attributes for this item.",
                        "OmniScriptError":"Error",
                        "OmniScriptNotFound1":"There is no active OmniScript with",
                        "OmniScriptType":"Type",
                        "OmniScriptSubType":"Sub Type",
                        "OmniScriptLang":"Language",
                        "OmniScriptId":"Id",
                        "OmniScriptNotFound2":"Please contact your Salesforce Administrator.",
                        "OmniCpqItemsInCart":"Items in Cart",
                        "OmniCpqItemsInCartMore":"More...",
                        "OmniNoSFDCConnection":"There is no Salesforce connection.",
                        "OmniCpqAddtoCartBtn":"Add to Cart",
                        "OmniDocuSignSuccessMsg":"You have successfully signed the document. You may receive a confirmation email with a link to the signed document. You can also click View PDF to view and save a copy of the document.",
                        "OmniDocuSignFailMsg":"Signature process is not completed, Please contact your System Administrator.",
                        "OmniDocuSignCloseMsg":"Click Close to exit this window.",                        
                        "OmniEditBlockDeleteConfirmation":"Are you sure that you want to permanently delete the selected item",
                        "OmniDesInvalidJson":"The JSON is invalid",
                        "OmniEditBlockTableMenu":"Menu"
				       };

    if(window.parent.omniMobile)
        window.parent.VlocOmniOut = window.parent.omniMobile;
        	
    if(window.parent.VlocOmniOut && window.parent.VlocOmniOut.vlocityLabels)
    	customLabels = window.parent.VlocOmniOut.vlocityLabels;
    
    window.VOmniSetConnectedAppKey = function(key) {
    	window.VOmniForcengConAppId = key;
    }
    
    window.VOmniSetNameSpace = function(ns) {
    	sfdcVars.sNS = (window.parent.nsPrefix)?(window.parent.nsPrefix):(ns);
    }
    
    window.VOmniAddMoreCustomLabels = function(extraLabels) {
        for (var key in extraLabels) {
            if(extraLabels.hasOwnProperty(key)) {
            	customLabels[key] = extraLabels[key];
            }
        }
    }
    
    window.VOmniSetScriptDefPath = function(path)
    {
    	if(path) {
    	    window.VOmniScriptDefPath = path;
    	}
    }
    
    window.VOmniCustomServicesToInject = function(services)
    {
    	if(services && services.constructor === Array) {
    		window.VOmniServicesInject = services;
    	}
    }
