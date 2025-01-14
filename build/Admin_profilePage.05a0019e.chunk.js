"use strict";
(self["webpackChunkurban_cobix"] = self["webpackChunkurban_cobix"] || []).push([[7003],{

/***/ 40025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_ProfilePage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.js
var useNotifyAT = __webpack_require__(99532);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(71808);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(7562);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(40121);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(90954);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(91616);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(98016);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(58528);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(26437);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(7425);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(68154);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
// EXTERNAL MODULE: ./.cache/admin/src/components/LocalesProvider/useLocalesProvider.js
var useLocalesProvider = __webpack_require__(99498);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 23 modules
var hooks = __webpack_require__(79380);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 7 modules
var utils = __webpack_require__(48468);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(30524);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldAction.js
var FieldAction = __webpack_require__(69118);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(97939);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(96630);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(16473);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Eye.js
var Eye = __webpack_require__(89376);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EyeStriked.js
var EyeStriked = __webpack_require__(29948);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(67336);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/ProfilePage/components/Password/index.js







const PasswordInput = (0,styled_components_browser_esm/* default */.Ay)((0,TextInput/* TextInput */.k))`
  ::-ms-reveal {
    display: none;
  }
`;
const FieldActionWrapper = (0,styled_components_browser_esm/* default */.Ay)((0,FieldAction/* FieldAction */.T))`
  svg {
    height: ${(0,helper_plugin_esm/* pxToRem */.a8)(16)};
    width: ${(0,helper_plugin_esm/* pxToRem */.a8)(16)};
    path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }
`;
const Password = ({ errors, onChange, values }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const [currentPasswordShown, setCurrentPasswordShown] = (0,react.useState)(false);
  const [passwordShown, setPasswordShown] = (0,react.useState)(false);
  const [passwordConfirmShown, setPasswordConfirmShown] = (0,react.useState)(false);
  return /* @__PURE__ */ react.createElement(
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
      id: "global.change-password",
      defaultMessage: "Change password"
    })), /* @__PURE__ */ react.createElement(Grid/* Grid */.x, { gap: 5 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { s: 12, col: 6 }, /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.k,
      {
        error: errors.currentPassword ? formatMessage({
          id: errors.currentPassword,
          defaultMessage: errors.currentPassword
        }) : "",
        onChange,
        value: values.currentPassword,
        label: formatMessage({
          id: "Auth.form.currentPassword.label",
          defaultMessage: "Current Password"
        }),
        name: "currentPassword",
        type: currentPasswordShown ? "text" : "password",
        endAction: /* @__PURE__ */ react.createElement(
          FieldActionWrapper,
          {
            onClick: (e) => {
              e.stopPropagation();
              setCurrentPasswordShown((prev) => !prev);
            },
            label: formatMessage(
              currentPasswordShown ? {
                id: "Auth.form.password.show-password",
                defaultMessage: "Show password"
              } : {
                id: "Auth.form.password.hide-password",
                defaultMessage: "Hide password"
              }
            )
          },
          currentPasswordShown ? /* @__PURE__ */ react.createElement(Eye/* default */.A, null) : /* @__PURE__ */ react.createElement(EyeStriked/* default */.A, null)
        )
      }
    ))), /* @__PURE__ */ react.createElement(Grid/* Grid */.x, { gap: 5 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { s: 12, col: 6 }, /* @__PURE__ */ react.createElement(
      PasswordInput,
      {
        error: errors.password ? formatMessage({
          id: errors.password,
          defaultMessage: errors.password
        }) : "",
        onChange,
        value: values.password,
        label: formatMessage({
          id: "global.password",
          defaultMessage: "Password"
        }),
        name: "password",
        type: passwordShown ? "text" : "password",
        autoComplete: "new-password",
        endAction: /* @__PURE__ */ react.createElement(
          FieldActionWrapper,
          {
            onClick: (e) => {
              e.stopPropagation();
              setPasswordShown((prev) => !prev);
            },
            label: formatMessage(
              passwordShown ? {
                id: "Auth.form.password.show-password",
                defaultMessage: "Show password"
              } : {
                id: "Auth.form.password.hide-password",
                defaultMessage: "Hide password"
              }
            )
          },
          passwordShown ? /* @__PURE__ */ react.createElement(Eye/* default */.A, null) : /* @__PURE__ */ react.createElement(EyeStriked/* default */.A, null)
        )
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { s: 12, col: 6 }, /* @__PURE__ */ react.createElement(
      PasswordInput,
      {
        error: errors.confirmPassword ? formatMessage({
          id: errors.confirmPassword,
          defaultMessage: errors.confirmPassword
        }) : "",
        onChange,
        value: values.confirmPassword,
        label: formatMessage({
          id: "Auth.form.confirmPassword.label",
          defaultMessage: "Password confirmation"
        }),
        name: "confirmPassword",
        type: passwordConfirmShown ? "text" : "password",
        autoComplete: "new-password",
        endAction: /* @__PURE__ */ react.createElement(
          FieldActionWrapper,
          {
            onClick: (e) => {
              e.stopPropagation();
              setPasswordConfirmShown((prev) => !prev);
            },
            label: formatMessage(
              passwordConfirmShown ? {
                id: "Auth.form.password.show-password",
                defaultMessage: "Show password"
              } : {
                id: "Auth.form.password.hide-password",
                defaultMessage: "Hide password"
              }
            )
          },
          passwordConfirmShown ? /* @__PURE__ */ react.createElement(Eye/* default */.A, null) : /* @__PURE__ */ react.createElement(EyeStriked/* default */.A, null)
        )
      }
    ))))
  );
};
Password.propTypes = {
  errors: prop_types_default().shape({
    currentPassword: (prop_types_default()).string,
    password: (prop_types_default()).string,
    confirmPassword: (prop_types_default()).string
  }),
  onChange: (prop_types_default()).func,
  values: prop_types_default().shape({
    currentPassword: (prop_types_default()).string,
    password: (prop_types_default()).string,
    confirmPassword: (prop_types_default()).string
  })
};
Password.defaultProps = {
  errors: {},
  onChange() {
  },
  values: {
    currentPassword: "",
    password: "",
    confirmPassword: ""
  }
};
/* harmony default export */ const components_Password = (Password);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.js
var Select = __webpack_require__(15074);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.js
var Option = __webpack_require__(62431);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(55808);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/ProfilePage/components/Preferences/index.js





