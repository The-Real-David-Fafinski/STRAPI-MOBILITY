(self["webpackChunkurban_cobix"] = self["webpackChunkurban_cobix"] || []).push([[8696],{

/***/ 30127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* reexport */ useInjectReducer)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(69733);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useInjectReducer/useInjectReducer.js


function useInjectReducer(namespace, reducer) {
  const store = (0,es/* useStore */.Pj)();
  (0,react.useEffect)(() => {
    store.injectReducer(namespace, reducer);
  }, [store, namespace, reducer]);
}

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useInjectReducer/index.js



/***/ }),

/***/ 80234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ev: () => (/* reexport */ hooks_useAuthProviders),
  xo: () => (/* reexport */ hooks_useLicenseLimitNotification),
  bO: () => (/* reexport */ useLicenseLimits/* useLicenseLimits */.b)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(58528);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 7 modules
var utils = __webpack_require__(48468);
// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(41261);
;// CONCATENATED MODULE: ./.cache/ee/admin/hooks/useAuthProviders/reducer.js

const initialState = {
  data: [],
  isLoading: true
};
const reducer = (state, action) => (0,immer_esm/* default */.Ay)(state, (draftState) => {
  switch (action.type) {
    case "GET_DATA_SUCCEEDED": {
      draftState.data = action.data;
      draftState.isLoading = false;
      break;
    }
    case "GET_DATA_ERROR": {
      draftState.isLoading = false;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const useAuthProviders_reducer = (reducer);

;// CONCATENATED MODULE: ./.cache/ee/admin/hooks/useAuthProviders/index.js




const useAuthProviders = ({ ssoEnabled }) => {
  const [state, dispatch] = (0,react.useReducer)(useAuthProviders_reducer, initialState);
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { get } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  (0,react.useEffect)(() => {
    const fetchAuthProviders = async () => {
      try {
        if (!ssoEnabled) {
          dispatch({
            type: "GET_DATA_SUCCEEDED",
            data: []
          });
          return;
        }
        const { data } = await get((0,utils/* getRequestUrl */.rh)("providers"));
        dispatch({
          type: "GET_DATA_SUCCEEDED",
          data
        });
      } catch (err) {
        console.error(err);
        dispatch({
          type: "GET_DATA_ERROR"
        });
        toggleNotification({
          type: "warning",
          message: { id: "notification.error" }
        });
      }
    };
    fetchAuthProviders();
  }, [get, ssoEnabled, toggleNotification]);
  return state;
};
/* harmony default export */ const hooks_useAuthProviders = (useAuthProviders);

// EXTERNAL MODULE: ./node_modules/lodash/isNil.js
var isNil = __webpack_require__(69843);
var isNil_default = /*#__PURE__*/__webpack_require__.n(isNil);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(56347);
// EXTERNAL MODULE: ./.cache/ee/admin/hooks/useLicenseLimits/index.js + 1 modules
var useLicenseLimits = __webpack_require__(58864);
;// CONCATENATED MODULE: ./.cache/ee/admin/hooks/useLicenseLimitNotification/index.js






const STORAGE_KEY_PREFIX = "strapi-notification-seat-limit";
const BILLING_STRAPI_CLOUD_URL = "https://cloud.strapi.io/profile/billing";
const BILLING_SELF_HOSTED_URL = "https://strapi.io/billing/request-seats";
const useLicenseLimitNotification = () => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  let { license, isError, isLoading } = (0,useLicenseLimits/* useLicenseLimits */.b)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { pathname } = (0,react_router/* useLocation */.zy)();
  const { enforcementUserCount, permittedSeats, licenseLimitStatus, isHostedOnStrapiCloud } = license;
  (0,react.useEffect)(() => {
    if (isError || isLoading) {
      return;
    }
    const shouldDisplayNotification = !isNil_default()(permittedSeats) && !window.sessionStorage.getItem(`${STORAGE_KEY_PREFIX}-${pathname}`) && (licenseLimitStatus === "AT_LIMIT" || licenseLimitStatus === "OVER_LIMIT");
    let notificationType;
    if (licenseLimitStatus === "OVER_LIMIT") {
      notificationType = "warning";
    } else if (licenseLimitStatus === "AT_LIMIT") {
      notificationType = "softWarning";
    }
    if (shouldDisplayNotification) {
      toggleNotification({
        type: notificationType,
        message: formatMessage(
          {
            id: "notification.ee.warning.over-.message",
            defaultMessage: "Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."
          },
          { licenseLimitStatus }
        ),
        title: formatMessage(
          {
            id: "notification.ee.warning.at-seat-limit.title",
            defaultMessage: "{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"
          },
          {
            licenseLimitStatus,
            enforcementUserCount,
            permittedSeats
          }
        ),
        link: {
          url: isHostedOnStrapiCloud ? BILLING_STRAPI_CLOUD_URL : BILLING_SELF_HOSTED_URL,
          label: formatMessage(
            {
              id: "notification.ee.warning.seat-limit.link",
              defaultMessage: "{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"
            },
            { isHostedOnStrapiCloud }
          )
        },
        blockTransition: true,
        onClose() {
          window.sessionStorage.setItem(`${STORAGE_KEY_PREFIX}-${pathname}`, true);
        }
      });
    }
  }, [
    toggleNotification,
    license,
    pathname,
    formatMessage,
    isLoading,
    permittedSeats,
    licenseLimitStatus,
    enforcementUserCount,
    isHostedOnStrapiCloud,
    isError
  ]);
};
/* harmony default export */ const hooks_useLicenseLimitNotification = (useLicenseLimitNotification);

;// CONCATENATED MODULE: ./.cache/ee/admin/hooks/index.js





/***/ }),

/***/ 58864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* reexport */ useLicenseLimits)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(58528);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
;// CONCATENATED MODULE: ./.cache/ee/admin/hooks/useLicenseLimits/useLicenseLimits.js



function useLicenseLimits({ enabled } = { enabled: true }) {
  const { get } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  const { data, isError, isLoading } = (0,es.useQuery)(
    ["ee", "license-limit-info"],
    async () => {
      const {
        data: { data: data2 }
      } = await get("/admin/license-limit-information");
      return data2;
    },
    {
      enabled
    }
  );
  const license = data ?? {};
  const getFeature = react.useCallback(
    (name) => {
      const feature = (license?.features ?? []).find((feature2) => feature2.name === name);
      return feature?.options ?? {};
    },
    [license?.features]
  );
  return { license, getFeature, isError, isLoading };
}

;// CONCATENATED MODULE: ./.cache/ee/admin/hooks/useLicenseLimits/index.js



/***/ }),

/***/ 45683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Io: () => (/* binding */ updateStage),
/* harmony export */   JU: () => (/* binding */ resetWorkflow),
/* harmony export */   Ku: () => (/* binding */ deleteStage),
/* harmony export */   Ll: () => (/* binding */ updateStagePosition),
/* harmony export */   mF: () => (/* binding */ addStage),
/* harmony export */   xY: () => (/* binding */ updateWorkflow),
/* harmony export */   yX: () => (/* binding */ setWorkflow)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11714);

