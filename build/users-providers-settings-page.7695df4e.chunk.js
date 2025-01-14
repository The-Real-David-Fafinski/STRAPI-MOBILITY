(self["webpackChunkurban_cobix"] = self["webpackChunkurban_cobix"] || []).push([[8750],{

/***/ 36481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ProvidersPage: () => (/* binding */ ProvidersPage),
  "default": () => (/* binding */ Providers)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.js
var useNotifyAT = __webpack_require__(99532);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js
var Layout = __webpack_require__(63214);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(71808);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(7562);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(40121);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.js
var Table = __webpack_require__(28244);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.js
var Thead = __webpack_require__(64154);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.js
var Tr = __webpack_require__(15912);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.js
var Cell = __webpack_require__(69782);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(97939);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(69688);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.js
var Tbody = __webpack_require__(88920);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(63292);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(58528);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.js
var Pencil = __webpack_require__(46748);
// EXTERNAL MODULE: ./node_modules/lodash/has.js
var has = __webpack_require__(61448);
var has_default = /*#__PURE__*/__webpack_require__.n(has);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(55808);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.js
var ModalLayout = __webpack_require__(75056);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalHeader.js
var ModalHeader = __webpack_require__(91267);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.js
var ModalBody = __webpack_require__(43418);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(98016);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(96630);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(16473);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalFooter.js
var ModalFooter = __webpack_require__(25625);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(90954);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Breadcrumbs/Breadcrumbs.js + 1 modules
var Breadcrumbs = __webpack_require__(67066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/Breadcrumbs/Crumb.js
var Crumb = __webpack_require__(95998);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(7425);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ToggleInput/ToggleInput.js
var ToggleInput = __webpack_require__(4556);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(30524);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/FormModal/Input/index.js




const Input = ({
  description,
  disabled,
  intlLabel,
  error,
  name,
  onChange,
  placeholder,
  providerToEditName,
  type,
  value
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const inputValue = name === "noName" ? `${window.strapi.backendURL}/api/connect/${providerToEditName}/callback` : value;
  const label = formatMessage(
    { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
    { provider: providerToEditName, ...intlLabel.values }
  );
  const hint = description ? formatMessage(
    { id: description.id, defaultMessage: description.defaultMessage },
    { provider: providerToEditName, ...description.values }
  ) : "";
  if (type === "bool") {
    return /* @__PURE__ */ react.createElement(
      ToggleInput/* ToggleInput */.l,
      {
        "aria-label": name,
        checked: value,
        disabled,
        hint,
        label,
        name,
        offLabel: formatMessage({
          id: "app.components.ToggleCheckbox.off-label",
          defaultMessage: "Off"
        }),
        onLabel: formatMessage({
          id: "app.components.ToggleCheckbox.on-label",
          defaultMessage: "On"
        }),
        onChange: (e) => {
          onChange({ target: { name, value: e.target.checked } });
        }
      }
    );
  }
  const formattedPlaceholder = placeholder ? formatMessage(
    { id: placeholder.id, defaultMessage: placeholder.defaultMessage },
    { ...placeholder.values }
  ) : "";
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  return /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.k,
    {
      "aria-label": name,
      disabled,
      error: errorMessage,
      label,
      name,
      onChange,
      placeholder: formattedPlaceholder,
      type,
      value: inputValue
    }
  );
};
Input.defaultProps = {
  description: null,
  disabled: false,
  error: "",
  placeholder: null,
  value: ""
};
Input.propTypes = {
  description: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  disabled: (prop_types_default()).bool,
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  placeholder: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  providerToEditName: (prop_types_default()).string.isRequired,
  type: (prop_types_default()).string.isRequired,
  value: prop_types_default().oneOfType([(prop_types_default()).bool, (prop_types_default()).string])
};
/* harmony default export */ const FormModal_Input = (Input);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/components/FormModal/index.js








const FormModal = ({
  headerBreadcrumbs,
  initialData,
  isSubmiting,
  layout,
  isOpen,
  onSubmit,
  onToggle,
  providerToEditName
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  if (!isOpen) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.k, { onClose: onToggle, labelledBy: "title" }, /* @__PURE__ */ react.createElement(ModalHeader/* ModalHeader */.r, null, /* @__PURE__ */ react.createElement(Breadcrumbs/* Breadcrumbs */.B, { label: headerBreadcrumbs.join(", ") }, headerBreadcrumbs.map((crumb, index, arr) => /* @__PURE__ */ react.createElement(Crumb/* Crumb */.m, { isCurrent: index === arr.length - 1, key: crumb }, crumb)))), /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.l1,
    {
      onSubmit: (values) => onSubmit(values),
      initialValues: initialData,
      validationSchema: layout.schema,
      validateOnChange: false
    },
    ({ errors, handleChange, values }) => {
      return /* @__PURE__ */ react.createElement(helper_plugin_esm/* Form */.lV, null, /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.c, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 1 }, /* @__PURE__ */ react.createElement(Grid/* Grid */.x, { gap: 5 }, layout.form.map((row) => {
        return row.map((input) => {
          return /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { key: input.name, col: input.size, xs: 12 }, /* @__PURE__ */ react.createElement(
            FormModal_Input,
            {
              ...input,
              error: errors[input.name],
              onChange: handleChange,
              value: values[input.name],
              providerToEditName
            }
          ));
        });
      })))), /* @__PURE__ */ react.createElement(
        ModalFooter/* ModalFooter */.j,
        {
          startActions: /* @__PURE__ */ react.createElement(Button/* Button */.$, { variant: "tertiary", onClick: onToggle, type: "button" }, formatMessage({
            id: "app.components.Button.cancel",
            defaultMessage: "Cancel"
          })),
          endActions: /* @__PURE__ */ react.createElement(Button/* Button */.$, { type: "submit", loading: isSubmiting }, formatMessage({ id: "global.save", defaultMessage: "Save" }))
        }
      ));
    }
  ));
};
FormModal.defaultProps = {
  initialData: null,
  providerToEditName: null
};
FormModal.propTypes = {
  headerBreadcrumbs: prop_types_default().arrayOf((prop_types_default()).string).isRequired,
  initialData: (prop_types_default()).object,
  layout: prop_types_default().shape({
    form: prop_types_default().arrayOf((prop_types_default()).array),
    schema: (prop_types_default()).object
  }).isRequired,
  isOpen: (prop_types_default()).bool.isRequired,
  isSubmiting: (prop_types_default()).bool.isRequired,
  onSubmit: (prop_types_default()).func.isRequired,
  onToggle: (prop_types_default()).func.isRequired,
  providerToEditName: (prop_types_default()).string
};
/* harmony default export */ const components_FormModal = (FormModal);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/constants.js
var constants = __webpack_require__(69224);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js + 2 modules
var utils = __webpack_require__(56914);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Providers/utils/api.js


