"use strict";
(self["webpackChunkurban_cobix"] = self["webpackChunkurban_cobix"] || []).push([[2225],{

/***/ 14459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* reexport */ DragLayer)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(91616);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/cjs/index.js
var cjs = __webpack_require__(34297);
;// CONCATENATED MODULE: ./.cache/admin/src/components/DragLayer/DragLayer.js




function getStyle(initialOffset, currentOffset, mouseOffset) {
  if (!initialOffset || !currentOffset) {
    return { display: "none" };
  }
  const { x, y } = mouseOffset;
  return {
    transform: `translate(${x}px, ${y}px)`
  };
}
function DragLayer({ renderItem }) {
  const { itemType, isDragging, item, initialOffset, currentOffset, mouseOffset } = (0,cjs.useDragLayer)(
    (monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
      mouseOffset: monitor.getClientOffset()
    })
  );
  if (!isDragging) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(
    Box/* Box */.a,
    {
      height: "100%",
      left: 0,
      position: "fixed",
      pointerEvents: "none",
      top: 0,
      zIndex: 100,
      width: "100%"
    },
    /* @__PURE__ */ react.createElement(Box/* Box */.a, { style: getStyle(initialOffset, currentOffset, mouseOffset) }, renderItem({ type: itemType, item }))
  );
}
DragLayer.propTypes = {
  renderItem: (prop_types_default()).func.isRequired
};

;// CONCATENATED MODULE: ./.cache/admin/src/components/DragLayer/index.js



/***/ }),

/***/ 80234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 89974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 11714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 1803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ListView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(58528);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(69733);
// EXTERNAL MODULE: ./.cache/admin/src/pages/App/selectors.js
var selectors = __webpack_require__(71526);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(98016);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.js + 1 modules
var Loader = __webpack_require__(10457);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.js
var Table = __webpack_require__(28244);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/TFooter.js
var TFooter = __webpack_require__(47527);
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
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(68433);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Pencil.js
var Pencil = __webpack_require__(46748);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.js
var Trash = __webpack_require__(34487);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var react_query_es = __webpack_require__(75942);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(56347);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(67336);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useContentTypes/index.js + 1 modules
var useContentTypes = __webpack_require__(30420);
// EXTERNAL MODULE: ./.cache/ee/admin/hooks/index.js + 3 modules
var hooks = __webpack_require__(80234);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/Layout/index.js + 3 modules
var Layout = __webpack_require__(89974);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/LimitsModal/index.js + 2 modules
var LimitsModal = __webpack_require__(59984);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/constants.js
var constants = __webpack_require__(11714);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/hooks/useReviewWorkflows.js
var useReviewWorkflows = __webpack_require__(78101);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/pages/ListView/ListView.js
















const ActionLink = (0,styled_components_browser_esm/* default */.Ay)((0,helper_plugin_esm/* Link */.N_))`
  align-items: center;
  height: ${(0,helper_plugin_esm/* pxToRem */.a8)(32)};
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spaces[2]}}`};
  width: ${(0,helper_plugin_esm/* pxToRem */.a8)(32)};

  svg {
    height: ${(0,helper_plugin_esm/* pxToRem */.a8)(12)};
    width: ${(0,helper_plugin_esm/* pxToRem */.a8)(12)};

    path {
      fill: ${({ theme }) => theme.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({ theme }) => theme.colors.neutral800};
      }
    }
  }