const Preferences = ({ onChange, values, localeNames, allApplicationThemes }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const themesToDisplay = Object.keys(allApplicationThemes).filter(
    (themeName) => allApplicationThemes[themeName]
  );
  return /* @__PURE__ */ react.createElement(
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
    /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 1 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "delta", as: "h2" }, formatMessage({
      id: "Settings.profile.form.section.experience.title",
      defaultMessage: "Experience"
    })), /* @__PURE__ */ react.createElement(Typography/* Typography */.o, null, formatMessage(
      {
        id: "Settings.profile.form.section.experience.interfaceLanguageHelp",
        defaultMessage: "Preference changes will apply only to you. More information is available {here}."
      },
      {
        here: /* @__PURE__ */ react.createElement(
          Box/* Box */.a,
          {
            as: "a",
            color: "primary600",
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#locales"
          },
          formatMessage({
            id: "Settings.profile.form.section.experience.here",
            defaultMessage: "here"
          })
        )
      }
    ))), /* @__PURE__ */ react.createElement(Grid/* Grid */.x, { gap: 5 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { s: 12, col: 6 }, /* @__PURE__ */ react.createElement(
      Select/* Select */.l,
      {
        label: formatMessage({
          id: "Settings.profile.form.section.experience.interfaceLanguage",
          defaultMessage: "Interface language"
        }),
        placeholder: formatMessage({
          id: "global.select",
          defaultMessage: "Select"
        }),
        hint: formatMessage({
          id: "Settings.profile.form.section.experience.interfaceLanguage.hint",
          defaultMessage: "This will only display your own interface in the chosen language."
        }),
        onClear: () => {
          onChange({
            target: { name: "preferedLanguage", value: null }
          });
        },
        clearLabel: formatMessage({
          id: "Settings.profile.form.section.experience.clear.select",
          defaultMessage: "Clear the interface language selected"
        }),
        value: values.preferedLanguage,
        onChange: (e) => {
          onChange({
            target: { name: "preferedLanguage", value: e }
          });
        }
      },
      Object.entries(localeNames).map(([language, langName]) => /* @__PURE__ */ react.createElement(Option/* Option */.c, { value: language, key: language }, langName))
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { s: 12, col: 6 }, /* @__PURE__ */ react.createElement(
      Select/* Select */.l,
      {
        label: formatMessage({
          id: "Settings.profile.form.section.experience.mode.label",
          defaultMessage: "Interface mode"
        }),
        placeholder: formatMessage({
          id: "components.Select.placeholder",
          defaultMessage: "Select"
        }),
        hint: formatMessage({
          id: "Settings.profile.form.section.experience.mode.hint",
          defaultMessage: "Displays your interface in the chosen mode."
        }),
        value: values.currentTheme,
        onChange: (e) => {
          onChange({
            target: { name: "currentTheme", value: e }
          });
        }
      },
      themesToDisplay.map((theme) => /* @__PURE__ */ react.createElement(Option/* Option */.c, { value: theme, key: theme }, formatMessage(
        {
          id: "Settings.profile.form.section.experience.mode.option-label",
          defaultMessage: "{name} mode"
        },
        {
          name: formatMessage({
            id: theme,
            defaultMessage: upperFirst_default()(theme)
          })
        }
      )))
    ))))
  );
};
Preferences.propTypes = {
  allApplicationThemes: (prop_types_default()).object,
  onChange: (prop_types_default()).func,
  values: prop_types_default().shape({
    preferedLanguage: (prop_types_default()).string,
    currentTheme: (prop_types_default()).string
  }),
  localeNames: (prop_types_default()).object
};
Preferences.defaultProps = {
  allApplicationThemes: {},
  onChange() {
  },
  values: {
    preferedLanguage: null,
    currentTheme: ""
  },
  localeNames: {}
};
/* harmony default export */ const components_Preferences = (Preferences);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/ProfilePage/components/UserInfo/index.js





