"use strict";
(self["webpackChunkurban_cobix"] = self["webpackChunkurban_cobix"] || []).push([[4563],{

/***/ 289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* reexport */ useAdminUsers)
});

// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(58528);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useAdminUsers/useAdminUsers.js


function useAdminUsers(params = {}, queryOptions = {}) {
  const { id = "", ...queryParams } = params;
  const { get } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  const { data, isError, isLoading, refetch } = (0,es.useQuery)(
    ["users", id, queryParams],
    async () => {
      const {
        data: { data: data2 }
      } = await get(`/admin/users/${id}`, {
        params: queryParams
      });
      return data2;
    },
    queryOptions
  );
  let users = [];
  if (id && data) {
    users = [data];
  } else if (Array.isArray(data?.results)) {
    users = data.results;
  }
  return {
    users,
    pagination: data?.pagination ?? null,
    isLoading,
    isError,
    refetch
  };
}

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useAdminUsers/index.js



/***/ }),

/***/ 2976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91616);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90954);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58528);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30195);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6442);






const Filters = ({ displayedFilters }) => {
  const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
  const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .a, { paddingTop: 1, paddingBottom: 1 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .$,
    {
      variant: "tertiary",
      ref: buttonRef,
      startIcon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null),
      onClick: handleToggle,
      size: "S"
    },
    formatMessage({ id: "app.utils.filters", defaultMessage: "Filters" })
  ), isVisible && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .FilterPopoverURLQuery */ .LC,
    {
      displayedFilters,
      isVisible,
      onToggle: handleToggle,
      source: buttonRef
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .FilterListURLQuery */ .cZ, { filtersSchema: displayedFilters }));
};
Filters.propTypes = {
  displayedFilters: prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf(
    prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
      name: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string).isRequired,
      metadatas: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({ label: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string) }),
      fieldSchema: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({ type: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string) })
    })
  ).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filters);


/***/ }),