function setWorkflow({ status, data }) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_SET_WORKFLOW */ .sT,
    payload: {
      status,
      workflow: data
    }
  };
}
function deleteStage(stageId) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_DELETE_STAGE */ .U,
    payload: {
      stageId
    }
  };
}
function addStage(stage = {}) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_ADD_STAGE */ .Cx,
    payload: stage
  };
}
function updateStage(stageId, payload) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_UPDATE_STAGE */ .Al,
    payload: {
      stageId,
      ...payload
    }
  };
}
function updateStagePosition(oldIndex, newIndex) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_UPDATE_STAGE_POSITION */ .Ae,
    payload: {
      newIndex,
      oldIndex
    }
  };
}
function updateWorkflow(payload) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_UPDATE_WORKFLOW */ .h$,
    payload
  };
}
function resetWorkflow() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_RESET_WORKFLOW */ .fR
  };
}


/***/ }),

/***/ 89974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  kc: () => (/* reexport */ Back),
  nh: () => (/* reexport */ DragLayerRendered),
  Y9: () => (/* reexport */ Header),
  bL: () => (/* reexport */ Root)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js
var Layout = __webpack_require__(63214);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(71808);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(40121);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(7562);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(58528);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.js
var ArrowLeft = __webpack_require__(40009);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./.cache/admin/src/components/DragLayer/index.js + 1 modules
var DragLayer = __webpack_require__(14459);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/constants.js
var constants = __webpack_require__(11714);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(98016);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(97939);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CarretDown.js
var CarretDown = __webpack_require__(77044);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(67336);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/StageDragPreview/StageDragPreview.js






const Toggle = (0,styled_components_browser_esm/* default */.Ay)((0,Flex/* Flex */.s))`
  svg path {
    fill: ${({ theme }) => theme.colors.neutral600};
  }
`;
function StageDragPreview({ name }) {
  return /* @__PURE__ */ react.createElement(
    Flex/* Flex */.s,
    {
      background: "primary100",
      borderStyle: "dashed",
      borderColor: "primary600",
      borderWidth: "1px",
      gap: 3,
      hasRadius: true,
      padding: 3,
      shadow: "tableShadow",
      width: (0,helper_plugin_esm/* pxToRem */.a8)(300)
    },
    /* @__PURE__ */ react.createElement(
      Toggle,
      {
        alignItems: "center",
        background: "neutral200",
        borderRadius: "50%",
        height: 6,
        justifyContent: "center",
        width: 6
      },
      /* @__PURE__ */ react.createElement(CarretDown/* default */.A, { width: `${8 / 16}rem` })
    ),
    /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { fontWeight: "bold" }, name)
  );
}
StageDragPreview.propTypes = {
  name: (prop_types_default()).string.isRequired
};

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/StageDragPreview/index.js


;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/Layout/Layout.js








function renderDragLayerItem({ type, item }) {
  switch (type) {
    case constants/* DRAG_DROP_TYPES */.TE.STAGE:
      return /* @__PURE__ */ react.createElement(StageDragPreview, { ...item });
    default:
      return null;
  }
}
function DragLayerRendered() {
  return /* @__PURE__ */ react.createElement(DragLayer/* DragLayer */.M, { renderItem: renderDragLayerItem });
}
function Root({ children }) {
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.P, null, /* @__PURE__ */ react.createElement(Main/* Main */.g, { tabIndex: -1 }, /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.s, null, children)));
}
function Back({ href }) {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ react.createElement(helper_plugin_esm/* Link */.N_, { startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.A, null), to: href }, formatMessage({
    id: "global.back",
    defaultMessage: "Back"
  }));
}
function Header({ title, subtitle, navigationAction, primaryAction }) {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(helper_plugin_esm/* SettingsPageTitle */.x7, { name: title }), /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.Q,
    {
      navigationAction,
      primaryAction,
      title,
      subtitle
    }
  ));
}


;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/Layout/index.js



/***/ }),

/***/ 59984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  nB: () => (/* reexport */ Body),
  bL: () => (/* reexport */ LimitsModal),
  hE: () => (/* reexport */ Title)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(97939);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(98016);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalLayout.js
var ModalLayout = __webpack_require__(75056);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ModalLayout/ModalBody.js
var ModalBody = __webpack_require__(43418);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(91616);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(63292);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/LinkButton/LinkButton.js
var LinkButton = __webpack_require__(6805);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cross.js
var Cross = __webpack_require__(9605);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(67336);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/LimitsModal/assets/balloon.png
const balloon_namespaceObject = __webpack_require__.p + "0cd5f8915b265d5b1856.png";
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/LimitsModal/LimitsModal.js








const TITLE_ID = "limits-title";
const CTA_LEARN_MORE_HREF = "https://strapi.io/pricing-cloud";
const CTA_SALES_HREF = "https://strapi.io/contact-sales";
function Title({ children }) {
  return /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "alpha", id: TITLE_ID }, children);
}
Title.propTypes = {
  children: (prop_types_default()).node.isRequired
};
function Body({ children }) {
  return /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "omega" }, children);
}
Body.propTypes = {
  children: (prop_types_default()).node.isRequired
};
function CallToActions() {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { gap: 2, paddingTop: 4 }, /* @__PURE__ */ react.createElement(LinkButton/* LinkButton */.z, { variant: "default", isExternal: true, href: CTA_LEARN_MORE_HREF }, formatMessage({
    id: "Settings.review-workflows.limit.cta.learn",
    defaultMessage: "Learn more"
  })), /* @__PURE__ */ react.createElement(LinkButton/* LinkButton */.z, { variant: "tertiary", isExternal: true, href: CTA_SALES_HREF }, formatMessage({
    id: "Settings.review-workflows.limit.cta.sales",
    defaultMessage: "Contact Sales"
  })));
}
const BalloonImage = styled_components_browser_esm/* default */.Ay.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({ theme }) => `-${theme.spaces[7]}`};
  margin-top: ${({ theme }) => `-${theme.spaces[7]}`};
  width: 360px;
`;
function LimitsModal({ children, isOpen, onClose }) {
  const { formatMessage } = (0,useIntl/* default */.A)();
  if (!isOpen) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(ModalLayout/* ModalLayout */.k, { labelledBy: TITLE_ID }, /* @__PURE__ */ react.createElement(ModalBody/* ModalBody */.c, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { gap: 2, paddingLeft: 7, position: "relative" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { alignItems: "start", direction: "column", gap: 2, width: "60%" }, children, /* @__PURE__ */ react.createElement(CallToActions, null)), /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { justifyContent: "end", height: "100%", width: "40%" }, /* @__PURE__ */ react.createElement(BalloonImage, { src: balloon_namespaceObject, "aria-hidden": true, alt: "", loading: "lazy" }), /* @__PURE__ */ react.createElement(Box/* Box */.a, { display: "flex", position: "absolute", right: 0, top: 0 }, /* @__PURE__ */ react.createElement(
    IconButton/* IconButton */.K,
    {
      icon: /* @__PURE__ */ react.createElement(Cross/* default */.A, null),
      "aria-label": formatMessage({
        id: "global.close",
        defaultMessage: "Close"
      }),
      onClick: onClose
    }
  ))))));
}
LimitsModal.defaultProps = {
  isOpen: false
};
LimitsModal.propTypes = {
  children: (prop_types_default()).node.isRequired,
  isOpen: (prop_types_default()).bool,
  onClose: (prop_types_default()).func.isRequired
};

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/LimitsModal/index.js




/***/ }),

/***/ 45410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* reexport */ Stages)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(91616);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(98016);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(58528);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(69733);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(67336);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/actions/index.js
var actions = __webpack_require__(45683);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(97939);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/PlusCircle.js
var PlusCircle = __webpack_require__(56713);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/AddStage/AddStage.js





const StyledAddIcon = (0,styled_components_browser_esm/* default */.Ay)((0,PlusCircle/* default */.A))`
  > circle {
    fill: ${({ theme }) => theme.colors.neutral150};
  }
  > path {
    fill: ${({ theme }) => theme.colors.neutral600};
  }