`;
function ReviewWorkflowsListView() {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { push } = (0,react_router/* useHistory */.W6)();
  const { collectionTypes, singleTypes, isLoading: isLoadingModels } = (0,useContentTypes/* useContentTypes */.m)();
  const { meta, workflows, isLoading, refetch } = (0,useReviewWorkflows/* useReviewWorkflows */.W)();
  const [workflowToDelete, setWorkflowToDelete] = react.useState(null);
  const [showLimitModal, setShowLimitModal] = react.useState(false);
  const { del } = (0,helper_plugin_esm/* useFetchClient */.ry)();
  const { formatAPIError } = (0,helper_plugin_esm/* useAPIErrorHandler */.wq)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { getFeature, isLoading: isLicenseLoading } = (0,hooks/* useLicenseLimits */.bO)();
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.z1)();
  const permissions = (0,es/* useSelector */.d4)(selectors/* selectAdminPermissions */.G);
  const {
    allowedActions: { canCreate, canDelete }
  } = (0,helper_plugin_esm/* useRBAC */.ec)(permissions.settings["review-workflows"]);
  const limits = getFeature("review-workflows");
  const { mutateAsync, isLoading: isLoadingMutation } = (0,react_query_es.useMutation)(
    async ({ workflowId, stages }) => {
      const {
        data: { data }
      } = await del(`/admin/review-workflows/workflows/${workflowId}`, {
        data: stages
      });
      return data;
    },
    {
      onSuccess() {
        toggleNotification({
          type: "success",
          message: { id: "notification.success.deleted", defaultMessage: "Deleted" }
        });
      }
    }
  );
  const getContentTypeDisplayName = (uid) => {
    const contentType = [...collectionTypes, ...singleTypes].find(
      (contentType2) => contentType2.uid === uid
    );
    return contentType.info.displayName;
  };
  const handleDeleteWorkflow = (workflowId) => {
    setWorkflowToDelete(workflowId);
  };
  const toggleConfirmDeleteDialog = () => {
    setWorkflowToDelete(null);
  };
  const handleConfirmDeleteDialog = async () => {
    try {
      const res = await mutateAsync({ workflowId: workflowToDelete });
      await refetch();
      setWorkflowToDelete(null);
      return res;
    } catch (error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(error)
      });
      return null;
    }
  };
  react.useEffect(() => {
    if (!isLoading && !isLicenseLoading) {
      if (limits?.[constants/* CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME */.hK] && meta?.workflowCount > parseInt(limits[constants/* CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME */.hK], 10)) {
        setShowLimitModal(true);
      }
    }
  }, [isLicenseLoading, isLoading, limits, meta?.workflowCount, meta.workflowsTotal]);
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
    Layout/* Header */.Y9,
    {
      primaryAction: /* @__PURE__ */ react.createElement(
        helper_plugin_esm/* LinkButton */.z9,
        {
          disabled: !canCreate,
          startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.A, null),
          size: "S",
          to: "/settings/review-workflows/create",
          onClick: (event) => {
            if (limits?.[constants/* CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME */.hK] && meta?.workflowCount >= parseInt(limits[constants/* CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME */.hK], 10)) {
              event.preventDefault();
              setShowLimitModal(true);
            } else {
              trackUsage("willCreateWorkflow");
            }
          }
        },
        formatMessage({
          id: "Settings.review-workflows.list.page.create",
          defaultMessage: "Create new workflow"
        })
      ),
      subtitle: formatMessage({
        id: "Settings.review-workflows.list.page.subtitle",
        defaultMessage: "Manage your content review process"
      }),
      title: formatMessage({
        id: "Settings.review-workflows.list.page.title",
        defaultMessage: "Review Workflows"
      })
    }
  ), /* @__PURE__ */ react.createElement(Layout/* Root */.bL, null, isLoading || isLoadingModels ? /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, null, formatMessage({
    id: "Settings.review-workflows.page.list.isLoading",
    defaultMessage: "Workflows are loading"
  }))) : /* @__PURE__ */ react.createElement(
    Table/* Table */.X,
    {
      colCount: 3,
      footer: (
        // TODO: we should be able to use a link here instead of an (inaccessible onClick) handler
        canCreate && /* @__PURE__ */ react.createElement(
          TFooter/* TFooter */.S,
          {
            icon: /* @__PURE__ */ react.createElement(Plus/* default */.A, null),
            onClick: () => {
              if (limits?.[constants/* CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME */.hK] && meta?.workflowCount >= parseInt(limits[constants/* CHARGEBEE_WORKFLOW_ENTITLEMENT_NAME */.hK], 10)) {
                setShowLimitModal(true);
              } else {
                push("/settings/review-workflows/create");
                trackUsage("willCreateWorkflow");
              }
            }
          },
          formatMessage({
            id: "Settings.review-workflows.list.page.create",
            defaultMessage: "Create new workflow"
          })
        )
      ),
      rowCount: 1
    },
    /* @__PURE__ */ react.createElement(Thead/* Thead */.d, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "sigma" }, formatMessage({
      id: "Settings.review-workflows.list.page.list.column.name.title",
      defaultMessage: "Name"
    }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "sigma" }, formatMessage({
      id: "Settings.review-workflows.list.page.list.column.stages.title",
      defaultMessage: "Stages"
    }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "sigma" }, formatMessage({
      id: "Settings.review-workflows.list.page.list.column.contentTypes.title",
      defaultMessage: "Content Types"
    }))), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.s, null, formatMessage({
      id: "Settings.review-workflows.list.page.list.column.actions.title",
      defaultMessage: "Actions"
    }))))),
    /* @__PURE__ */ react.createElement(Tbody/* Tbody */.N, null, workflows.map((workflow) => /* @__PURE__ */ react.createElement(
      Tr.Tr,
      {
        ...(0,helper_plugin_esm/* onRowClick */.qM)({
          fn(event) {
            if (event.target.nodeName === "BUTTON") {
              return;
            }
            push(`/settings/review-workflows/${workflow.id}`);
          }
        }),
        key: `workflow-${workflow.id}`
      },
      /* @__PURE__ */ react.createElement(Cell.Td, { width: (0,helper_plugin_esm/* pxToRem */.a8)(250) }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { textColor: "neutral800", fontWeight: "bold", ellipsis: true }, workflow.name)),
      /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { textColor: "neutral800" }, workflow.stages.length)),
      /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { textColor: "neutral800" }, (workflow?.contentTypes ?? []).map(getContentTypeDisplayName).join(", "))),
      /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { alignItems: "center", justifyContent: "end" }, /* @__PURE__ */ react.createElement(
        ActionLink,
        {
          to: `/settings/review-workflows/${workflow.id}`,
          "aria-label": formatMessage(
            {
              id: "Settings.review-workflows.list.page.list.column.actions.edit.label",
              defaultMessage: "Edit {name}"
            },
            { name: workflow.name }
          )
        },
        /* @__PURE__ */ react.createElement(Pencil/* default */.A, null)
      ), workflows.length > 1 && canDelete && /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.K,
        {
          "aria-label": formatMessage(
            {
              id: "Settings.review-workflows.list.page.list.column.actions.delete.label",
              defaultMessage: "Delete {name}"
            },
            { name: "Default workflow" }
          ),
          icon: /* @__PURE__ */ react.createElement(Trash/* default */.A, null),
          noBorder: true,
          onClick: () => {
            handleDeleteWorkflow(workflow.id);
          }
        }
      )))
    )))
  ), /* @__PURE__ */ react.createElement(
    helper_plugin_esm/* ConfirmDialog */.TM,
    {
      bodyText: {
        id: "Settings.review-workflows.list.page.delete.confirm.body",
        defaultMessage: "If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"
      },
      isConfirmButtonLoading: isLoadingMutation,
      isOpen: !!workflowToDelete,
      onToggleDialog: toggleConfirmDeleteDialog,
      onConfirm: handleConfirmDeleteDialog
    }
  ), /* @__PURE__ */ react.createElement(LimitsModal/* Root */.bL, { isOpen: showLimitModal, onClose: () => setShowLimitModal(false) }, /* @__PURE__ */ react.createElement(LimitsModal/* Title */.hE, null, formatMessage({
    id: "Settings.review-workflows.list.page.workflows.limit.title",
    defaultMessage: "You\u2019ve reached the limit of workflows in your plan"
  })), /* @__PURE__ */ react.createElement(LimitsModal/* Body */.nB, null, formatMessage({
    id: "Settings.review-workflows.list.page.workflows.limit.body",
    defaultMessage: "Delete a workflow or contact Sales to enable more workflows."
  })))));
}

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/pages/ListView/index.js





/* harmony default export */ function ListView() {
  const permissions = (0,es/* useSelector */.d4)(selectors/* selectAdminPermissions */.G);
  return /* @__PURE__ */ react.createElement(helper_plugin_esm/* CheckPagePermissions */.kz, { permissions: permissions.settings["review-workflows"].main }, /* @__PURE__ */ react.createElement(ReviewWorkflowsListView, null));
}


/***/ }),

/***/ 47527:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67336);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91616);
/* harmony import */ var _Divider_Divider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11744);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98016);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97939);






const s = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)((0,_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a))`
  height: ${24 / 16}rem;
  width: ${24 / 16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10 / 16}rem;
    width: ${10 / 16}rem;
  }

  svg path {
    fill: ${({ theme: r }) => r.colors.primary600};
  }
`, l = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)((0,_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a))`
  border-radius: 0 0 ${({ theme: r }) => r.borderRadius} ${({ theme: r }) => r.borderRadius};
  display: block;
  width: 100%;
  border: none;
`, y = ({ children: r, icon: d, ...n }) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Divider_Divider_js__WEBPACK_IMPORTED_MODULE_3__/* .Divider */ .c, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l, { as: "button", background: "primary100", padding: 5, ...n, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .s, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(s, { "aria-hidden": !0, background: "primary200", children: d }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a, { paddingLeft: 3, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_5__/* .Typography */ .o, { variant: "pi", fontWeight: "bold", textColor: "primary600", children: r }) })] }) })] });



/***/ }),

/***/ 40009:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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



/***/ })

}]);