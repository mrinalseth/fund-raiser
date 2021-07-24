(function() {
var exports = {};
exports.id = 634;
exports.ids = [634];
exports.modules = {

/***/ 38:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ show; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(347);
// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(440);
// EXTERNAL MODULE: ./ethereum/campaign.js + 1 modules
var ethereum_campaign = __webpack_require__(579);
// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(483);
;// CONCATENATED MODULE: ./components/contributeForm.js








const ContributeForm = props => {
  const {
    0: value,
    1: setValue
  } = (0,external_react_.useState)('');
  const {
    0: errorMessage,
    1: setErrorMessage
  } = (0,external_react_.useState)('');
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);

  const onSubmit = async e => {
    e.preventDefault();
    const campaign = (0,ethereum_campaign/* default */.Z)(props.address);

    try {
      setLoading(true);
      const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
      await campaign.methods.contibute().send({
        from: accounts[0],
        value: web3/* default.utils.toWei */.Z.utils.toWei(value, 'ether')
      });
      window.location.reload();
    } catch (err) {
      setLoading(false);
      setErrorMessage(err.message);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form, {
      onSubmit: onSubmit,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form.Field, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          children: "Amount to Contribute"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Input, {
          label: "ETH",
          labelPosition: "right",
          value: value,
          onChange: e => setValue(e.target.value)
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
        loading: loading,
        primary: true,
        children: "Contribute"
      })]
    }), errorMessage === '' ? null : /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Message, {
      error: true,
      header: "Oops!",
      content: errorMessage
    })]
  });
};

/* harmony default export */ var contributeForm = (ContributeForm);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(456);
;// CONCATENATED MODULE: ./pages/campaigns/show.js










const CampaignShow = props => {
  const renderCard = () => {
    const {
      balance,
      manager,
      minimumContribution,
      requestCount,
      approversCount
    } = props;
    const items = [{
      header: manager,
      meta: 'Address of manager',
      description: 'The manager created this campaign',
      style: {
        overflowWrap: 'break-word'
      }
    }, {
      header: minimumContribution,
      meta: 'Minimum contribution',
      description: 'You must contribute at least this much wei.',
      style: {
        overflowWrap: 'break-word'
      }
    }, {
      header: requestCount,
      meta: 'Total number of Request',
      description: 'A request tries to withdraw money from contract and it should be approved by approvers',
      style: {
        overflowWrap: 'break-word'
      }
    }, {
      header: approversCount,
      meta: 'Total number of Approvers',
      description: 'Total number of prople who have donated in this campaign',
      style: {
        overflowWrap: 'break-word'
      }
    }, {
      header: web3/* default.utils.fromWei */.Z.utils.fromWei(balance, 'ether'),
      meta: 'Campaign Balance in ETH',
      description: 'The balance is how much money the campaign has left',
      style: {
        overflowWrap: 'break-word'
      }
    }];
    return /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Card.Group, {
      items: items
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: "Campaign show"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid.Row, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
          width: 10,
          children: renderCard()
        }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
          width: 6,
          children: /*#__PURE__*/jsx_runtime_.jsx(contributeForm, {
            address: props.address
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Row, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
          children: /*#__PURE__*/jsx_runtime_.jsx(routes.Link, {
            route: `/campaigns/${props.address}/requests`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                primary: true,
                children: "View Requests"
              })
            })
          })
        })
      })]
    })]
  });
};

CampaignShow.getInitialProps = async props => {
  const campaign = (0,ethereum_campaign/* default */.Z)(props.query.address);
  const summary = await campaign.methods.getSummary().call();
  return {
    address: props.query.address,
    minimumContribution: summary[0],
    balance: summary[1],
    requestCount: summary[2],
    approversCount: summary[3],
    manager: summary[4]
  };
};

/* harmony default export */ var show = (CampaignShow);

/***/ }),

/***/ 247:
/***/ (function(module) {

"use strict";
module.exports = require("next-routes");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 347:
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ 409:
/***/ (function(module) {

"use strict";
module.exports = require("web3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [30,579], function() { return __webpack_exec__(38); });
module.exports = __webpack_exports__;

})();