const fetchData = async (toggleNotification) => {
  try {
    const { get } = (0,helper_plugin_esm/* getFetchClient */.GD)();
    const { data } = await get((0,utils/* getRequestURL */.X3)("providers"));
    return data;
  } catch (err) {
    toggleNotification({
      type: "warning",
      message: { id: "notification.error" }
    });
    throw new Error("error");
  }
};
const putProvider = (body) => {
  const { put } = (0,helper_plugin_esm/* getFetchClient */.GD)();
  return put((0,utils/* getRequestURL */.X3)("providers"), body);
};

// EXTERNAL MODULE: ./node_modules/lodash/sortBy.js
var sortBy = __webpack_require__(33031);
var sortBy_default = /*#__PURE__*/__webpack_require__.n(sortBy);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Providers/utils/createProvidersArray.js

const createProvidersArray = (data) => {
  return sortBy_default()(
    Object.keys(data).reduce((acc, current) => {
      const { icon: iconName, enabled, subdomain } = data[current];
      const icon = iconName === "envelope" ? ["fas", "envelope"] : ["fab", iconName];
      if (subdomain !== void 0) {
        acc.push({ name: current, icon, enabled, subdomain });
      } else {
        acc.push({ name: current, icon, enabled });
      }
      return acc;
    }, []),
    "name"
  );
};
/* harmony default export */ const utils_createProvidersArray = (createProvidersArray);

// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(20627);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Providers/utils/forms.js



const callbackLabel = {
  id: (0,utils/* getTrad */.gT)("PopUpForm.Providers.redirectURL.front-end.label"),
  defaultMessage: "The redirect URL to your front-end app"
};
const callbackPlaceholder = {
  id: "http://www.client-app.com",
  defaultMessage: "http://www.client-app.com"
};
const enabledDescription = {
  id: (0,utils/* getTrad */.gT)("PopUpForm.Providers.enabled.description"),
  defaultMessage: "If disabled, users won't be able to use this provider."
};
const enabledLabel = {
  id: (0,utils/* getTrad */.gT)("PopUpForm.Providers.enabled.label"),
  defaultMessage: "Enable"
};
const keyLabel = { id: (0,utils/* getTrad */.gT)("PopUpForm.Providers.key.label"), defaultMessage: "Client ID" };
const hintLabel = {
  id: (0,utils/* getTrad */.gT)("PopUpForm.Providers.redirectURL.label"),
  defaultMessage: "The redirect URL to add in your {provider} application configurations"
};
const textPlaceholder = {
  id: (0,utils/* getTrad */.gT)("PopUpForm.Providers.key.placeholder"),
  defaultMessage: "TEXT"
};
const secretLabel = {
  id: (0,utils/* getTrad */.gT)("PopUpForm.Providers.secret.label"),
  defaultMessage: "Client Secret"
};
const forms_forms = {
  email: {
    form: [
      [
        {
          intlLabel: enabledLabel,
          name: "enabled",
          type: "bool",
          description: enabledDescription,
          size: 6
          // TODO check if still needed
          // validations: {
          //   required: true,
          // },
        }
      ]
    ],
    schema: yup_es/* object */.Ik().shape({
      enabled: yup_es/* bool */.lc().required(helper_plugin_esm/* translatedErrors */.iW.required)
    })
  },
  providers: {
    form: [
      [
        {
          intlLabel: enabledLabel,
          name: "enabled",
          type: "bool",
          description: enabledDescription,
          size: 6,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: keyLabel,
          name: "key",
          type: "text",
          placeholder: textPlaceholder,
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: secretLabel,
          name: "secret",
          type: "text",
          placeholder: textPlaceholder,
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: callbackLabel,
          placeholder: callbackPlaceholder,
          name: "callback",
          type: "text",
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: hintLabel,
          name: "noName",
          type: "text",
          validations: {},
          size: 12,
          disabled: true
        }
      ]
    ],
    schema: yup_es/* object */.Ik().shape({
      enabled: yup_es/* bool */.lc().required(helper_plugin_esm/* translatedErrors */.iW.required),
      key: yup_es/* string */.Yj().when("enabled", {
        is: true,
        then: yup_es/* string */.Yj().required(helper_plugin_esm/* translatedErrors */.iW.required),
        otherwise: yup_es/* string */.Yj()
      }),
      secret: yup_es/* string */.Yj().when("enabled", {
        is: true,
        then: yup_es/* string */.Yj().required(helper_plugin_esm/* translatedErrors */.iW.required),
        otherwise: yup_es/* string */.Yj()
      }),
      callback: yup_es/* string */.Yj().when("enabled", {
        is: true,
        then: yup_es/* string */.Yj().required(helper_plugin_esm/* translatedErrors */.iW.required),
        otherwise: yup_es/* string */.Yj()
      })
    })
  },
  providersWithSubdomain: {
    form: [
      [
        {
          intlLabel: enabledLabel,
          name: "enabled",
          type: "bool",
          description: enabledDescription,
          size: 6,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: keyLabel,
          name: "key",
          type: "text",
          placeholder: textPlaceholder,
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: secretLabel,
          name: "secret",
          type: "text",
          placeholder: textPlaceholder,
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: {
            id: (0,utils/* getTrad */.gT)({ id: "PopUpForm.Providers.jwksurl.label" }),
            defaultMessage: "JWKS URL"
          },
          name: "jwksurl",
          type: "text",
          placeholder: textPlaceholder,
          size: 12,
          validations: {
            required: false
          }
        }
      ],
      [
        {
          intlLabel: {
            id: (0,utils/* getTrad */.gT)("PopUpForm.Providers.subdomain.label"),
            defaultMessage: "Host URI (Subdomain)"
          },
          name: "subdomain",
          type: "text",
          placeholder: {
            id: (0,utils/* getTrad */.gT)("PopUpForm.Providers.subdomain.placeholder"),
            defaultMessage: "my.subdomain.com"
          },
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: callbackLabel,
          placeholder: callbackPlaceholder,
          name: "callback",
          type: "text",
          size: 12,
          validations: {
            required: true
          }
        }
      ],
      [
        {
          intlLabel: hintLabel,
          name: "noName",
          type: "text",
          validations: {},
          size: 12,
          disabled: true
        }
      ]
    ],
    schema: yup_es/* object */.Ik().shape({
      enabled: yup_es/* bool */.lc().required(helper_plugin_esm/* translatedErrors */.iW.required),
      key: yup_es/* string */.Yj().when("enabled", {
        is: true,
        then: yup_es/* string */.Yj().required(helper_plugin_esm/* translatedErrors */.iW.required),
        otherwise: yup_es/* string */.Yj()
      }),
      secret: yup_es/* string */.Yj().when("enabled", {
        is: true,
        then: yup_es/* string */.Yj().required(helper_plugin_esm/* translatedErrors */.iW.required),
        otherwise: yup_es/* string */.Yj()
      }),
      subdomain: yup_es/* string */.Yj().when("enabled", {
        is: true,
        then: yup_es/* string */.Yj().required(helper_plugin_esm/* translatedErrors */.iW.required),
        otherwise: yup_es/* string */.Yj()
      }),
      callback: yup_es/* string */.Yj().when("enabled", {
        is: true,
        then: yup_es/* string */.Yj().required(helper_plugin_esm/* translatedErrors */.iW.required),
        otherwise: yup_es/* string */.Yj()
      })
    })
  }
};
/* harmony default export */ const utils_forms = (forms_forms);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/Providers/index.js














