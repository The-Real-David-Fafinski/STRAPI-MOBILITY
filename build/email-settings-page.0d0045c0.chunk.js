"use strict";
(self["webpackChunkurban_cobix"] = self["webpackChunkurban_cobix"] || []).push([[9051],{

/***/ 68517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Settings)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.js
var useNotifyAT = __webpack_require__(99532);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(71808);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(40121);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(98016);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(91616);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(97939);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(96630);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(16473);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(30524);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(90954);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(58528);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Envelop.js
var Envelop = __webpack_require__(4624);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-email/admin/src/constants.js
var constants = __webpack_require__(11753);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-email/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(92205);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var es = __webpack_require__(20627);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-email/admin/src/utils/schema.js


const schema = es/* object */.Ik().shape({
  email: es/* string */.Yj().email(helper_plugin_esm/* translatedErrors */.iW.email).required(helper_plugin_esm/* translatedErrors */.iW.required)
});
/* harmony default export */ const utils_schema = (schema);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.js
var Select = __webpack_require__(15074);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.js
var Option = __webpack_require__(62431);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(67336);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-email/admin/src/pages/Settings/components/Configuration.js






const DocumentationLink = styled_components_browser_esm/* default */.Ay.a`
  color: ${({ theme }) => theme.colors.primary600};
`;
const Configuration = ({ config }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 1 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "delta", as: "h2" }, formatMessage({
    id: (0,getTrad/* default */.A)("Settings.email.plugin.title.config"),
    defaultMessage: "Configuration"
  })), /* @__PURE__ */ react.createElement(Typography/* Typography */.o, null, formatMessage(
    {
      id: (0,getTrad/* default */.A)("Settings.email.plugin.text.configuration"),
      defaultMessage: "The plugin is configured through the {file} file, checkout this {link} for the documentation."
    },
    {
      file: "./config/plugins.js",
      link: /* @__PURE__ */ react.createElement(
        DocumentationLink,
        {
          href: "https://docs.strapi.io/developer-docs/latest/plugins/email.html",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        formatMessage({
          id: (0,getTrad/* default */.A)("link"),
          defaultMessage: "Link"
        })
      )
    }
  ))), /* @__PURE__ */ react.createElement(Grid/* Grid */.x, { gap: 5 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.k,
    {
      name: "shipper-email",
      label: formatMessage({
        id: (0,getTrad/* default */.A)("Settings.email.plugin.label.defaultFrom"),
        defaultMessage: "Default sender email"
      }),
      placeholder: formatMessage({
        id: (0,getTrad/* default */.A)("Settings.email.plugin.placeholder.defaultFrom"),
        defaultMessage: "ex: Strapi No-Reply '<'no-reply@strapi.io'>'"
      }),
      disabled: true,
      onChange: () => {
      },
      value: config.settings.defaultFrom
    }
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.k,
    {
      name: "response-email",
      label: formatMessage({
        id: (0,getTrad/* default */.A)("Settings.email.plugin.label.defaultReplyTo"),
        defaultMessage: "Default response email"
      }),
      placeholder: formatMessage({
        id: (0,getTrad/* default */.A)("Settings.email.plugin.placeholder.defaultReplyTo"),
        defaultMessage: `ex: Strapi '<'example@strapi.io'>'`
      }),
      disabled: true,
      onChange: () => {
      },
      value: config.settings.defaultReplyTo
    }
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
    Select/* Select */.l,
    {
      name: "email-provider",
      label: formatMessage({
        id: (0,getTrad/* default */.A)("Settings.email.plugin.label.provider"),
        defaultMessage: "Email provider"
      }),
      disabled: true,
      onChange: () => {
      },
      value: config.provider
    },
    /* @__PURE__ */ react.createElement(Option/* Option */.c, { value: config.provider }, config.provider)
  ))));
};
Configuration.propTypes = {
  config: prop_types_default().shape({
    provider: (prop_types_default()).string,
    settings: prop_types_default().shape({
      defaultFrom: (prop_types_default()).string,
      defaultReplyTo: (prop_types_default()).string
    })
  }).isRequired
};
/* harmony default export */ const components_Configuration = (Configuration);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(7562);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-email/admin/src/pages/Settings/components/EmailHeader.js





const EmailHeader = () => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    helper_plugin_esm/* SettingsPageTitle */.x7,
    {
      name: formatMessage({
        id: (0,getTrad/* default */.A)("Settings.email.plugin.title"),
        defaultMessage: "Configuration"
      })
    }
  ), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.Q,
    {
      id: "title",
      title: formatMessage({
        id: (0,getTrad/* default */.A)("Settings.email.plugin.title"),
        defaultMessage: "Configuration"
      }),
      subtitle: formatMessage({
        id: (0,getTrad/* default */.A)("Settings.email.plugin.subTitle"),
        defaultMessage: "Test the settings for the Email plugin"
      })
    }
  ));
};
/* harmony default export */ const components_EmailHeader = (EmailHeader);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-email/admin/src/pages/Settings/utils/api.js

const fetchEmailSettings = async () => {
  const { get } = (0,helper_plugin_esm/* getFetchClient */.GD)();
  const { data } = await get("/email/settings");
  return data.config;
};
const postEmailTest = async (body) => {
  const { post } = (0,helper_plugin_esm/* getFetchClient */.GD)();
  await post("/email/test", body);
};


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-email/admin/src/pages/Settings/index.js











