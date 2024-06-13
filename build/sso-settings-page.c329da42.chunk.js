"use strict";
(self["webpackChunkurban_cobix"] = self["webpackChunkurban_cobix"] || []).push([[1926],{

/***/ 67061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SingleSignOn: () => (/* binding */ SingleSignOn),
  "default": () => (/* binding */ pages_SingleSignOn)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js
var Layout = __webpack_require__(63214);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(71808);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(7562);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(90954);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(40121);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(98016);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(97939);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(96630);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(16473);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ToggleInput/ToggleInput.js
var ToggleInput = __webpack_require__(4556);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.js
var Select = __webpack_require__(15074);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.js
var Option = __webpack_require__(62431);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/MultiSelect.js
var MultiSelect = __webpack_require__(50497);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(58528);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(26437);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(2404);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(69733);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 23 modules
var hooks = __webpack_require__(79380);
// EXTERNAL MODULE: ./.cache/admin/src/pages/App/selectors.js
var selectors = __webpack_require__(71526);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 7 modules
var utils = __webpack_require__(48468);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(20627);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/SingleSignOn/utils/schema.js


const schema = yup_es/* object */.Ik().shape({
  autoRegister: yup_es/* bool */.lc().required(helper_plugin_esm/* translatedErrors */.iW.required),
  defaultRole: yup_es/* mixed */.gl().when("autoRegister", (value, initSchema) => {
    return value ? initSchema.required(helper_plugin_esm/* translatedErrors */.iW.required) : initSchema.nullable();
  }),
  ssoLockedRoles: yup_es/* array */.YO().nullable().of(
    yup_es/* mixed */.gl().when("ssoLockedRoles", (value, initSchema) => {
      return value ? initSchema.required(helper_plugin_esm/* translatedErrors */.iW.required) : initSchema.nullable();
    })
  )
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/SingleSignOn/index.js











const SingleSignOn = () => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const permissions = (0,es/* useSelector */.d4)(selectors/* selectAdminPermissions */.G);
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canUpdate, canReadRoles }
  } = (0,helper_plugin_esm/* useRBAC */.ec)({
    ...permissions.settings.sso,
    readRoles: permissions.settings.roles.read
  });
  const [
    { formErrors, initialData, isLoading, modifiedData, showHeaderButtonLoader },
    // eslint-disable-next-line no-unused-vars
    dispatch,
    { handleChange, handleSubmit }
  ] = (0,hooks/* useSettingsForm */.T6)((0,utils/* getRequestUrl */.rh)("providers/options"), utils_schema, () => {
  }, [
    "autoRegister",
    "defaultRole",
    "ssoLockedRoles"
  ]);
  const { roles } = (0,hooks/* useRolesList */.QL)(canReadRoles);
  (0,helper_plugin_esm/* useFocusWhenNavigate */.L4)();
  const showLoader = isLoadingForPermissions || isLoading;
  const isHeaderButtonDisabled = isEqual_default()(initialData, modifiedData);
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.P, null, /* @__PURE__ */ react.createElement(helper_plugin_esm/* SettingsPageTitle */.x7, { name: "SSO" }), /* @__PURE__ */ react.createElement(Main/* Main */.g, { tabIndex: -1 }, /* @__PURE__ */ react.createElement(
    "form",
    {
      onSubmit: (e) => {
        if (isHeaderButtonDisabled) {
          e.preventDefault();
          return;
        }
        handleSubmit(e);
      }
    },
    /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.Q,
      {
        primaryAction: /* @__PURE__ */ react.createElement(
          Button/* Button */.$,
          {
            "data-testid": "save-button",
            disabled: isHeaderButtonDisabled,
            loading: showHeaderButtonLoader,
            startIcon: /* @__PURE__ */ react.createElement(Check/* default */.A, null),
            type: "submit",
            size: "L"
          },
          formatMessage({
            id: "global.save",
            defaultMessage: "Save"
          })
        ),
        title: formatMessage({ id: "Settings.sso.title", defaultMessage: "Single Sign-On" }),
        subtitle: formatMessage({
          id: "Settings.sso.description",
          defaultMessage: "Configure the settings for the Single Sign-On feature."
        })
      }
    ),
    /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.s, null, showLoader ? /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.Bl, null) : /* @__PURE__ */ react.createElement(
      Flex/* Flex */.s,
      {
        direction: "column",
        alignItems: "stretch",
        gap: 4,
        background: "neutral0",
        padding: 6,
        shadow: "filterShadow",
        hasRadius: true
      },
      /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "delta", as: "h2" }, formatMessage({
        id: "global.settings",
        defaultMessage: "Settings"
      })),
      /* @__PURE__ */ react.createElement(Grid/* Grid */.x, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6, m: 6, s: 12 }, /* @__PURE__ */ react.createElement(
        ToggleInput/* ToggleInput */.l,
        {
          "aria-label": "autoRegister",
          "data-testid": "autoRegister",
          disabled: !canUpdate,
          checked: modifiedData.autoRegister,
          hint: formatMessage({
            id: "Settings.sso.form.registration.description",
            defaultMessage: "Create new user on SSO login if no account exists"
          }),
          label: formatMessage({
            id: "Settings.sso.form.registration.label",
            defaultMessage: "Auto-registration"
          }),
          name: "autoRegister",
          offLabel: formatMessage({
            id: "app.components.ToggleCheckbox.off-label",
            defaultMessage: "Off"
          }),
          onLabel: formatMessage({
            id: "app.components.ToggleCheckbox.on-label",
            defaultMessage: "On"
          }),
          onChange: (e) => {
            handleChange({
              target: { name: "autoRegister", value: e.target.checked }
            });
          }
        }
      )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6, m: 6, s: 12 }, /* @__PURE__ */ react.createElement(
        Select/* Select */.l,
        {
          disabled: !canUpdate,
          hint: formatMessage({
            id: "Settings.sso.form.defaultRole.description",
            defaultMessage: "It will attach the new authenticated user to the selected role"
          }),
          error: formErrors.defaultRole ? formatMessage({
            id: formErrors.defaultRole.id,
            defaultMessage: formErrors.defaultRole.id
          }) : "",
          label: formatMessage({
            id: "Settings.sso.form.defaultRole.label",
            defaultMessage: "Default role"
          }),
          name: "defaultRole",
          onChange: (value) => {
            handleChange({ target: { name: "defaultRole", value } });
          },
          placeholder: formatMessage({
            id: "components.InputSelect.option.placeholder",
            defaultMessage: "Choose here"
          }),
          value: modifiedData.defaultRole
        },
        roles.map(({ id, name }) => /* @__PURE__ */ react.createElement(Option/* Option */.c, { key: id, value: id.toString() }, name))
      )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6, m: 6, s: 12 }, /* @__PURE__ */ react.createElement(
        MultiSelect/* MultiSelect */.KF,
        {
          disabled: !canUpdate,
          hint: formatMessage({
            id: "Settings.sso.form.localAuthenticationLock.description",
            defaultMessage: "Select the roles for which you want to disable the local authentication"
          }),
          error: formErrors.ssoLockedRoles ? formatMessage({
            id: formErrors.ssoLockedRoles.id,
            defaultMessage: formErrors.ssoLockedRoles.id
          }) : "",
          label: formatMessage({
            id: "Settings.sso.form.localAuthenticationLock.label",
            defaultMessage: "Local authentication lock-out"
          }),
          name: "ssoLockedRoles",
          onChange: (value) => {
            handleChange({ target: { name: "ssoLockedRoles", value } });
          },
          placeholder: formatMessage({
            id: "components.InputSelect.option.placeholder",
            defaultMessage: "Choose here"
          }),
          onClear: () => {
            const emptyArray = [];
            handleChange({ target: { name: "ssoLockedRoles", emptyArray } });
          },
          value: modifiedData.ssoLockedRoles || [],
          withTags: true
        },
        roles.map(({ id, name }) => /* @__PURE__ */ react.createElement(MultiSelect/* MultiSelectOption */.fe, { key: id, value: id.toString() }, name))
      )))
    ))
  )));
};
const ProtectedSSO = () => {
  const permissions = (0,es/* useSelector */.d4)(selectors/* selectAdminPermissions */.G);
  return /* @__PURE__ */ react.createElement(helper_plugin_esm/* CheckPagePermissions */.kz, { permissions: permissions.settings.sso.main }, /* @__PURE__ */ react.createElement(SingleSignOn, null));
};
/* harmony default export */ const pages_SingleSignOn = (ProtectedSSO);


/***/ })

}]);