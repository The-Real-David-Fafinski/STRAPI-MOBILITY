"use strict";
(self["webpackChunkurban_cobix"] = self["webpackChunkurban_cobix"] || []).push([[3380],{

/***/ 33380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADMIN_PERMISSIONS_EE: () => (/* binding */ ADMIN_PERMISSIONS_EE)
/* harmony export */ });
const ADMIN_PERMISSIONS_EE = {
  settings: {
    auditLogs: {
      main: [{ action: "admin::audit-logs.read", subject: null }],
      read: [{ action: "admin::audit-logs.read", subject: null }]
    },
    "review-workflows": {
      main: [{ action: "admin::review-workflows.read", subject: null }],
      create: [{ action: "admin::review-workflows.create", subject: null }],
      delete: [{ action: "admin::review-workflows.delete", subject: null }],
      update: [{ action: "admin::review-workflows.update", subject: null }]
    },
    sso: {
      main: [{ action: "admin::provider-login.read", subject: null }],
      read: [{ action: "admin::provider-login.read", subject: null }],
      update: [{ action: "admin::provider-login.update", subject: null }]
    }
  }
};


/***/ })

}]);