const ProtectedSettingsPage = () => /* @__PURE__ */ react.createElement(helper_plugin_esm/* CheckPagePermissions */.kz, { permissions: constants/* PERMISSIONS */.J.settings }, /* @__PURE__ */ react.createElement(SettingsPage, null));
const SettingsPage = () => {
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { lockApp, unlockApp } = (0,helper_plugin_esm/* useOverlayBlocker */.MA)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.W)();
  (0,helper_plugin_esm/* useFocusWhenNavigate */.L4)();
  const [formErrors, setFormErrors] = (0,react.useState)({});
  const [isLoading, setIsLoading] = (0,react.useState)(false);
  const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
  const [testAddress, setTestAddress] = (0,react.useState)("");
  const [isTestAddressValid, setIsTestAddressValid] = (0,react.useState)(false);
  const [config, setConfig] = (0,react.useState)({
    provider: "",
    settings: { defaultFrom: "", defaultReplyTo: "", testAddress: "" }
  });
  (0,react.useEffect)(() => {
    setIsLoading(true);
    fetchEmailSettings().then((config2) => {
      notifyStatus(
        formatMessage({
          id: (0,getTrad/* default */.A)("Settings.email.plugin.notification.data.loaded"),
          defaultMessage: "Email settings data has been loaded"
        })
      );
      setConfig(config2);
      const testAddressFound = config2?.settings?.testAddress;
      if (testAddressFound) {
        setTestAddress(testAddressFound);
      }
    }).catch(
      () => toggleNotification({
        type: "warning",
        message: formatMessage({
          id: (0,getTrad/* default */.A)("Settings.email.plugin.notification.config.error"),
          defaultMessage: "Failed to retrieve the email config"
        })
      })
    ).finally(() => setIsLoading(false));
  }, [formatMessage, toggleNotification, notifyStatus]);
  (0,react.useEffect)(() => {
    if (formErrors.email) {
      const input = document.querySelector("#test-address-input");
      input.focus();
    }
  }, [formErrors]);
  (0,react.useEffect)(() => {
    utils_schema.validate({ email: testAddress }, { abortEarly: false }).then(() => setIsTestAddressValid(true)).catch(() => setIsTestAddressValid(false));
  }, [testAddress]);
  const handleChange = (e) => {
    setTestAddress(() => e.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await utils_schema.validate({ email: testAddress }, { abortEarly: false });
      setIsSubmitting(true);
      lockApp();
      postEmailTest({ to: testAddress }).then(() => {
        toggleNotification({
          type: "success",
          message: formatMessage(
            {
              id: (0,getTrad/* default */.A)("Settings.email.plugin.notification.test.success"),
              defaultMessage: "Email test succeeded, check the {to} mailbox"
            },
            { to: testAddress }
          )
        });
      }).catch(() => {
        toggleNotification({
          type: "warning",
          message: formatMessage(
            {
              id: (0,getTrad/* default */.A)("Settings.email.plugin.notification.test.error"),
              defaultMessage: "Failed to send a test mail to {to}"
            },
            { to: testAddress }
          )
        });
      }).finally(() => {
        setIsSubmitting(false);
        unlockApp();
      });
    } catch (error) {
      setFormErrors((0,helper_plugin_esm/* getYupInnerErrors */.ed)(error));
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(Main/* Main */.g, { labelledBy: "title", "aria-busy": "true" }, /* @__PURE__ */ react.createElement(components_EmailHeader, null), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.s, null, /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.Bl, null)));
  }
  return /* @__PURE__ */ react.createElement(Main/* Main */.g, { labelledBy: "title", "aria-busy": isSubmitting }, /* @__PURE__ */ react.createElement(components_EmailHeader, null), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.s, null, /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 7 }, /* @__PURE__ */ react.createElement(
    Box/* Box */.a,
    {
      background: "neutral0",
      hasRadius: true,
      shadow: "filterShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7
    },
    /* @__PURE__ */ react.createElement(components_Configuration, { config })
  ), /* @__PURE__ */ react.createElement(
    Box/* Box */.a,
    {
      background: "neutral0",
      hasRadius: true,
      shadow: "filterShadow",
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 7,
      paddingRight: 7
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "delta", as: "h2" }, formatMessage({
      id: (0,getTrad/* default */.A)("Settings.email.plugin.title.test"),
      defaultMessage: "Test email delivery"
    })), /* @__PURE__ */ react.createElement(Grid/* Grid */.x, { gap: 5, alignItems: "end" }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.k,
      {
        id: "test-address-input",
        name: "test-address",
        onChange: handleChange,
        label: formatMessage({
          id: (0,getTrad/* default */.A)("Settings.email.plugin.label.testAddress"),
          defaultMessage: "Recipient email"
        }),
        value: testAddress,
        error: formErrors.email?.id && formatMessage({
          id: (0,getTrad/* default */.A)(`${formErrors.email?.id}`),
          defaultMessage: "This is an invalid email"
        }),
        placeholder: formatMessage({
          id: (0,getTrad/* default */.A)("Settings.email.plugin.placeholder.testAddress"),
          defaultMessage: "ex: developer@example.com"
        })
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 7, s: 12 }, /* @__PURE__ */ react.createElement(
      Button/* Button */.$,
      {
        loading: isSubmitting,
        disabled: !isTestAddressValid,
        type: "submit",
        startIcon: /* @__PURE__ */ react.createElement(Envelop/* default */.A, null)
      },
      formatMessage({
        id: (0,getTrad/* default */.A)("Settings.email.plugin.button.test-email"),
        defaultMessage: "Send test email"
      })
    ))))
  )))));
};
/* harmony default export */ const Settings = (ProtectedSettingsPage);


/***/ }),

/***/ 40121:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91616);


const d = ({ children: t }) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .a, { paddingLeft: 10, paddingRight: 10, children: t });



/***/ }),

/***/ 7562:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


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

/***/ 71808:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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