/***/ 67626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* binding */ UserListPageCE),
  A: () => (/* binding */ ListPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(71808);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(7562);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ActionLayout.js
var ActionLayout = __webpack_require__(96492);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(40121);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(58528);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(55373);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var react_redux_es = __webpack_require__(69733);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(56347);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useAdminUsers/index.js + 1 modules
var useAdminUsers = __webpack_require__(289);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useEnterprise/index.js + 1 modules
var useEnterprise = __webpack_require__(74090);
// EXTERNAL MODULE: ./.cache/admin/src/pages/App/selectors.js
var selectors = __webpack_require__(71526);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/components/Filters/index.js
var Filters = __webpack_require__(2976);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(90954);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Envelop.js
var Envelop = __webpack_require__(4624);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/CreateAction/index.js





const CreateActionCE = ({ onClick }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ react.createElement(Button/* Button */.$, { onClick, startIcon: /* @__PURE__ */ react.createElement(Envelop/* default */.A, null), size: "S" }, formatMessage({
    id: "Settings.permissions.users.create",
    defaultMessage: "Invite new user"
  }));
};
CreateActionCE.propTypes = {
  onClick: (prop_types_default()).func.isRequired
};

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.js
var Tbody = __webpack_require__(88920);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.js
var Tr = __webpack_require__(15912);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.js
var Cell = __webpack_require__(69782);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseCheckbox/BaseCheckbox.js + 2 modules
var BaseCheckbox = __webpack_require__(45073);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(97939);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(98016);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(63292);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(91616);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.js
var Pencil = __webpack_require__(46748);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.js
var Trash = __webpack_require__(34487);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 7 modules
var utils = __webpack_require__(48468);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/DynamicTable/TableRows/index.js








const TableRows = ({
  canDelete,
  headers,
  entriesToDelete,
  onClickDelete,
  onSelectRow,
  withMainAction,
  withBulkActions,
  rows
}) => {
  const {
    push,
    location: { pathname }
  } = (0,react_router/* useHistory */.W6)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ react.createElement(Tbody/* Tbody */.N, null, rows.map((data) => {
    const isChecked = entriesToDelete.findIndex((id) => id === data.id) !== -1;
    return /* @__PURE__ */ react.createElement(
      Tr.Tr,
      {
        key: data.id,
        ...(0,helper_plugin_esm/* onRowClick */.qM)({
          fn: () => push(`${pathname}/${data.id}`),
          condition: withBulkActions
        })
      },
      withMainAction && /* @__PURE__ */ react.createElement(Cell.Td, { ...helper_plugin_esm/* stopPropagation */.dG }, /* @__PURE__ */ react.createElement(
        BaseCheckbox/* BaseCheckbox */.J,
        {
          "aria-label": formatMessage(
            {
              id: "app.component.table.select.one-entry",
              defaultMessage: `Select {target}`
            },
            { target: (0,utils/* getFullName */.dS)(data.firstname, data.lastname) }
          ),
          checked: isChecked,
          onChange: () => {
            onSelectRow({ name: data.id, value: !isChecked });
          }
        }
      )),
      headers.map(({ key, cellFormatter, name, ...rest }) => {
        return /* @__PURE__ */ react.createElement(Cell.Td, { key }, typeof cellFormatter === "function" ? cellFormatter(data, { key, name, formatMessage, ...rest }) : /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { textColor: "neutral800" }, data[name] || "-"));
      }),
      withBulkActions && /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { justifyContent: "end" }, /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.K,
        {
          onClick: () => push(`${pathname}/${data.id}`),
          label: formatMessage(
            { id: "app.component.table.edit", defaultMessage: "Edit {target}" },
            { target: (0,utils/* getFullName */.dS)(data.firstname, data.lastname) }
          ),
          noBorder: true,
          icon: /* @__PURE__ */ react.createElement(Pencil/* default */.A, null)
        }
      ), canDelete && /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingLeft: 1, ...helper_plugin_esm/* stopPropagation */.dG }, /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.K,
        {
          onClick: () => onClickDelete(data.id),
          label: formatMessage(
            { id: "global.delete-target", defaultMessage: "Delete {target}" },
            { target: (0,utils/* getFullName */.dS)(data.firstname, data.lastname) }
          ),
          noBorder: true,
          icon: /* @__PURE__ */ react.createElement(Trash/* default */.A, null)
        }
      ))))
    );
  }));
};
TableRows.defaultProps = {
  canDelete: false,
  entriesToDelete: [],
  onClickDelete() {
  },
  onSelectRow() {
  },
  rows: [],
  withBulkActions: false,
  withMainAction: false
};
TableRows.propTypes = {
  canDelete: (prop_types_default()).bool,
  entriesToDelete: (prop_types_default()).array,
  headers: (prop_types_default()).array.isRequired,
  onClickDelete: (prop_types_default()).func,
  onSelectRow: (prop_types_default()).func,
  rows: (prop_types_default()).array,
  withBulkActions: (prop_types_default()).bool,
  withMainAction: (prop_types_default()).bool
};
/* harmony default export */ const DynamicTable_TableRows = (TableRows);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.js
var ModalLayout = __webpack_require__(75056);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.js
var ModalHeader = __webpack_require__(91267);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.js
var ModalBody = __webpack_require__(43418);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(96630);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(16473);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.js
var ModalFooter = __webpack_require__(25625);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Breadcrumbs/Breadcrumbs.js + 1 modules
var Breadcrumbs = __webpack_require__(67066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Breadcrumbs/Crumb.js
var Crumb = __webpack_require__(95998);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(7425);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/components/MagicLink/index.js
var components_MagicLink = __webpack_require__(94844);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/components/SelectRoles/index.js
var SelectRoles = __webpack_require__(85842);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(20627);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/ModalForm/constants.js


const FORM_INITIAL_VALUES = {
  firstname: "",
  lastname: "",
  email: "",
  roles: []
};
const ROLE_LAYOUT = [];
const FORM_LAYOUT = [
  [
    {
      intlLabel: {
        id: "Auth.form.firstname.label",
        defaultMessage: "First name"
      },
      name: "firstname",
      placeholder: {
        id: "Auth.form.firstname.placeholder",
        defaultMessage: "e.g. Kai"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      },
      required: true
    },
    {
      intlLabel: {
        id: "Auth.form.lastname.label",
        defaultMessage: "Last name"
      },
      name: "lastname",
      placeholder: {
        id: "Auth.form.lastname.placeholder",
        defaultMessage: "e.g. Doe"
      },
      type: "text",
      size: {
        col: 6,
        xs: 12
      }
    }
  ],
  [
    {
      intlLabel: {
        id: "Auth.form.email.label",
        defaultMessage: "Email"
      },
      name: "email",
      placeholder: {
        id: "Auth.form.email.placeholder",
        defaultMessage: "e.g. kai.doe@strapi.io"
      },
      type: "email",
      size: {
        col: 6,
        xs: 12
      },
      required: true
    }
  ]
];
const FORM_SCHEMA = yup_es/* object */.Ik().shape({
  firstname: yup_es/* string */.Yj().trim().required(helper_plugin_esm/* translatedErrors */.iW.required),
  lastname: yup_es/* string */.Yj(),
  email: yup_es/* string */.Yj().email(helper_plugin_esm/* translatedErrors */.iW.email).required(helper_plugin_esm/* translatedErrors */.iW.required),
  roles: yup_es/* array */.YO().min(1, helper_plugin_esm/* translatedErrors */.iW.required).required(helper_plugin_esm/* translatedErrors */.iW.required)
});
const STEPPER = {
  create: {
    buttonSubmitLabel: {
      id: "app.containers.Users.ModalForm.footer.button-success",
      defaultMessage: "Invite user"
    },
    isDisabled: false,
    next: "magic-link"
  },
  "magic-link": {
    buttonSubmitLabel: { id: "global.finish", defaultMessage: "Finish" },
    isDisabled: true,
    next: null
  }
};

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/ModalForm/index.js












const ModalForm = ({ onSuccess, onToggle }) => {
  const [currentStep, setStep] = (0,react.useState)("create");
  const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
  const [registrationToken, setRegistrationToken] = (0,react.useState)(null);
  const { formatMessage } = (0,useIntl/* default */.A)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { lockApp, unlockApp } = (0,helper_plugin_esm/* useOverlayBlocker */.MA)();
  const { post } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  const roleLayout = (0,useEnterprise/* useEnterprise */.h)(
    ROLE_LAYOUT,
    async () => (await __webpack_require__.e(/* import() */ 9452).then(__webpack_require__.bind(__webpack_require__, 99452))).ROLE_LAYOUT,
    {
      combine(ceRoles, eeRoles) {
        return [...ceRoles, eeRoles];
      },
      defaultValue: []
    }
  );
  const initialValues = (0,useEnterprise/* useEnterprise */.h)(
    FORM_INITIAL_VALUES,
    async () => (await __webpack_require__.e(/* import() */ 9452).then(__webpack_require__.bind(__webpack_require__, 99452))).FORM_INITIAL_VALUES,
    {
      combine(ceValues, eeValues) {
        return {
          ...ceValues,
          ...eeValues
        };
      },
      defaultValue: FORM_INITIAL_VALUES
    }
  );
  const MagicLink = (0,useEnterprise/* useEnterprise */.h)(
    components_MagicLink/* MagicLinkCE */.g,
    async () => (await __webpack_require__.e(/* import() */ 9034).then(__webpack_require__.bind(__webpack_require__, 69034))).MagicLinkEE
  );
  const postMutation = (0,es.useMutation)(
    (body) => {
      return post("/admin/users", body);
    },
    {
      async onSuccess({ data }) {
        setRegistrationToken(data.data.registrationToken);
        await onSuccess();
        goNext();
        setIsSubmitting(false);
      },
      onError(err) {
        setIsSubmitting(false);
        toggleNotification({
          type: "warning",
          message: { id: "notification.error", defaultMessage: "An error occured" }
        });
        throw err;
      },
      onSettled() {
        unlockApp();
      }
    }
  );
  const headerTitle = formatMessage({
    id: "Settings.permissions.users.create",
    defaultMessage: "Invite new user"
  });
  const handleSubmit = async (body, { setErrors }) => {
    lockApp();
    setIsSubmitting(true);
    try {
      await postMutation.mutateAsync(body);
    } catch (err) {
      unlockApp();
      if (err?.response?.data?.error.message === "Email already taken") {
        setErrors({ email: err.response.data.error.message });
      }
    }
  };
  const goNext = () => {
    if (next) {
      setStep(next);
    } else {
      onToggle();
    }
  };
  const { buttonSubmitLabel, isDisabled, next } = STEPPER[currentStep];
  const endActions = currentStep === "create" ? /* @__PURE__ */ react.createElement(Button/* Button */.$, { type: "submit", loading: isSubmitting }, formatMessage(buttonSubmitLabel)) : /* @__PURE__ */ react.createElement(Button/* Button */.$, { type: "button", loading: isSubmitting, onClick: onToggle }, formatMessage(buttonSubmitLabel));
  if (!MagicLink) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.k, { onClose: onToggle, labelledBy: "title" }, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.r, null, /* @__PURE__ */ react.createElement(Breadcrumbs/* Breadcrumbs */.B, { label: headerTitle }, /* @__PURE__ */ react.createElement(Crumb/* Crumb */.m, { isCurrent: true }, headerTitle))), /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.l1,
    {
      enableReinitialize: true,
      initialValues,
      onSubmit: handleSubmit,
      validationSchema: FORM_SCHEMA,
      validateOnChange: false
    },
    ({ errors, handleChange, values }) => {
      return /* @__PURE__ */ react.createElement(helper_plugin_esm/* Form */.lV, null, /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.c, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 6 }, currentStep !== "create" && /* @__PURE__ */ react.createElement(MagicLink, { registrationToken }), /* @__PURE__ */ react.createElement(Box/* Box */.a, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "beta", as: "h2" }, formatMessage({
        id: "app.components.Users.ModalCreateBody.block-title.details",
        defaultMessage: "User details"
      })), /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 1 }, /* @__PURE__ */ react.createElement(Grid/* Grid */.x, { gap: 5 }, FORM_LAYOUT.map((row) => {
        return row.map((input) => {
          return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { key: input.name, ...input.size }, /* @__PURE__ */ react.createElement(
            helper_plugin_esm/* GenericInput */.ah,
            {
              ...input,
              disabled: isDisabled,
              error: errors[input.name],
              onChange: handleChange,
              value: values[input.name]
            }
          ));
        });
      }))))), /* @__PURE__ */ react.createElement(Box/* Box */.a, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "beta", as: "h2" }, formatMessage({
        id: "global.roles",
        defaultMessage: "User's role"
      })), /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(Grid/* Grid */.x, { gap: 5 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6, xs: 12 }, /* @__PURE__ */ react.createElement(
        SelectRoles/* default */.A,
        {
          disabled: isDisabled,
          error: errors.roles,
          onChange: handleChange,
          value: values.roles
        }
      )), roleLayout.map((row) => {
        return row.map((input) => {
          return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { key: input.name, ...input.size }, /* @__PURE__ */ react.createElement(
            helper_plugin_esm/* GenericInput */.ah,
            {
              ...input,
              disabled: isDisabled,
              onChange: handleChange,
              value: values[input.name]
            }
          ));
        });
      })))))), /* @__PURE__ */ react.createElement(
        ModalFooter/* ModalFooter */.j,
        {
          startActions: /* @__PURE__ */ react.createElement(Button/* Button */.$, { variant: "tertiary", onClick: onToggle, type: "button" }, formatMessage({
            id: "app.components.Button.cancel",
            defaultMessage: "Cancel"
          })),
          endActions
        }
      ));
    }
  ));
};
ModalForm.propTypes = {
  onToggle: (prop_types_default()).func.isRequired,
  onSuccess: (prop_types_default()).func.isRequired
};
/* harmony default export */ const ListPage_ModalForm = (ModalForm);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/PaginationFooter/index.js