const ProvidersPage = () => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  (0,helper_plugin_esm/* useFocusWhenNavigate */.L4)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.W)();
  const queryClient = (0,es.useQueryClient)();
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.z1)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const [isOpen, setIsOpen] = (0,react.useState)(false);
  const [isSubmiting, setIsSubmiting] = (0,react.useState)(false);
  const [providerToEditName, setProviderToEditName] = (0,react.useState)(null);
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { lockApp, unlockApp } = (0,helper_plugin_esm/* useOverlayBlocker */.MA)();
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canUpdate }
  } = (0,helper_plugin_esm/* useRBAC */.ec)({ update: constants/* PERMISSIONS */.J.updateProviders });
  const {
    isLoading: isLoadingForData,
    data: modifiedData,
    isFetching
  } = (0,es.useQuery)("get-providers", () => fetchData(toggleNotification), {
    onSuccess() {
      notifyStatus(
        formatMessage({
          id: (0,utils/* getTrad */.gT)("Providers.data.loaded"),
          defaultMessage: "Providers have been loaded"
        })
      );
    },
    initialData: {}
  });
  const isLoading = isLoadingForData || isFetching;
  const submitMutation = (0,es.useMutation)(putProvider, {
    async onSuccess() {
      await queryClient.invalidateQueries("get-providers");
      toggleNotification({
        type: "info",
        message: { id: (0,utils/* getTrad */.gT)("notification.success.submit") }
      });
      trackUsageRef.current("didEditAuthenticationProvider");
      setIsSubmiting(false);
      handleToggleModal();
      unlockApp();
    },
    onError() {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
      unlockApp();
      setIsSubmiting(false);
    },
    refetchActive: false
  });
  const providers = (0,react.useMemo)(() => utils_createProvidersArray(modifiedData), [modifiedData]);
  const rowCount = providers.length;
  const isProviderWithSubdomain = (0,react.useMemo)(() => {
    if (!providerToEditName) {
      return false;
    }
    const providerToEdit = providers.find((obj) => obj.name === providerToEditName);
    return has_default()(providerToEdit, "subdomain");
  }, [providers, providerToEditName]);
  const pageTitle = formatMessage({
    id: (0,utils/* getTrad */.gT)("HeaderNav.link.providers"),
    defaultMessage: "Providers"
  });
  const layoutToRender = (0,react.useMemo)(() => {
    if (providerToEditName === "email") {
      return utils_forms.email;
    }
    if (isProviderWithSubdomain) {
      return utils_forms.providersWithSubdomain;
    }
    return utils_forms.providers;
  }, [providerToEditName, isProviderWithSubdomain]);
  const handleToggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  const handleClickEdit = (provider) => {
    if (canUpdate) {
      setProviderToEditName(provider.name);
      handleToggleModal();
    }
  };
  const handleSubmit = async (values) => {
    setIsSubmiting(true);
    lockApp();
    trackUsageRef.current("willEditAuthenticationProvider");
    const body = { ...modifiedData, [providerToEditName]: values };
    submitMutation.mutate({ providers: body });
  };
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.P, null, /* @__PURE__ */ react.createElement(helper_plugin_esm/* SettingsPageTitle */.x7, { name: pageTitle }), /* @__PURE__ */ react.createElement(Main/* Main */.g, null, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.Q,
    {
      title: formatMessage({
        id: (0,utils/* getTrad */.gT)("HeaderNav.link.providers"),
        defaultMessage: "Providers"
      })
    }
  ), isLoading || isLoadingForPermissions ? /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.Bl, null) : /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.s, null, /* @__PURE__ */ react.createElement(Table/* Table */.X, { colCount: 3, rowCount: rowCount + 1 }, /* @__PURE__ */ react.createElement(Thead/* Thead */.d, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "global.name", defaultMessage: "Name" }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: (0,utils/* getTrad */.gT)("Providers.status"), defaultMessage: "Status" }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "sigma" }, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.s, null, formatMessage({
    id: "global.settings",
    defaultMessage: "Settings"
  })))))), /* @__PURE__ */ react.createElement(Tbody/* Tbody */.N, null, providers.map((provider) => /* @__PURE__ */ react.createElement(
    Tr.Tr,
    {
      key: provider.name,
      ...(0,helper_plugin_esm/* onRowClick */.qM)({
        fn: () => handleClickEdit(provider),
        condition: canUpdate
      })
    },
    /* @__PURE__ */ react.createElement(Cell.Td, { width: "45%" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { fontWeight: "semiBold", textColor: "neutral800" }, provider.name)),
    /* @__PURE__ */ react.createElement(Cell.Td, { width: "65%" }, /* @__PURE__ */ react.createElement(
      Typography/* Typography */.o,
      {
        textColor: provider.enabled ? "success600" : "danger600",
        "data-testid": `enable-${provider.name}`
      },
      provider.enabled ? formatMessage({
        id: "global.enabled",
        defaultMessage: "Enabled"
      }) : formatMessage({
        id: "global.disabled",
        defaultMessage: "Disabled"
      })
    )),
    /* @__PURE__ */ react.createElement(Cell.Td, { ...helper_plugin_esm/* stopPropagation */.dG }, canUpdate && /* @__PURE__ */ react.createElement(
      IconButton/* IconButton */.K,
      {
        onClick: () => handleClickEdit(provider),
        noBorder: true,
        icon: /* @__PURE__ */ react.createElement(Pencil/* default */.A, null),
        label: "Edit"
      }
    ))
  )))))), /* @__PURE__ */ react.createElement(
    components_FormModal,
    {
      initialData: modifiedData[providerToEditName],
      isOpen,
      isSubmiting,
      layout: layoutToRender,
      headerBreadcrumbs: [
        formatMessage({
          id: (0,utils/* getTrad */.gT)("PopUpForm.header.edit.providers"),
          defaultMessage: "Edit Provider"
        }),
        upperFirst_default()(providerToEditName)
      ],
      onToggle: handleToggleModal,
      onSubmit: handleSubmit,
      providerToEditName
    }
  ));
};
const ProtectedProvidersPage = () => /* @__PURE__ */ react.createElement(helper_plugin_esm/* CheckPagePermissions */.kz, { permissions: constants/* PERMISSIONS */.J.readProviders }, /* @__PURE__ */ react.createElement(ProvidersPage, null));
/* harmony default export */ const Providers = (ProtectedProvidersPage);