const UserInfo = ({ errors, onChange, values }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ react.createElement(
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
      id: "global.profile",
      defaultMessage: "Profile"
    })), /* @__PURE__ */ react.createElement(Grid/* Grid */.x, { gap: 5 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { s: 12, col: 6 }, /* @__PURE__ */ react.createElement(
      helper_plugin_esm/* GenericInput */.ah,
      {
        intlLabel: {
          id: "Auth.form.firstname.label",
          defaultMessage: "First name"
        },
        error: errors.firstname,
        onChange,
        value: values.firstname,
        type: "text",
        name: "firstname",
        required: true
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { s: 12, col: 6 }, /* @__PURE__ */ react.createElement(
      helper_plugin_esm/* GenericInput */.ah,
      {
        intlLabel: {
          id: "Auth.form.lastname.label",
          defaultMessage: "Last name"
        },
        error: errors.lastname,
        onChange,
        value: values.lastname,
        type: "text",
        name: "lastname"
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { s: 12, col: 6 }, /* @__PURE__ */ react.createElement(
      helper_plugin_esm/* GenericInput */.ah,
      {
        intlLabel: { id: "Auth.form.email.label", defaultMessage: "Email" },
        error: errors.email,
        onChange,
        value: values.email,
        type: "email",
        name: "email",
        required: true
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { s: 12, col: 6 }, /* @__PURE__ */ react.createElement(
      helper_plugin_esm/* GenericInput */.ah,
      {
        intlLabel: {
          id: "Auth.form.username.label",
          defaultMessage: "Username"
        },
        error: errors.username,
        onChange,
        value: values.username,
        type: "text",
        name: "username"
      }
    ))))
  );
};
UserInfo.propTypes = {
  errors: prop_types_default().shape({
    firstname: (prop_types_default()).string,
    lastname: (prop_types_default()).string,
    username: (prop_types_default()).string,
    email: (prop_types_default()).string
  }),
  onChange: (prop_types_default()).func,
  values: prop_types_default().shape({
    firstname: (prop_types_default()).string,
    lastname: (prop_types_default()).string,
    username: (prop_types_default()).string,
    email: (prop_types_default()).string
  })
};
UserInfo.defaultProps = {
  errors: {},
  onChange() {
  },
  values: {
    firstname: "",
    lastname: "",
    username: "",
    email: ""
  }
};
/* harmony default export */ const components_UserInfo = (UserInfo);

// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(20627);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/index.js + 3 modules
var users = __webpack_require__(84241);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/ProfilePage/utils/schema.js


const schema = yup_es/* object */.Ik().shape(users/* profileValidation */.pK);
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/ProfilePage/index.js















const ProfilePage = () => {
  const { changeLocale, localeNames } = (0,useLocalesProvider/* default */.A)();
  const { setUserDisplayName } = (0,helper_plugin_esm/* useAppInfo */.Xe)();
  const queryClient = (0,es.useQueryClient)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.z1)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { lockApp, unlockApp } = (0,helper_plugin_esm/* useOverlayBlocker */.MA)();
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.W)();
  const { currentTheme, themes: allApplicationThemes, onChangeTheme } = (0,hooks/* useThemeToggle */.fD)();
  const { get, put } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  (0,helper_plugin_esm/* useFocusWhenNavigate */.L4)();
  const { isLoading: isLoadingUser, data } = (0,es.useQuery)(
    "user",
    async () => {
      const { data: data2 } = await get("/admin/users/me");
      return data2.data;
    },
    {
      onSuccess() {
        notifyStatus(
          formatMessage({
            id: "Settings.profile.form.notify.data.loaded",
            defaultMessage: "Your profile data has been loaded"
          })
        );
      },
      onError() {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error", defaultMessage: "An error occured" }
        });
      }
    }
  );
  const { isLoading: isLoadingSSO, data: dataSSO } = (0,es.useQuery)(
    ["providers", "isSSOLocked"],
    async () => {
      const {
        data: { data: data2 }
      } = await get("/admin/providers/isSSOLocked");
      return data2;
    },
    {
      enabled: window.strapi.isEE && window.strapi.features.isEnabled("sso"),
      onError() {
        toggleNotification({
          type: "warning",
          message: { id: "Settings.permissions.users.sso.provider.error" }
        });
      }
    }
  );
  const isLoading = isLoadingUser || isLoadingSSO;
  const submitMutation = (0,es.useMutation)(
    async (body) => {
      const { confirmPassword, currentTheme: currentTheme2, ...dataToSend } = body;
      const { data: data2 } = await put("/admin/users/me", dataToSend);
      return { ...data2.data, currentTheme: body.currentTheme };
    },
    {
      async onSuccess(data2) {
        await queryClient.invalidateQueries("user");
        const { email: email2, firstname: firstname2, lastname: lastname2, username: username2, preferedLanguage: preferedLanguage2 } = data2;
        helper_plugin_esm/* auth */.j2.setUserInfo({ email: email2, firstname: firstname2, lastname: lastname2, username: username2, preferedLanguage: preferedLanguage2 });
        const userDisplayName = data2.username || (0,utils/* getFullName */.dS)(data2.firstname, data2.lastname);
        setUserDisplayName(userDisplayName);
        changeLocale(data2.preferedLanguage);
        onChangeTheme(data2.currentTheme);
        trackUsage("didChangeMode", { newMode: data2.currentTheme });
        toggleNotification({
          type: "success",
          message: { id: "notification.success.saved", defaultMessage: "Saved" }
        });
      },
      onSettled() {
        unlockApp();
      },
      refetchActive: true
    }
  );
  const { isLoading: isSubmittingForm } = submitMutation;
  const handleSubmit = async (body, { setErrors }) => {
    lockApp();
    const username2 = body.username || null;
    submitMutation.mutate(
      { ...body, username: username2 },
      {
        onError(error) {
          const res = error?.response?.data;
          if (res?.data) {
            return setErrors(res.data);
          }
          return toggleNotification({
            type: "warning",
            message: { id: "notification.error", defaultMessage: "An error occured" }
          });
        }
      }
    );
  };
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(Main/* Main */.g, { "aria-busy": "true" }, /* @__PURE__ */ react.createElement(
      Helmet/* Helmet */.m,
      {
        title: formatMessage({
          id: "Settings.profile.form.section.helmet.title",
          defaultMessage: "User profile"
        })
      }
    ), /* @__PURE__ */ react.createElement(
      HeaderLayout/* HeaderLayout */.Q,
      {
        title: formatMessage({
          id: "Settings.profile.form.section.profile.page.title",
          defaultMessage: "Profile page"
        })
      }
    ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.s, null, /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.Bl, null)));
  }
  const hasLockedRole = dataSSO?.isSSOLocked ?? false;
  const { email, firstname, lastname, username, preferedLanguage } = data;
  const initialData = { email, firstname, lastname, username, preferedLanguage, currentTheme };
  return /* @__PURE__ */ react.createElement(Main/* Main */.g, { "aria-busy": isSubmittingForm }, /* @__PURE__ */ react.createElement(
    Helmet/* Helmet */.m,
    {
      title: formatMessage({
        id: "Settings.profile.form.section.helmet.title",
        defaultMessage: "User profile"
      })
    }
  ), /* @__PURE__ */ react.createElement(
    formik_esm/* Formik */.l1,
    {
      onSubmit: handleSubmit,
      initialValues: initialData,
      validateOnChange: false,
      validationSchema: utils_schema,
      enableReinitialize: true
    },
    ({ errors, values, handleChange, isSubmitting, dirty }) => {
      return /* @__PURE__ */ react.createElement(helper_plugin_esm/* Form */.lV, null, /* @__PURE__ */ react.createElement(
        HeaderLayout/* HeaderLayout */.Q,
        {
          title: data.username || (0,utils/* getFullName */.dS)(data.firstname, data.lastname),
          primaryAction: /* @__PURE__ */ react.createElement(
            Button/* Button */.$,
            {
              startIcon: /* @__PURE__ */ react.createElement(Check/* default */.A, null),
              loading: isSubmitting,
              type: "submit",
              disabled: !dirty
            },
            formatMessage({ id: "global.save", defaultMessage: "Save" })
          )
        }
      ), /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingBottom: 10 }, /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.s, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 6 }, /* @__PURE__ */ react.createElement(components_UserInfo, { errors, onChange: handleChange, values }), !hasLockedRole && /* @__PURE__ */ react.createElement(components_Password, { errors, onChange: handleChange, values }), /* @__PURE__ */ react.createElement(
        components_Preferences,
        {
          allApplicationThemes,
          onChange: handleChange,
          values,
          localeNames
        }
      )))));
    }
  ));
};
/* harmony default export */ const pages_ProfilePage = (ProfilePage);