const PaginationFooter = ({ pagination }) => {
  return /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { alignItems: "flex-end", justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(helper_plugin_esm/* PageSizeURLQuery */._u, null), /* @__PURE__ */ react.createElement(helper_plugin_esm/* PaginationURLQuery */.W7, { pagination })));
};
PaginationFooter.defaultProps = {
  pagination: {
    pageCount: 0,
    pageSize: 10,
    total: 0
  }
};
PaginationFooter.propTypes = {
  pagination: prop_types_default().shape({
    page: (prop_types_default()).number,
    pageCount: (prop_types_default()).number,
    pageSize: (prop_types_default()).number,
    total: (prop_types_default()).number
  })
};
/* harmony default export */ const ListPage_PaginationFooter = (PaginationFooter);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/utils/displayedFilters.js
const displayedFilters = [
  {
    name: "firstname",
    metadatas: { label: "Firstname" },
    fieldSchema: { type: "string" }
  },
  {
    name: "lastname",
    metadatas: { label: "Lastname" },
    fieldSchema: { type: "string" }
  },
  {
    name: "email",
    metadatas: { label: "Email" },
    fieldSchema: { type: "email" }
  },
  {
    name: "username",
    metadatas: { label: "Username" },
    fieldSchema: { type: "string" }
  },
  {
    name: "isActive",
    metadatas: { label: "Active user" },
    fieldSchema: { type: "boolean" }
  }
];
/* harmony default export */ const utils_displayedFilters = (displayedFilters);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/utils/tableHeaders.js