/***/ }),

/***/ 56914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  mr: () => (/* reexport */ utils_cleanPermissions),
  X3: () => (/* reexport */ utils_getRequestURL),
  gT: () => (/* reexport */ getTrad/* default */.A)
});

// UNUSED EXPORTS: formatPolicies

// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(62193);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/cleanPermissions.js

const cleanPermissions = (permissions) => Object.keys(permissions).reduce((acc, current) => {
  const currentPermission = permissions[current].controllers;
  const cleanedControllers = Object.keys(currentPermission).reduce((acc2, curr) => {
    if (isEmpty_default()(currentPermission[curr])) {
      return acc2;
    }
    acc2[curr] = currentPermission[curr];
    return acc2;
  }, {});
  if (isEmpty_default()(cleanedControllers)) {
    return acc;
  }
  acc[current] = { controllers: cleanedControllers };
  return acc;
}, {});
/* harmony default export */ const utils_cleanPermissions = (cleanPermissions);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pluginId.js
var pluginId = __webpack_require__(4655);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/getRequestURL.js

const getRequestURL = (endPoint) => `/${pluginId/* default */.A}/${endPoint}`;
/* harmony default export */ const utils_getRequestURL = (getRequestURL);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(97552);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js






/***/ }),

/***/ 80909:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(30641),
    createBaseEach = __webpack_require__(38329);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ 5128:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(80909),
    isArrayLike = __webpack_require__(64894);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ 46155:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(34932),
    baseGet = __webpack_require__(47422),
    baseIteratee = __webpack_require__(15389),
    baseMap = __webpack_require__(5128),
    baseSortBy = __webpack_require__(73937),
    baseUnary = __webpack_require__(27301),
    compareMultiple = __webpack_require__(43714),
    identity = __webpack_require__(83488),
    isArray = __webpack_require__(56449);

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap(iteratees, function(iteratee) {
      if (isArray(iteratee)) {
        return function(value) {
          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [identity];
  }

  var index = -1;
  iteratees = arrayMap(iteratees, baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),

/***/ 73937:
/***/ ((module) => {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),

/***/ 53730:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(44394);

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),

/***/ 43714:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var compareAscending = __webpack_require__(53730);

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),

/***/ 38329:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(64894);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ 33031:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(83120),
    baseOrderBy = __webpack_require__(46155),
    baseRest = __webpack_require__(69302),
    isIterateeCall = __webpack_require__(36800);

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

module.exports = sortBy;


/***/ }),