/***/ }),

/***/ 84241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Gd: () => (/* reexport */ edit),
  pK: () => (/* reexport */ profile)
});

// UNUSED EXPORTS: rolesValidation

// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var es = __webpack_require__(20627);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(58528);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/profile.js


const commonUserSchema = {
  firstname: es/* string */.Yj().trim().required(helper_plugin_esm/* translatedErrors */.iW.required),
  lastname: es/* string */.Yj(),
  email: es/* string */.Yj().email(helper_plugin_esm/* translatedErrors */.iW.email).lowercase().required(helper_plugin_esm/* translatedErrors */.iW.required),
  username: es/* string */.Yj().nullable(),
  password: es/* string */.Yj().min(8, helper_plugin_esm/* translatedErrors */.iW.minLength).matches(/[a-z]/, "components.Input.error.contain.lowercase").matches(/[A-Z]/, "components.Input.error.contain.uppercase").matches(/\d/, "components.Input.error.contain.number"),
  confirmPassword: es/* string */.Yj().min(8, helper_plugin_esm/* translatedErrors */.iW.minLength).oneOf([es/* ref */.KR("password"), null], "components.Input.error.password.noMatch").when("password", (password, passSchema) => {
    return password ? passSchema.required(helper_plugin_esm/* translatedErrors */.iW.required) : passSchema;
  })
};
const schema = {
  ...commonUserSchema,
  currentPassword: es/* string */.Yj().when(["password", "confirmPassword"], (password, confirmPassword, passSchema) => {
    return password || confirmPassword ? passSchema.required(helper_plugin_esm/* translatedErrors */.iW.required) : passSchema;
  }),
  preferedLanguage: es/* string */.Yj().nullable()
};
/* harmony default export */ const profile = (schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/roles.js


const roles_schema = {
  roles: es/* array */.YO().min(1, helper_plugin_esm/* translatedErrors */.iW.required).required(helper_plugin_esm/* translatedErrors */.iW.required)
};
/* harmony default export */ const roles = (roles_schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/edit.js



const edit_schema = es/* object */.Ik().shape({
  ...commonUserSchema,
  isActive: es/* bool */.lc(),
  ...roles
});
/* harmony default export */ const edit = (edit_schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Users/utils/validations/users/index.js





/***/ })

}]);