const tableHeaders = [
  {
    name: "firstname",
    key: "firstname",
    metadatas: {
      label: {
        id: "Settings.permissions.users.firstname",
        defaultMessage: "Firstname"
      },
      sortable: true
    }
  },
  {
    name: "lastname",
    key: "lastname",
    metadatas: {
      label: {
        id: "Settings.permissions.users.lastname",
        defaultMessage: "Lastname"
      },
      sortable: true
    }
  },
  {
    key: "email",
    name: "email",
    metadatas: {
      label: { id: "Settings.permissions.users.email", defaultMessage: "Email" },
      sortable: true
    }
  },
  {
    key: "roles",
    name: "roles",
    metadatas: {
      label: {
        id: "Settings.permissions.users.roles",
        defaultMessage: "Roles"
      },
      sortable: false
    },
    cellFormatter({ roles }, { formatMessage }) {
      return /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { textColor: "neutral800" }, roles.map(
        (role) => formatMessage({
          id: `Settings.permissions.users.${role.code}`,
          defaultMessage: role.name
        })
      ).join(",\n"));
    }
  },
  {
    key: "username",
    name: "username",
    metadatas: {
      label: {
        id: "Settings.permissions.users.username",
        defaultMessage: "Username"
      },
      sortable: true
    }
  },
  {
    key: "isActive",
    name: "isActive",
    metadatas: {
      label: {
        id: "Settings.permissions.users.user-status",
        defaultMessage: "User status"
      },
      sortable: false
    },
    cellFormatter({ isActive }, { formatMessage }) {
      return /* @__PURE__ */ react.createElement(Flex/* Flex */.s, null, /* @__PURE__ */ react.createElement(helper_plugin_esm/* Status */.nW, { isActive, variant: isActive ? "success" : "danger" }), /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { textColor: "neutral800" }, formatMessage({
        id: isActive ? "Settings.permissions.users.active" : "Settings.permissions.users.inactive",
        defaultMessage: isActive ? "Active" : "Inactive"
      })));
    }
  }
];
/* harmony default export */ const utils_tableHeaders = (tableHeaders);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/ListPage/index.js


