/***/ 40121:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91616);


const d = ({ children: t }) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .a, { paddingLeft: 10, paddingRight: 10, children: t });



/***/ }),

/***/ 7562:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q: () => (/* binding */ HeaderLayout_b)
});

// UNUSED EXPORTS: BaseHeaderLayout

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(67336);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useElementOnScreen.js

const b = (t) => {
  const e = (0,react.useRef)(null), [s, c] = (0,react.useState)(!0), i = ([n]) => {
    c(n.isIntersecting);
  };
  return (0,react.useEffect)(() => {
    const n = e.current, r = new IntersectionObserver(i, t);
    return n && r.observe(e.current), () => {
      n && r.disconnect();
    };
  }, [e, t]), [e, s];
};


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var dist = __webpack_require__(10263);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useResizeObserver.js


const c = (e, i) => {
  const t = (0,dist/* useCallbackRef */.c)(i);
  (0,react.useLayoutEffect)(() => {
    const r = new ResizeObserver(t);
    return Array.isArray(e) ? e.forEach((n) => {
      n.current && r.observe(n.current);
    }) : e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e, t]);
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(91616);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(98016);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(97939);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js








const HeaderLayout_b = (r) => {
  const t = (0,react.useRef)(null), [i, d] = (0,react.useState)(null), [a, h] = b({
    root: null,
    rootMargin: "0px",
    threshold: 0
  });
  return c(a, () => {
    a.current && d(a.current.getBoundingClientRect());
  }), (0,react.useEffect)(() => {
    t.current && d(t.current.getBoundingClientRect());
  }, [t]), (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)("div", { style: { height: i?.height }, ref: a, children: h && (0,jsx_runtime.jsx)(p, { ref: t, ...r }) }), !h && (0,jsx_runtime.jsx)(p, { ...r, sticky: !0, width: i?.width })] });
};
HeaderLayout_b.displayName = "HeaderLayout";
const C = (0,styled_components_browser_esm/* default */.Ay)((0,Box/* Box */.a))`
  width: ${({ width: r }) => r ? `${r / 16}rem` : void 0};
  z-index: ${({ theme: r }) => r.zIndices[1]};
`, p = react.forwardRef(({ navigationAction: r, primaryAction: t, secondaryAction: i, subtitle: d, title: a, sticky: h, width: c, ...s }, g) => {
  const f = typeof d == "string";
  return h ? (0,jsx_runtime.jsx)(C, { paddingLeft: 6, paddingRight: 6, paddingTop: 3, paddingBottom: 3, position: "fixed", top: 0, right: 0, background: "neutral0", shadow: "tableShadow", width: c, "data-strapi-header-sticky": !0, children: (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { justifyContent: "space-between", children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.s, { children: [r && (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingRight: 3, children: r }), (0,jsx_runtime.jsxs)(Box/* Box */.a, { children: [(0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "beta", as: "h1", ...s, children: a }), f ? (0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "pi", textColor: "neutral600", children: d }) : d] }), i ? (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingLeft: 4, children: i }) : null] }), (0,jsx_runtime.jsx)(Flex/* Flex */.s, { children: t ? (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingLeft: 2, children: t }) : void 0 })] }) }) : (0,jsx_runtime.jsxs)(Box/* Box */.a, { ref: g, paddingLeft: 10, paddingRight: 10, paddingBottom: 8, paddingTop: r ? 6 : 8, background: "neutral100", "data-strapi-header": !0, children: [r ? (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingBottom: 2, children: r }) : null, (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { justifyContent: "space-between", children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.s, { minWidth: 0, children: [(0,jsx_runtime.jsx)(Typography/* Typography */.o, { as: "h1", variant: "alpha", ...s, children: a }), i ? (0,jsx_runtime.jsx)(Box/* Box */.a, { paddingLeft: 4, children: i }) : null] }), t] }), f ? (0,jsx_runtime.jsx)(Typography/* Typography */.o, { variant: "epsilon", textColor: "neutral600", as: "p", children: d }) : d] });
});



/***/ }),

/***/ 63214:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67336);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91616);



const d = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)((0,_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a))`
  display: grid;
  grid-template-columns: ${({ hasSideNav: o }) => o ? "auto 1fr" : "1fr"};
`, m = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)((0,_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a))`
  overflow-x: hidden;
`, f = ({ sideNav: o, children: e }) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(d, { hasSideNav: !!o, children: [o, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, { paddingBottom: 10, children: e })] });



/***/ }),

/***/ 71808:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67336);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91616);



const a = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)((0,_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a))`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`, m = ({ labelledBy: o = "main-content-title", ...n }) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, { "aria-labelledby": o, as: "main", id: "main-content", tabIndex: -1, ...n });



/***/ })

}]);