`;
const StyledButton = (0,styled_components_browser_esm/* default */.Ay)((0,Box/* Box */.a))`
  border-radius: 26px;

  svg {
    height: ${({ theme }) => theme.spaces[6]};
    width: ${({ theme }) => theme.spaces[6]};

    > path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary600} !important;
    ${Typography/* Typography */.o} {
      color: ${({ theme }) => theme.colors.primary600} !important;
    }

    ${StyledAddIcon} {
      > circle {
        fill: ${({ theme }) => theme.colors.primary600};
      }
      > path {
        fill: ${({ theme }) => theme.colors.neutral100};
      }
    }
  }

  &:active {
    ${Typography/* Typography */.o} {
      color: ${({ theme }) => theme.colors.primary600};
    }

    ${StyledAddIcon} {
      > circle {
        fill: ${({ theme }) => theme.colors.primary600};
      }
      > path {
        fill: ${({ theme }) => theme.colors.neutral100};
      }
    }
  }
`;
function AddStage({ children, ...props }) {
  return /* @__PURE__ */ react.createElement(
    StyledButton,
    {
      as: "button",
      background: "neutral0",
      border: "neutral150",
      paddingBottom: 3,
      paddingLeft: 4,
      paddingRight: 4,
      paddingTop: 3,
      shadow: "filterShadow",
      ...props
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { gap: 2 }, /* @__PURE__ */ react.createElement(StyledAddIcon, { "aria-hidden": true }), /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "pi", fontWeight: "bold", textColor: "neutral500" }, children))
  );
}
AddStage.propTypes = {
  children: (prop_types_default()).node.isRequired
};

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/AddStage/index.js


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(69688);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/Accordion.js
var Accordion = __webpack_require__(82008);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionToggle.js + 1 modules
var AccordionToggle = __webpack_require__(23845);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(63292);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionContent.js
var AccordionContent = __webpack_require__(13203);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(96630);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(16473);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(30524);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/SingleSelect.js
var SingleSelect = __webpack_require__(79054);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.js
var Trash = __webpack_require__(34487);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Drag.js
var Drag = __webpack_require__(87123);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(7425);
// EXTERNAL MODULE: ./node_modules/react-dnd-html5-backend/dist/cjs/index.js
var cjs = __webpack_require__(78897);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/hooks/index.js + 13 modules
var hooks = __webpack_require__(99142);
// EXTERNAL MODULE: ./.cache/admin/src/content-manager/utils/index.js + 12 modules
var utils = __webpack_require__(48386);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/constants.js
var constants = __webpack_require__(11714);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/utils/colors.js
var colors = __webpack_require__(30405);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/Stages/Stage/Stage.js














const AVAILABLE_COLORS = (0,colors/* getAvailableStageColors */.M)();
function StageDropPreview() {
  return /* @__PURE__ */ react.createElement(
    Box/* Box */.a,
    {
      background: "primary100",
      borderStyle: "dashed",
      borderColor: "primary600",
      borderWidth: "1px",
      display: "block",
      hasRadius: true,
      padding: 6,
      shadow: "tableShadow"
    }
  );
}
function Stage({
  id,
  index,
  canDelete,
  canReorder,
  canUpdate,
  isOpen: isOpenDefault = false,
  stagesCount
}) {
  const getItemPos = (index2) => `${index2 + 1} of ${stagesCount}`;
  const handleGrabStage = (index2) => {
    setLiveText(
      formatMessage(
        {
          id: "dnd.grab-item",
          defaultMessage: `{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel.`
        },
        {
          item: nameField.value,
          position: getItemPos(index2)
        }
      )
    );
  };
  const handleDropStage = (index2) => {
    setLiveText(
      formatMessage(
        {
          id: "dnd.drop-item",
          defaultMessage: `{item}, dropped. Final position in list: {position}.`
        },
        {
          item: nameField.value,
          position: getItemPos(index2)
        }
      )
    );
  };
  const handleCancelDragStage = () => {
    setLiveText(
      formatMessage(
        {
          id: "dnd.cancel-item",
          defaultMessage: "{item}, dropped. Re-order cancelled."
        },
        {
          item: nameField.value
        }
      )
    );
  };
  const handleMoveStage = (newIndex, oldIndex) => {
    setLiveText(
      formatMessage(
        {
          id: "dnd.reorder",
          defaultMessage: "{item}, moved. New position in list: {position}."
        },
        {
          item: nameField.value,
          position: getItemPos(newIndex)
        }
      )
    );
    dispatch((0,actions/* updateStagePosition */.Ll)(oldIndex, newIndex));
  };
  const [liveText, setLiveText] = react.useState(null);
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.z1)();
  const dispatch = (0,es/* useDispatch */.wA)();
  const [isOpen, setIsOpen] = react.useState(isOpenDefault);
  const [nameField, nameMeta, nameHelper] = (0,formik_esm/* useField */.Mt)(`stages.${index}.name`);
  const [colorField, colorMeta, colorHelper] = (0,formik_esm/* useField */.Mt)(`stages.${index}.color`);
  const [{ handlerId, isDragging, handleKeyDown }, stageRef, dropRef, dragRef, dragPreviewRef] = (0,hooks/* useDragAndDrop */.gY)(canReorder, {
    index,
    item: {
      name: nameField.value
    },
    onGrabItem: handleGrabStage,
    onDropItem: handleDropStage,
    onMoveItem: handleMoveStage,
    onCancel: handleCancelDragStage,
    type: constants/* DRAG_DROP_TYPES */.TE.STAGE
  });
  const composedRef = (0,utils/* composeRefs */.tE)(stageRef, dropRef);
  const colorOptions = AVAILABLE_COLORS.map(({ hex, name }) => ({
    value: hex,
    label: formatMessage(
      {
        id: "Settings.review-workflows.stage.color.name",
        defaultMessage: "{name}"
      },
      { name }
    ),
    color: hex
  }));
  react.useEffect(() => {
    dragPreviewRef((0,cjs/* getEmptyImage */.n5)(), { captureDraggingState: false });
  }, [dragPreviewRef, index]);
  const { themeColorName } = (0,colors/* getStageColorByHex */.w)(colorField.value) ?? {};
  return /* @__PURE__ */ react.createElement(Box/* Box */.a, { ref: composedRef }, liveText && /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.s, { "aria-live": "assertive" }, liveText), isDragging ? /* @__PURE__ */ react.createElement(StageDropPreview, null) : /* @__PURE__ */ react.createElement(
    Accordion/* Accordion */.n,
    {
      size: "S",
      variant: "primary",
      onToggle: () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
          trackUsage("willEditStage");
        }
      },
      expanded: isOpen,
      shadow: "tableShadow",
      error: nameMeta.error ?? colorMeta?.error ?? false,
      hasErrorMessage: false
    },
    /* @__PURE__ */ react.createElement(
      AccordionToggle/* AccordionToggle */.P,
      {
        title: nameField.value,
        togglePosition: "left",
        action: /* @__PURE__ */ react.createElement(Flex/* Flex */.s, null, canDelete && /* @__PURE__ */ react.createElement(
          IconButton/* IconButton */.K,
          {
            background: "transparent",
            icon: /* @__PURE__ */ react.createElement(Trash/* default */.A, null),
            label: formatMessage({
              id: "Settings.review-workflows.stage.delete",
              defaultMessage: "Delete stage"
            }),
            noBorder: true,
            onClick: () => dispatch((0,actions/* deleteStage */.Ku)(id))
          }
        ), /* @__PURE__ */ react.createElement(
          IconButton/* IconButton */.K,
          {
            background: "transparent",
            disabled: !canUpdate,
            forwardedAs: "div",
            role: "button",
            noBorder: true,
            tabIndex: 0,
            "data-handler-id": handlerId,
            ref: dragRef,
            label: formatMessage({
              id: "Settings.review-workflows.stage.drag",
              defaultMessage: "Drag"
            }),
            onClick: (e) => e.stopPropagation(),
            onKeyDown: handleKeyDown
          },
          /* @__PURE__ */ react.createElement(Drag/* default */.A, null)
        ))
      }
    ),
    /* @__PURE__ */ react.createElement(AccordionContent/* AccordionContent */.u, { padding: 6, background: "neutral0", hasRadius: true }, /* @__PURE__ */ react.createElement(Grid/* Grid */.x, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6 }, /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.k,
      {
        ...nameField,
        id: nameField.name,
        disabled: !canUpdate,
        label: formatMessage({
          id: "Settings.review-workflows.stage.name.label",
          defaultMessage: "Stage name"
        }),
        error: nameMeta.error ?? false,
        onChange: (event) => {
          nameHelper.setValue(event.target.value);
          dispatch((0,actions/* updateStage */.Io)(id, { name: event.target.value }));
        },
        required: true
      }
    )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6 }, /* @__PURE__ */ react.createElement(
      SingleSelect/* SingleSelect */.Z,
      {
        disabled: !canUpdate,
        error: colorMeta?.error ?? false,
        id: colorField.name,
        required: true,
        label: formatMessage({
          id: "content-manager.reviewWorkflows.stage.color",
          defaultMessage: "Color"
        }),
        onChange: (value) => {
          colorHelper.setValue(value);
          dispatch((0,actions/* updateStage */.Io)(id, { color: value }));
        },
        value: colorField.value.toUpperCase(),
        startIcon: /* @__PURE__ */ react.createElement(
          Flex/* Flex */.s,
          {
            as: "span",
            height: 2,
            background: colorField.value,
            borderColor: themeColorName === "neutral0" ? "neutral150" : "transparent",
            hasRadius: true,
            shrink: 0,
            width: 2
          }
        )
      },
      colorOptions.map(({ value, label, color }) => {
        const { themeColorName: themeColorName2 } = (0,colors/* getStageColorByHex */.w)(color);
        return /* @__PURE__ */ react.createElement(
          SingleSelect/* SingleSelectOption */.eY,
          {
            value,
            key: value,
            startIcon: /* @__PURE__ */ react.createElement(
              Flex/* Flex */.s,
              {
                as: "span",
                height: 2,
                background: color,
                borderColor: themeColorName2 === "neutral0" ? "neutral150" : "transparent",
                hasRadius: true,
                shrink: 0,
                width: 2
              }
            )
          },
          label
        );
      })
    ))))
  ));
}
Stage.propTypes = prop_types_default().shape({
  id: (prop_types_default()).number.isRequired,
  color: (prop_types_default()).string.isRequired,
  canDelete: (prop_types_default()).bool.isRequired,
  canReorder: (prop_types_default()).bool.isRequired,
  canUpdate: (prop_types_default()).bool.isRequired,
  stagesCount: (prop_types_default()).number.isRequired
}).isRequired;

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/Stages/Stage/index.js


;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/Stages/Stages.js










const Background = (0,styled_components_browser_esm/* default */.Ay)((0,Box/* Box */.a))`
  transform: translateX(-50%);
`;
function Stages({ canDelete, canUpdate, stages }) {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const dispatch = (0,es/* useDispatch */.wA)();
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.z1)();
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", gap: 6, width: "100%" }, /* @__PURE__ */ react.createElement(Box/* Box */.a, { position: "relative", spacing: 4, width: "100%" }, /* @__PURE__ */ react.createElement(
    Background,
    {
      background: "neutral200",
      height: "100%",
      left: "50%",
      position: "absolute",
      top: "0",
      width: 2,
      zIndex: 1
    }
  ), /* @__PURE__ */ react.createElement(
    Flex/* Flex */.s,
    {
      direction: "column",
      alignItems: "stretch",
      gap: 6,
      zIndex: 2,
      position: "relative",
      as: "ol"
    },
    stages.map((stage, index) => {
      const id = stage?.id ?? stage.__temp_key__;
      return /* @__PURE__ */ react.createElement(Box/* Box */.a, { key: `stage-${id}`, as: "li" }, /* @__PURE__ */ react.createElement(
        Stage,
        {
          id,
          index,
          isOpen: !stage.id,
          canDelete: stages.length > 1 && canDelete,
          canReorder: stages.length > 1,
          canUpdate,
          stagesCount: stages.length
        }
      ));
    })
  )), canUpdate && /* @__PURE__ */ react.createElement(
    AddStage,
    {
      type: "button",
      onClick: () => {
        dispatch((0,actions/* addStage */.mF)({ name: "" }));
        trackUsage("willCreateStage");
      }
    },
    formatMessage({
      id: "Settings.review-workflows.stage.add",
      defaultMessage: "Add new stage"
    })
  ));
}
Stages.defaultProps = {
  canDelete: true,
  canUpdate: true,
  stages: []
};
Stages.propTypes = {
  canDelete: (prop_types_default()).bool,
  canUpdate: (prop_types_default()).bool,
  stages: prop_types_default().arrayOf(
    prop_types_default().shape({
      id: (prop_types_default()).number,
      __temp_key__: (prop_types_default()).number,
      name: (prop_types_default()).string.isRequired
    })
  )
};

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/Stages/index.js



/***/ }),

/***/ 42570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r: () => (/* reexport */ WorkflowAttributes)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/MultiSelect.js
var MultiSelect = __webpack_require__(50497);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(97939);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(96630);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(16473);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(30524);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(58528);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(7425);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(69733);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(67336);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/actions/index.js
var actions = __webpack_require__(45683);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/WorkflowAttributes/WorkflowAttributes.js









const NestedOption = (0,styled_components_browser_esm/* default */.Ay)((0,MultiSelect/* MultiSelectOption */.fe))`
  padding-left: ${({ theme }) => theme.spaces[7]};
`;
const ContentTypeTakeNotice = (0,styled_components_browser_esm/* default */.Ay)((0,Typography/* Typography */.o))`
  font-style: italic;
`;
function WorkflowAttributes({
  canUpdate,
  contentTypes: { collectionTypes, singleTypes },
  currentWorkflow,
  workflows
}) {
  const { formatMessage, locale } = (0,useIntl/* default */.A)();
  const dispatch = (0,es/* useDispatch */.wA)();
  const [nameField, nameMeta, nameHelper] = (0,formik_esm/* useField */.Mt)("name");
  const [contentTypesField, contentTypesMeta, contentTypesHelper] = (0,formik_esm/* useField */.Mt)("contentTypes");
  const formatter = (0,helper_plugin_esm/* useCollator */.QM)(locale, {
    sensitivity: "base"
  });
  return /* @__PURE__ */ react.createElement(Grid/* Grid */.x, { background: "neutral0", hasRadius: true, gap: 4, padding: 6, shadow: "tableShadow" }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6 }, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.k,
    {
      ...nameField,
      id: nameField.name,
      disabled: !canUpdate,
      label: formatMessage({
        id: "Settings.review-workflows.workflow.name.label",
        defaultMessage: "Workflow Name"
      }),
      error: nameMeta.error ?? false,
      onChange: (event) => {
        dispatch((0,actions/* updateWorkflow */.xY)({ name: event.target.value }));
        nameHelper.setValue(event.target.value);
      },
      required: true
    }
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 6 }, /* @__PURE__ */ react.createElement(
    MultiSelect/* MultiSelect */.KF,
    {
      ...contentTypesField,
      customizeContent: (value) => formatMessage(
        {
          id: "Settings.review-workflows.workflow.contentTypes.displayValue",
          defaultMessage: "{count} {count, plural, one {content type} other {content types}} selected"
        },
        { count: value.length }
      ),
      disabled: !canUpdate,
      error: contentTypesMeta.error ?? false,
      id: contentTypesField.name,
      label: formatMessage({
        id: "Settings.review-workflows.workflow.contentTypes.label",
        defaultMessage: "Associated to"
      }),
      onChange: (values) => {
        dispatch((0,actions/* updateWorkflow */.xY)({ contentTypes: values }));
        contentTypesHelper.setValue(values);
      },
      placeholder: formatMessage({
        id: "Settings.review-workflows.workflow.contentTypes.placeholder",
        defaultMessage: "Select"
      })
    },
    [
      ...collectionTypes.length > 0 ? [
        {
          label: formatMessage({
            id: "Settings.review-workflows.workflow.contentTypes.collectionTypes.label",
            defaultMessage: "Collection Types"
          }),
          children: collectionTypes.sort((a, b) => formatter.compare(a.info.displayName, b.info.displayName)).map((contentType) => ({
            label: contentType.info.displayName,
            value: contentType.uid
          }))
        }
      ] : [],
      ...singleTypes.length > 0 ? [
        {
          label: formatMessage({
            id: "Settings.review-workflows.workflow.contentTypes.singleTypes.label",
            defaultMessage: "Single Types"
          }),
          children: singleTypes.map((contentType) => ({
            label: contentType.info.displayName,
            value: contentType.uid
          }))
        }
      ] : []
    ].map((opt) => {
      if ("children" in opt) {
        return /* @__PURE__ */ react.createElement(
          MultiSelect/* MultiSelectGroup */.np,
          {
            key: opt.label,
            label: opt.label,
            values: opt.children.map((child) => child.value.toString())
          },
          opt.children.map((child) => {
            const { name: assignedWorkflowName } = workflows.find(
              (workflow) => (currentWorkflow && workflow.id !== currentWorkflow.id || !currentWorkflow) && workflow.contentTypes.includes(child.value)
            ) ?? {};
            return /* @__PURE__ */ react.createElement(NestedOption, { key: child.value, value: child.value }, formatMessage(
              {
                id: "Settings.review-workflows.workflow.contentTypes.assigned.notice",
                defaultMessage: "{label} {name, select, undefined {} other {<i>(assigned to <em>{name}</em> workflow)</i>}}"
              },
              {
                label: child.label,
                name: assignedWorkflowName,
                em: (...children) => /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { as: "em", fontWeight: "bold" }, children),
                i: (...children) => /* @__PURE__ */ react.createElement(ContentTypeTakeNotice, null, children)
              }
            ));
          })
        );
      }
      return /* @__PURE__ */ react.createElement(MultiSelect/* MultiSelectOption */.fe, { key: opt.value, value: opt.value }, opt.label);
    })
  )));
}
const ContentTypeType = prop_types_default().shape({
  uid: (prop_types_default()).string.isRequired,
  info: prop_types_default().shape({
    displayName: (prop_types_default()).string.isRequired
  }).isRequired
});
WorkflowAttributes.defaultProps = {
  canUpdate: true,
  currentWorkflow: void 0
};
WorkflowAttributes.propTypes = {
  canUpdate: (prop_types_default()).bool,
  contentTypes: prop_types_default().shape({
    collectionTypes: prop_types_default().arrayOf(ContentTypeType).isRequired,
    singleTypes: prop_types_default().arrayOf(ContentTypeType).isRequired
  }).isRequired,
  currentWorkflow: (prop_types_default()).object,
  workflows: (prop_types_default()).array.isRequired
};

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/WorkflowAttributes/index.js



/***/ }),

/***/ 11714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ae: () => (/* binding */ ACTION_UPDATE_STAGE_POSITION),
/* harmony export */   Al: () => (/* binding */ ACTION_UPDATE_STAGE),
/* harmony export */   Cx: () => (/* binding */ ACTION_ADD_STAGE),
/* harmony export */   Dp: () => (/* binding */ CHARGEBEE_STAGES_PER_WORKFLOW_ENTITLEMENT_NAME),
/* harmony export */   TE: () => (/* binding */ DRAG_DROP_TYPES),
/* harmony export */   U: () => (/* binding */ ACTION_DELETE_STAGE),
/* harmony export */   fR: () => (/* binding */ ACTION_RESET_WORKFLOW),
/* harmony export */   h$: () => (/* binding */ ACTION_UPDATE_WORKFLOW),
/* harmony export */   hH: () => (/* binding */ STAGE_COLOR_DEFAULT),
/* harmony export */   hK: () => (/* binding */ CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME),
/* harmony export */   oA: () => (/* binding */ STAGE_COLORS),
/* harmony export */   p6: () => (/* binding */ REDUX_NAMESPACE),
/* harmony export */   sT: () => (/* binding */ ACTION_SET_WORKFLOW)
/* harmony export */ });
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59675);

const REDUX_NAMESPACE = "settings_review-workflows";
const ACTION_RESET_WORKFLOW = `Settings/Review_Workflows/RESET_WORKFLOW`;
const ACTION_SET_WORKFLOW = `Settings/Review_Workflows/SET_WORKFLOW`;
const ACTION_DELETE_STAGE = `Settings/Review_Workflows/WORKFLOW_DELETE_STAGE`;
const ACTION_ADD_STAGE = `Settings/Review_Workflows/WORKFLOW_ADD_STAGE`;
const ACTION_UPDATE_STAGE = `Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE`;
const ACTION_UPDATE_STAGE_POSITION = `Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION`;
const ACTION_UPDATE_WORKFLOW = `Settings/Review_Workflows/WORKFLOW_UPDATE`;
const STAGE_COLORS = {
  primary600: "Blue",
  primary200: "Lilac",
  alternative600: "Violet",
  alternative200: "Lavender",
  success600: "Green",
  success200: "Pale Green",
  danger500: "Cherry",
  danger200: "Pink",
  warning600: "Orange",
  warning200: "Yellow",
  secondary600: "Teal",
  secondary200: "Baby Blue",
  neutral400: "Gray",
  neutral0: "White"
};
const STAGE_COLOR_DEFAULT = _strapi_design_system__WEBPACK_IMPORTED_MODULE_0__/* .lightTheme */ ._.colors.primary600;
const DRAG_DROP_TYPES = {
  STAGE: "stage"
};
const CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME = "numberOfWorkflows";
const CHARGEBEE_STAGES_PER_WORKFLOW_ENTITLEMENT_NAME = "stagesPerWorkflow";


/***/ }),

/***/ 78101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ useReviewWorkflows)
/* harmony export */ });
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58528);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75942);


function useReviewWorkflows(params = {}) {
  const { get } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__/* .useFetchClient */ .ry)();
  const { id = "", ...queryParams } = params;
  const defaultQueryParams = {
    populate: "stages"
  };
  const { data, isLoading, status, refetch } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(
    ["review-workflows", "workflows", id],
    async () => {
      const res = await get(`/admin/review-workflows/workflows/${id}`, {
        params: { ...defaultQueryParams, ...queryParams }
      });
      return res.data;
    }
  );
  let workflows = [];
  if (id && data?.data) {
    workflows = [data.data];
  } else if (Array.isArray(data?.data)) {
    workflows = data.data;
  }
  return {
    // meta contains e.g. the total of all workflows. we can not use
    // the pagination object here, because the list is not paginated.
    meta: data?.meta ?? {},
    workflows,
    isLoading,
    status,
    refetch
  };
}


/***/ }),

/***/ 18960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ reducer),
/* harmony export */   u: () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41261);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2404);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11714);



const initialState = {
  status: "loading",
  serverState: {
    workflow: null
  },
  clientState: {
    currentWorkflow: {
      data: {
        name: "",
        contentTypes: [],
        stages: []
      },
      isDirty: false,
      hasDeletedServerStages: false
    }
  }
};
function reducer(state = initialState, action) {
  return (0,immer__WEBPACK_IMPORTED_MODULE_2__/* .produce */ .jM)(state, (draft) => {
    const { payload } = action;
    switch (action.type) {
      case _constants__WEBPACK_IMPORTED_MODULE_1__/* .ACTION_SET_WORKFLOW */ .sT: {
        const { status, workflow } = payload;
        draft.status = status;
        if (workflow) {
          draft.serverState.workflow = workflow;
          draft.clientState.currentWorkflow.data = {
            ...workflow,
            stages: workflow.stages.map((stage) => ({
              ...stage,
              // A safety net in case a stage does not have a color assigned;
              // this normallly should not happen
              color: stage?.color ?? _constants__WEBPACK_IMPORTED_MODULE_1__/* .STAGE_COLOR_DEFAULT */ .hH
            }))
          };
        }
        draft.clientState.currentWorkflow.hasDeletedServerStages = false;
        break;
      }
      case _constants__WEBPACK_IMPORTED_MODULE_1__/* .ACTION_RESET_WORKFLOW */ .fR: {
        draft.clientState.currentWorkflow.data = initialState.clientState.currentWorkflow.data;
        draft.serverState = initialState.serverState;
        break;
      }
      case _constants__WEBPACK_IMPORTED_MODULE_1__/* .ACTION_DELETE_STAGE */ .U: {
        const { stageId } = payload;
        const { currentWorkflow } = state.clientState;
        draft.clientState.currentWorkflow.data.stages = currentWorkflow.data.stages.filter(
          (stage) => (stage?.id ?? stage.__temp_key__) !== stageId
        );
        if (!currentWorkflow.hasDeletedServerStages) {
          draft.clientState.currentWorkflow.hasDeletedServerStages = !!(state.serverState.workflow?.stages ?? []).find((stage) => stage.id === stageId);
        }
        break;
      }
      case _constants__WEBPACK_IMPORTED_MODULE_1__/* .ACTION_ADD_STAGE */ .Cx: {
        const { currentWorkflow } = state.clientState;
        if (!currentWorkflow.data) {
          draft.clientState.currentWorkflow.data = {
            stages: []
          };
        }
        const newTempKey = getMaxTempKey(draft.clientState.currentWorkflow.data.stages);
        draft.clientState.currentWorkflow.data.stages.push({
          ...payload,
          color: payload?.color ?? _constants__WEBPACK_IMPORTED_MODULE_1__/* .STAGE_COLOR_DEFAULT */ .hH,
          __temp_key__: newTempKey
        });
        break;
      }
      case _constants__WEBPACK_IMPORTED_MODULE_1__/* .ACTION_UPDATE_STAGE */ .Al: {
        const { currentWorkflow } = state.clientState;
        const { stageId, ...modified } = payload;
        draft.clientState.currentWorkflow.data.stages = currentWorkflow.data.stages.map(
          (stage) => (stage.id ?? stage.__temp_key__) === stageId ? {
            ...stage,
            ...modified
          } : stage
        );
        break;
      }
      case _constants__WEBPACK_IMPORTED_MODULE_1__/* .ACTION_UPDATE_STAGE_POSITION */ .Ae: {
        const {
          currentWorkflow: {
            data: { stages }
          }
        } = state.clientState;
        const { newIndex, oldIndex } = payload;
        if (newIndex >= 0 && newIndex < stages.length) {
          const stage = stages[oldIndex];
          let newStages = [...stages];
          newStages.splice(oldIndex, 1);
          newStages.splice(newIndex, 0, stage);
          draft.clientState.currentWorkflow.data.stages = newStages;
        }
        break;
      }
      case _constants__WEBPACK_IMPORTED_MODULE_1__/* .ACTION_UPDATE_WORKFLOW */ .h$: {
        draft.clientState.currentWorkflow.data = {
          ...draft.clientState.currentWorkflow.data,
          ...payload
        };
        break;
      }
      default:
        break;
    }
    if (state.clientState.currentWorkflow.data && draft.serverState.workflow) {
      draft.clientState.currentWorkflow.isDirty = !lodash_isEqual__WEBPACK_IMPORTED_MODULE_0___default()(
        (0,immer__WEBPACK_IMPORTED_MODULE_2__/* .current */ .ss)(draft.clientState.currentWorkflow).data,
        draft.serverState.workflow
      );
    } else {
      draft.clientState.currentWorkflow.isDirty = true;
    }
  });
}
const getMaxTempKey = (stages = []) => {
  const ids = stages.map((stage) => stage.id ?? stage.__temp_key__);
  return Math.max(...ids, -1) + 1;
};


/***/ }),

/***/ 30405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ getAvailableStageColors),
/* harmony export */   w: () => (/* binding */ getStageColorByHex)
/* harmony export */ });
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59675);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11714);


function getStageColorByHex(hex) {
  if (!hex) {
    return null;
  }
  const themeColors = Object.entries(_strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .lightTheme */ ._.colors).filter(
    ([, value]) => value.toUpperCase() === hex.toUpperCase()
  );
  const themeColorName = themeColors.reduce((acc, [name]) => {
    if (_constants__WEBPACK_IMPORTED_MODULE_0__/* .STAGE_COLORS */ .oA?.[name]) {
      acc = name;
    }
    return acc;
  }, null);
  if (!themeColorName) {
    return null;
  }
  return {
    themeColorName,
    name: _constants__WEBPACK_IMPORTED_MODULE_0__/* .STAGE_COLORS */ .oA[themeColorName]
  };
}
function getAvailableStageColors() {
  return Object.entries(_constants__WEBPACK_IMPORTED_MODULE_0__/* .STAGE_COLORS */ .oA).map(([themeColorName, name]) => ({
    hex: _strapi_design_system__WEBPACK_IMPORTED_MODULE_1__/* .lightTheme */ ._.colors[themeColorName].toUpperCase(),
    name
  }));
}


/***/ }),

/***/ 41090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ validateWorkflow)
/* harmony export */ });
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63560);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20627);


async function validateWorkflow({ values, formatMessage }) {
  const schema = yup__WEBPACK_IMPORTED_MODULE_1__/* .object */ .Ik({
    contentTypes: yup__WEBPACK_IMPORTED_MODULE_1__/* .array */ .YO().of(yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Yj()),
    name: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Yj().max(
      255,
      formatMessage({
        id: "Settings.review-workflows.validation.name.max-length",
        defaultMessage: "Name can not be longer than 255 characters"
      })
    ).required(),
    stages: yup__WEBPACK_IMPORTED_MODULE_1__/* .array */ .YO().of(
      yup__WEBPACK_IMPORTED_MODULE_1__/* .object */ .Ik().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Yj().required(
          formatMessage({
            id: "Settings.review-workflows.validation.stage.name",
            defaultMessage: "Name is required"
          })
        ).max(
          255,
          formatMessage({
            id: "Settings.review-workflows.validation.stage.max-length",
            defaultMessage: "Name can not be longer than 255 characters"
          })
        ).test(
          "unique-name",
          formatMessage({
            id: "Settings.review-workflows.validation.stage.duplicate",
            defaultMessage: "Stage name must be unique"
          }),
          function(stageName) {
            const {
              options: { context }
            } = this;
            return context.stages.filter((stage) => stage.name === stageName).length === 1;
          }
        ),
        color: yup__WEBPACK_IMPORTED_MODULE_1__/* .string */ .Yj().required(
          formatMessage({
            id: "Settings.review-workflows.validation.stage.color",
            defaultMessage: "Color is required"
          })
        ).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i)
      })
    ).min(1)
  });
  try {
    await schema.validate(values, { abortEarly: false, context: values });
    return true;
  } catch (error) {
    let errors = {};
    if (error instanceof yup__WEBPACK_IMPORTED_MODULE_1__/* .ValidationError */ .yI) {
      error.inner.forEach((error2) => {
        lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(errors, error2.path, error2.message);
      });
    }
    return errors;
  }
}


/***/ }),

/***/ 53812:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(72552),
    isObjectLike = __webpack_require__(40346);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]';

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
function isBoolean(value) {
  return value === true || value === false ||
    (isObjectLike(value) && baseGetTag(value) == boolTag);
}

module.exports = isBoolean;


/***/ }),

/***/ 11741:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isNumber = __webpack_require__(98023);

/**
 * Checks if `value` is `NaN`.
 *
 * **Note:** This method is based on
 * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
 * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
 * `undefined` and other non-number values.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 * @example
 *
 * _.isNaN(NaN);
 * // => true
 *
 * _.isNaN(new Number(NaN));
 * // => true
 *
 * isNaN(undefined);
 * // => true
 *
 * _.isNaN(undefined);
 * // => false
 */
function isNaN(value) {
  // An `NaN` primitive is the only value that is not equal to itself.
  // Perform the `toStringTag` check first to avoid errors with some
  // ActiveX objects in IE.
  return isNumber(value) && value != +value;
}

module.exports = isNaN;


/***/ }),

/***/ 98023:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(72552),
    isObjectLike = __webpack_require__(40346);

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;


/***/ }),

/***/ 80218:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toString = __webpack_require__(13222);

/**
 * Converts `string`, as a whole, to lower case just like
 * [String#toLowerCase](https://mdn.io/toLowerCase).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the lower cased string.
 * @example
 *
 * _.toLower('--Foo-Bar--');
 * // => '--foo-bar--'
 *
 * _.toLower('fooBar');
 * // => 'foobar'
 *
 * _.toLower('__FOO_BAR__');
 * // => '__foo_bar__'
 */
function toLower(value) {
  return toString(value).toLowerCase();
}

module.exports = toLower;


/***/ }),

/***/ 82008:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ j),
/* harmony export */   n: () => (/* binding */ F)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67336);
/* harmony import */ var _AccordionContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42349);
/* harmony import */ var _hooks_useId_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28618);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97939);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98016);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91616);








const v = ({ theme: r, expanded: o, variant: t, disabled: i, error: a }) => a ? `1px solid ${r.colors.danger600} !important` : i ? `1px solid ${r.colors.neutral150}` : o ? `1px solid ${r.colors.primary600}` : t === "primary" ? `1px solid ${r.colors.neutral0}` : `1px solid ${r.colors.neutral100}`, j = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)((0,_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .o))``, k = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay)((0,_Box_Box_js__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .a))`
  border: ${v};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({ theme: r }) => r.colors.primary600};

    ${j} {
      color: ${({ theme: r, expanded: o }) => o ? void 0 : r.colors.primary700};
    }

    ${_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .o} {
      color: ${({ theme: r, expanded: o }) => o ? void 0 : r.colors.primary600};
    }

    & > ${_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .s} {
      background: ${({ theme: r }) => r.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({ theme: r }) => r.colors.primary200};
    }
  }