const EE_LICENSE_LIMIT_QUERY_KEY = ["ee", "license-limit-info"];
const UserListPageCE = () => {
  const { post } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  const { formatAPIError } = (0,helper_plugin_esm/* useAPIErrorHandler */.wq)();
  const [isModalOpened, setIsModalOpen] = (0,react.useState)(false);
  const permissions = (0,react_redux_es/* useSelector */.d4)(selectors/* selectAdminPermissions */.G);
  const {
    allowedActions: { canCreate, canDelete, canRead }
  } = (0,helper_plugin_esm/* useRBAC */.ec)(permissions.settings.users);
  const queryClient = (0,es.useQueryClient)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { search } = (0,react_router/* useLocation */.zy)();
  (0,helper_plugin_esm/* useFocusWhenNavigate */.L4)();
  const {
    users,
    pagination,
    isError,
    isLoading,
    refetch: refetchAdminUsers
  } = (0,useAdminUsers/* useAdminUsers */.F)(lib_default().parse(search, { ignoreQueryPrefix: true }), {
    enabled: canRead
  });
  const CreateAction = (0,useEnterprise/* useEnterprise */.h)(
    CreateActionCE,
    async () => (await __webpack_require__.e(/* import() */ 224).then(__webpack_require__.bind(__webpack_require__, 80224))).CreateActionEE
  );
  const headers = utils_tableHeaders.map((header) => ({
    ...header,
    metadatas: {
      ...header.metadatas,
      label: formatMessage(header.metadatas.label)
    }
  }));
  const title = formatMessage({
    id: "global.users",
    defaultMessage: "Users"
  });
  const handleToggle = () => {
    setIsModalOpen((prev) => !prev);
  };
  const deleteAllMutation = (0,es.useMutation)(
    async (ids) => {
      await post("/admin/users/batch-delete", { ids });
    },
    {
      async onSuccess() {
        await refetchAdminUsers();
        await queryClient.refetchQueries(EE_LICENSE_LIMIT_QUERY_KEY);
      },
      onError(error) {
        toggleNotification({
          type: "warning",
          message: {
            id: "notification.error",
            message: formatAPIError(error),
            defaultMessage: "An error occured"
          }
        });
      }
    }
  );
  if (!CreateAction) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(Main/* Main */.g, { "aria-busy": isLoading }, /* @__PURE__ */ react.createElement(helper_plugin_esm/* SettingsPageTitle */.x7, { name: "Users" }), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.Q,
    {
      primaryAction: canCreate && /* @__PURE__ */ react.createElement(CreateAction, { onClick: handleToggle }),
      title,
      subtitle: formatMessage({
        id: "Settings.permissions.users.listview.header.subtitle",
        defaultMessage: "All the users who have access to the Strapi admin panel"
      })
    }
  ), canRead && /* @__PURE__ */ react.createElement(
    ActionLayout/* ActionLayout */.B,
    {
      startActions: /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
        helper_plugin_esm/* SearchURLQuery */.q7,
        {
          label: formatMessage(
            { id: "app.component.search.label", defaultMessage: "Search for {target}" },
            { target: title }
          )
        }
      ), /* @__PURE__ */ react.createElement(Filters/* default */.A, { displayedFilters: utils_displayedFilters }))
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.s, { canRead }, !canRead && /* @__PURE__ */ react.createElement(helper_plugin_esm/* NoPermissions */.UW, null), isError && /* @__PURE__ */ react.createElement("div", null, "TODO: An error occurred"), canRead && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    helper_plugin_esm/* DynamicTable */.Ee,
    {
      contentType: "Users",
      isLoading,
      onConfirmDeleteAll: deleteAllMutation.mutateAsync,
      onConfirmDelete: (id) => deleteAllMutation.mutateAsync([id]),
      headers,
      rows: users,
      withBulkActions: true,
      withMainAction: canDelete
    },
    /* @__PURE__ */ react.createElement(
      DynamicTable_TableRows,
      {
        canDelete,
        headers,
        rows: users,
        withBulkActions: true,
        withMainAction: canDelete
      }
    )
  ), pagination && /* @__PURE__ */ react.createElement(ListPage_PaginationFooter, { pagination }))), isModalOpened && /* @__PURE__ */ react.createElement(
    ListPage_ModalForm,
    {
      onSuccess: async () => {
        await refetchAdminUsers();
        await queryClient.refetchQueries(EE_LICENSE_LIMIT_QUERY_KEY);
      },
      onToggle: handleToggle
    }
  ));
};
const UsersListPageSwitch = () => {
  const UsersListPage = (0,useEnterprise/* useEnterprise */.h)(
    UserListPageCE,
    async () => (
      // eslint-disable-next-line import/no-cycle
      (await __webpack_require__.e(/* import() */ 6869).then(__webpack_require__.bind(__webpack_require__, 86869))).UserListPageEE
    )
  );
  if (!UsersListPage) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(UsersListPage, null);
};
/* harmony default export */ const ListPage = (UsersListPageSwitch);


