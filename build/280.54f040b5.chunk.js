"use strict";
(self["webpackChunkurban_cobix"] = self["webpackChunkurban_cobix"] || []).push([[280],{

/***/ 40280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES_EE: () => (/* binding */ ROUTES_EE)
/* harmony export */ });
const ROUTES_EE = [
  ...window.strapi.features.isEnabled(window.strapi.features.AUDIT_LOGS) ? [
    {
      async Component() {
        const component = await __webpack_require__.e(/* import() | audit-logs-settings-page */ 5606).then(__webpack_require__.bind(__webpack_require__, 34867));
        return component;
      },
      to: "/settings/audit-logs",
      exact: true
    }
  ] : [],
  ...window.strapi.features.isEnabled(window.strapi.features.REVIEW_WORKFLOWS) ? [
    {
      async Component() {
        const component = await __webpack_require__.e(/* import() | review-workflows-settings-list-view */ 2225).then(__webpack_require__.bind(__webpack_require__, 1803));
        return component;
      },
      to: "/settings/review-workflows",
      exact: true
    },
    {
      async Component() {
        const component = await Promise.all(/* import() | review-workflows-settings-create-view */[__webpack_require__.e(8772), __webpack_require__.e(8696), __webpack_require__.e(8809)]).then(__webpack_require__.bind(__webpack_require__, 91280));
        return component;
      },
      to: "/settings/review-workflows/create",
      exact: true
    },
    {
      async Component() {
        const component = await Promise.all(/* import() | review-workflows-settings-edit-view */[__webpack_require__.e(8772), __webpack_require__.e(8696), __webpack_require__.e(277)]).then(__webpack_require__.bind(__webpack_require__, 63108));
        return component;
      },
      to: "/settings/review-workflows/:workflowId",
      exact: true
    }
  ] : [],
  ...window.strapi.features.isEnabled(window.strapi.features.SSO) ? [
    {
      async Component() {
        const component = await __webpack_require__.e(/* import() | sso-settings-page */ 1926).then(__webpack_require__.bind(__webpack_require__, 67061));
        return component;
      },
      to: "/settings/single-sign-on",
      exact: true
    }
  ] : []
];


/***/ })

}]);