`, F = ({ children: r, disabled: o = !1, error: t, expanded: i = !1, hasErrorMessage: a = !0, id: f, onToggle: s, toggle: c, size: e = "M", variant: d = "primary", shadow: $ }) => {
  const l = (0,_hooks_useId_js__WEBPACK_IMPORTED_MODULE_6__/* .useId */ .B)(f), x = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ({ expanded: i, onToggle: s, toggle: c, id: l, size: e, variant: d, disabled: o }), [o, i, l, s, e, c, d]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_AccordionContext_js__WEBPACK_IMPORTED_MODULE_7__/* .AccordionContext */ .C.Provider, { value: x, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(k, { "data-strapi-expanded": i, disabled: o, "aria-disabled": o, expanded: i, hasRadius: !0, variant: d, error: t, shadow: $, children: r }), t && a && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .a, { paddingTop: 1, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .o, { variant: "pi", textColor: "danger600", children: t }) })] });
};



/***/ }),

/***/ 13203:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _AccordionContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42349);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91616);



const p = ({ children: r, ...n }) => {
  const { expanded: i, id: o } = (0,_AccordionContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useAccordion */ .O)();
  if (!i)
    return null;
  const c = `accordion-content-${o}`, e = `accordion-label-${o}`, t = `accordion-desc-${o}`;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a, { role: "region", id: c, "aria-labelledby": e, "aria-describedby": t, ...n, children: r });
};



/***/ }),

/***/ 42349:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ t),
/* harmony export */   O: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

const t = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  disabled: !1,
  expanded: !1,
  id: "",
  size: "M",
  variant: "primary"
}), r = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(t);



/***/ }),

/***/ 23845:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P: () => (/* binding */ Q)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CarretDown.js
var CarretDown = __webpack_require__(77044);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(67336);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/Accordion.js
var Accordion = __webpack_require__(82008);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionContext.js
var AccordionContext = __webpack_require__(42349);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Accordion/utils.js
const utils_n = ({ expanded: e, disabled: t, variant: a }) => {
  let r = "neutral100";
  return e ? r = "primary100" : t ? r = "neutral150" : a === "primary" && (r = "neutral0"), r;
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextButton/TextButton.js
var TextButton = __webpack_require__(4800);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Icon/Icon.js
var Icon = __webpack_require__(41240);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(98016);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(97939);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionToggle.js










const L = (0,styled_components_browser_esm/* default */.Ay)((0,TextButton/* TextButton */.Q))`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14 / 16}rem;
    height: ${14 / 16}rem;

    path {
      fill: ${({ theme: o, expanded: e }) => e ? o.colors.primary600 : o.colors.neutral500};
    }
  }