/***/ }),

/***/ 50125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58528);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69733);
/* harmony import */ var _App_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71526);
/* harmony import */ var _ListPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67626);





const ProtectedListPage = () => {
  const permissions = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__/* .useSelector */ .d4)(_App_selectors__WEBPACK_IMPORTED_MODULE_3__/* .selectAdminPermissions */ .G);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .CheckPagePermissions */ .kz, { permissions: permissions.settings.users.main }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ListPage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtectedListPage);


/***/ }),

/***/ 16888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63292);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58528);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49464);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6442);






const MagicLinkWrapper = ({ children, target }) => {
  const toggleNotification = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useNotification */ .hN)();
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
  const { copy } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useClipboard */ .iD)();
  const copyLabel = formatMessage({
    id: "app.component.CopyToClipboard.label",
    defaultMessage: "Copy to clipboard"
  });
  const handleClick = async () => {
    const didCopy = await copy(target);
    if (didCopy) {
      toggleNotification({ type: "info", message: { id: "notification.link-copied" } });
    }
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .ContentBox */ .bQ,
    {
      endAction: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .IconButton */ .K, { label: copyLabel, noBorder: true, icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null), onClick: handleClick }),
      title: target,
      titleEllipsis: true,
      subtitle: children,
      icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { fontSize: 32 } }, "\u2709\uFE0F"),
      iconBackground: "neutral100"
    }
  );
};
MagicLinkWrapper.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().element), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)]).isRequired,
  target: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MagicLinkWrapper);