`, P = (0,styled_components_browser_esm/* default */.Ay)((0,Flex/* Flex */.s))`
  min-height: ${({ theme: o, size: e }) => o.sizes.accordions[e]};
  border-radius: ${({ theme: o, expanded: e }) => e ? `${o.borderRadius} ${o.borderRadius} 0 0` : o.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({ theme: o }) => o.colors.primary600};
      }
    }
  }
`, Q = ({ title: o, description: e, as: $ = "span", togglePosition: l = "right", action: g, ...w }) => {
  const { onToggle: s, toggle: m, expanded: r, id: c, size: t, variant: C, disabled: n } = (0,AccordionContext/* useAccordion */.O)(), T = `accordion-content-${c}`, h = `accordion-label-${c}`, k = `accordion-desc-${c}`, a = t === "M" ? 6 : 4, u = t === "M" ? a : a - 2, v = utils_n({ expanded: r, disabled: n, variant: C }), j = {
    as: $,
    fontWeight: t === "S" ? "bold" : void 0,
    id: h,
    textColor: r ? "primary600" : "neutral700",
    ellipsis: !0,
    variant: t === "M" ? "delta" : void 0
  }, z = r ? "primary600" : "neutral600", B = r ? "primary200" : "neutral200", f = t === "M" ? `${32 / 16}rem` : `${24 / 16}rem`, x = () => {
    n || (m && !s ? (console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'), m()) : s && s());
  }, b = (0,jsx_runtime.jsx)(Flex/* Flex */.s, { justifyContent: "center", borderRadius: "50%", height: f, width: f, transform: r ? "rotate(180deg)" : void 0, "data-strapi-dropdown": !0, "aria-hidden": !0, as: "span", background: B, cursor: n ? "not-allowed" : "pointer", onClick: x, shrink: 0, children: (0,jsx_runtime.jsx)(Icon/* Icon */.I, { as: CarretDown/* default */.A, width: t === "M" ? `${11 / 16}rem` : `${8 / 16}rem`, color: r ? "primary600" : "neutral600" }) });
  return (0,jsx_runtime.jsx)(P, { paddingBottom: u, paddingLeft: a, paddingRight: a, paddingTop: u, background: v, expanded: r, size: t, justifyContent: "space-between", cursor: n ? "not-allowed" : "", children: (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { gap: 3, flex: 1, maxWidth: "100%", children: [l === "left" && b, (0,jsx_runtime.jsx)(L, { onClick: x, "aria-disabled": n, "aria-expanded": r, "aria-controls": T, "aria-labelledby": h, "data-strapi-accordion-toggle": !0, expanded: r, type: "button", flex: 1, minWidth: 0, ...w, children: (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)(Accordion/* AccordionTypography */.I, { ...j, children: o }), e && (0,jsx_runtime.jsx)(Typography/* Typography */.o, { as: "p", id: k, textColor: z, children: e })] }) }), l === "right" && (0,jsx_runtime.jsxs)(Flex/* Flex */.s, { gap: 3, children: [b, g] }), l === "left" && g] }) });
};



/***/ }),

/***/ 40009:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);

const e = (r) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...r, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#212134",
    d: "M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"
  }
) }), a = e;



/***/ }),

/***/ 87123:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);

const t = (c) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...c, children: [
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { fill: "#212134", d: "M16.563 5.587a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z" }),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "path",
    {
      fill: "#212134",
      d: "M18.487 3.083c-.012.788-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574A1.943 1.943 0 0 1 14.9 2.11c.4-.684 1.2-1.066 1.981-.927a1.954 1.954 0 0 1 1.606 1.9c.011.748 1.17.748 1.158 0A3.138 3.138 0 0 0 17.565.17c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM16.563 14.372a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"
    }
  ),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "path",
    {
      fill: "#212134",
      d: "M18.487 11.867c-.012.789-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.675 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005ZM16.563 23.392a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"
    }
  ),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "path",
    {
      fill: "#212134",
      d: "M18.487 20.89c-.012.787-.487 1.512-1.229 1.796a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.967 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM7.378 5.622a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"
    }
  ),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "path",
    {
      fill: "#212134",
      d: "M9.302 3.119c-.011.788-.486 1.512-1.228 1.796a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38.205c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.005ZM7.378 14.406a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"
    }
  ),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "path",
    {
      fill: "#212134",
      d: "M9.302 11.902c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38 8.988c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.674 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.006ZM7.378 23.427a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"
    }
  ),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "path",
    {
      fill: "#212134",
      d: "M9.302 20.924c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927.933.156 1.594.967 1.605 1.9.012.748 1.17.748 1.16 0A3.139 3.139 0 0 0 8.38 18.01c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.569.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.747-1.147-.747-1.159 0Z"
    }
  )
] }), h = t;



/***/ }),

/***/ 56713:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);

const h = (l) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...l, children: [
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: 12, cy: 12, r: 12, fill: "#212134" }),
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "path",
    {
      fill: "#F6F6F9",
      d: "M17 12.569c0 .124-.1.224-.225.224h-3.981v3.982c0 .124-.101.225-.226.225h-1.136a.225.225 0 0 1-.226-.225v-3.981H7.226A.225.225 0 0 1 7 12.567v-1.136c0-.125.1-.226.225-.226h3.982V7.226c0-.124.1-.225.224-.225h1.138c.124 0 .224.1.224.225v3.982h3.982c.124 0 .225.1.225.224v1.138Z"
    }
  )
] }), r = h;



/***/ })

}]);