/***/ }),

/***/ 94844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ MagicLinkCE)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6442);
/* harmony import */ var _core_utils_basename__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13275);
/* harmony import */ var _MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16888);





const MagicLinkCE = ({ registrationToken }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)();
  const target = `${window.location.origin}${_core_utils_basename__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A}auth/register?registrationToken=${registrationToken}`;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MagicLinkWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, { target }, formatMessage({
    id: "app.components.Users.MagicLink.connect",
    defaultMessage: "Copy and share this link to give access to this user"
  }));
};
MagicLinkCE.defaultProps = {
  registrationToken: ""
};
MagicLinkCE.propTypes = {
  registrationToken: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};


/***/ }),

/***/ 85842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15074);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62431);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58528);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24046);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6442);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75942);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67336);








const rotation = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__/* .keyframes */ .i7)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;
const LoadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay.div`
  animation: ${rotation} 2s infinite linear;
`;
const Loader = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoadingWrapper, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null));
const fetchData = async () => {
  const { get } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .getFetchClient */ .GD)();
  const { data } = await get("/admin/roles");
  return data.data;
};
const SelectRoles = ({ disabled, error, onChange, value }) => {
  const { status, data } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(["roles"], fetchData, {
    staleTime: 5e4
  });
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)();
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const label = formatMessage({
    id: "app.components.Users.ModalCreateBody.block-title.roles",
    defaultMessage: "User's roles"
  });
  const hint = formatMessage({
    id: "app.components.Users.ModalCreateBody.block-title.roles.description",
    defaultMessage: "A user can have one or several roles"
  });
  const placeholder = formatMessage({
    id: "app.components.Select.placeholder",
    defaultMessage: "Select"
  });
  const startIcon = status === "loading" ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Loader, null) : void 0;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Select */ .l,
    {
      id: "roles",
      disabled,
      error: errorMessage,
      hint,
      label,
      name: "roles",
      onChange: (v) => {
        onChange({ target: { name: "roles", value: v } });
      },
      placeholder,
      multi: true,
      startIcon,
      value: value.map((v) => v.toString()),
      withTags: true,
      required: true
    },
    (data || []).map((role) => {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Option */ .c, { key: role.id, value: role.id.toString() }, formatMessage({
        id: `global.${role.code}`,
        defaultMessage: role.name
      }));
    })
  );
};
SelectRoles.defaultProps = {
  disabled: false,
  error: void 0
};
SelectRoles.propTypes = {
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool),
  error: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func).isRequired,
  value: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().array).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectRoles);


/***/ }),

/***/ 96492:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98016);


const o = ({ startActions: t, endActions: e }) => !t && !e ? null : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .s, { justifyContent: "space-between", alignItems: "flex-start", paddingBottom: 4, paddingLeft: 10, paddingRight: 10, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .s, { gap: 2, wrap: "wrap", children: t }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .s, { gap: 2, shrink: 0, wrap: "wrap", children: e })] });



/***/ }),

/***/ 4624:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);

const v = (h) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...h, children: [
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { fill: "#32324D", d: "M0 2.8A.8.8 0 0 1 .8 2h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2.8Z" }),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "path",
    {
      fill: "#32324D",
      d: "M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z"
    }
  ),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "path",
    {
      fill: "#32324D",
      d: "M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555Z"
    }
  )
] }), o = v;



/***/ })

}]);