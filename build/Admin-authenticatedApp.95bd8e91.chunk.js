"use strict";
(self["webpackChunkurban_cobix"] = self["webpackChunkurban_cobix"] || []).push([[6651],{

/***/ 42798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_AuthenticatedApp)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(58528);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(58156);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(75942);
;// CONCATENATED MODULE: ./.cache/package.json
const package_namespaceObject = {"rE":"4.12.0"};
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 23 modules
var hooks = __webpack_require__(79380);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 7 modules
var utils = __webpack_require__(48468);
// EXTERNAL MODULE: ./node_modules/react-dnd/dist/cjs/index.js
var cjs = __webpack_require__(34297);
// EXTERNAL MODULE: ./node_modules/react-dnd-html5-backend/dist/cjs/index.js
var dist_cjs = __webpack_require__(78897);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var react_redux_es = __webpack_require__(69733);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(56347);
// EXTERNAL MODULE: ./node_modules/lodash/at.js
var at = __webpack_require__(69412);
var at_default = /*#__PURE__*/__webpack_require__.n(at);
// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/layout.js
var layout = __webpack_require__(71557);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(98016);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Portal/Portal.js
var Portal = __webpack_require__(39398);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/FocusTrap/FocusTrap.js
var FocusTrap = __webpack_require__(86352);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(63292);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(91616);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(90954);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cross.js
var Cross = __webpack_require__(9605);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(67336);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Modal/components/Modal.js







const ModalWrapper = (0,styled_components_browser_esm/* default */.Ay)((0,Flex/* Flex */.s))`
  position: fixed;
  z-index: 4;
  inset: 0;
  /* this is theme.colors.neutral800 with opacity */
  background: ${({ theme }) => `${theme.colors.neutral800}1F`};
`;
const Modal = ({ onClose, onSkip, children, hideSkip }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ react.createElement(Portal/* Portal */.Z, null, /* @__PURE__ */ react.createElement(ModalWrapper, { onClick: onClose, padding: 8, justifyContent: "center" }, /* @__PURE__ */ react.createElement(FocusTrap/* FocusTrap */.s, { onEscape: onClose }, /* @__PURE__ */ react.createElement(
    Flex/* Flex */.s,
    {
      direction: "column",
      alignItems: "stretch",
      background: "neutral0",
      width: (0,helper_plugin_esm/* pxToRem */.a8)(660),
      shadow: "popupShadow",
      hasRadius: true,
      padding: 4,
      gap: 8,
      role: "dialog",
      "aria-modal": true,
      onClick: (e) => e.stopPropagation()
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(
      IconButton/* IconButton */.K,
      {
        onClick: onClose,
        "aria-label": formatMessage({ id: "app.utils.close-label", defaultMessage: "Close" }),
        icon: /* @__PURE__ */ react.createElement(Cross/* default */.A, null)
      }
    )),
    /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingLeft: 7, paddingRight: 7, paddingBottom: hideSkip ? 8 : 0 }, children),
    !hideSkip && /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(Button/* Button */.$, { variant: "tertiary", onClick: onSkip }, formatMessage({
      id: "app.components.GuidedTour.skip",
      defaultMessage: "Skip the tour"
    })))
  ))));
};
Modal.propTypes = {
  children: (prop_types_default()).node.isRequired,
  onClose: (prop_types_default()).func.isRequired,
  onSkip: (prop_types_default()).func.isRequired,
  hideSkip: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const components_Modal = (Modal);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(97939);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowRight.js
var ArrowRight = __webpack_require__(65648);
// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/constants.js
var constants = __webpack_require__(28522);
// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/Stepper/StepLine.js
var StepLine = __webpack_require__(72825);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Modal/components/Content.js





const LiStyled = styled_components_browser_esm/* default */.Ay.li`
  list-style: disc;
  &::marker {
    color: ${({ theme }) => theme.colors.neutral800};
  }
`;
const Content = ({ id, defaultMessage }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 4, paddingBottom: 6 }, formatMessage(
    { id, defaultMessage },
    {
      documentationLink: DocumentationLink,
      b: Bold,
      p: Paragraph,
      light: Light,
      ul: List,
      li: ListItem
    }
  ));
};
const DocumentationLink = (children) => /* @__PURE__ */ react.createElement(
  Typography/* Typography */.o,
  {
    as: "a",
    textColor: "primary600",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-parameters"
  },
  children
);
const Bold = (children) => /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { fontWeight: "semiBold" }, children);
const Paragraph = (children) => /* @__PURE__ */ react.createElement(Typography/* Typography */.o, null, children);
const Light = (children) => /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { textColor: "neutral600" }, children);
const List = (children) => /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingLeft: 6 }, /* @__PURE__ */ react.createElement("ul", null, children));
const ListItem = (children) => /* @__PURE__ */ react.createElement(LiStyled, null, children);
Content.propTypes = {
  id: (prop_types_default()).string.isRequired,
  defaultMessage: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_Content = (Content);

// EXTERNAL MODULE: ./.cache/admin/src/components/GuidedTour/Stepper/StepNumber.js
var StepNumber = __webpack_require__(97734);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Modal/components/StepNumberWithPadding.js




const StepNumberWithPadding = ({ number, last, type }) => /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 3, paddingBottom: last ? 0 : 3 }, /* @__PURE__ */ react.createElement(StepNumber/* default */.A, { number, type }));
StepNumberWithPadding.defaultProps = {
  number: void 0,
  last: false,
  type: ""
};
StepNumberWithPadding.propTypes = {
  number: (prop_types_default()).number,
  last: (prop_types_default()).bool,
  type: (prop_types_default()).string
};
/* harmony default export */ const components_StepNumberWithPadding = (StepNumberWithPadding);

;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Modal/components/Stepper.js










const StepperModal = ({
  title,
  content,
  cta,
  onCtaClick,
  sectionIndex,
  stepIndex,
  hasSectionAfter
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const hasSectionBefore = sectionIndex > 0;
  const hasStepsBefore = stepIndex > 0;
  const nextSectionIndex = sectionIndex + 1;
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { alignItems: "stretch" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { marginRight: 8, justifyContent: "center", minWidth: (0,helper_plugin_esm/* pxToRem */.a8)(30) }, hasSectionBefore && /* @__PURE__ */ react.createElement(StepLine/* default */.A, { type: constants/* IS_DONE */.sO, minHeight: (0,helper_plugin_esm/* pxToRem */.a8)(24) })), /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "sigma", textColor: "primary600" }, formatMessage({
    id: "app.components.GuidedTour.title",
    defaultMessage: "3 steps to get started"
  }))), /* @__PURE__ */ react.createElement(Flex/* Flex */.s, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { marginRight: 8, minWidth: (0,helper_plugin_esm/* pxToRem */.a8)(30) }, /* @__PURE__ */ react.createElement(
    components_StepNumberWithPadding,
    {
      number: sectionIndex + 1,
      type: hasStepsBefore ? constants/* IS_DONE */.sO : constants/* IS_ACTIVE */.mY
    }
  )), /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "alpha", fontWeight: "bold", textColor: "neutral800", as: "h3", id: "title" }, formatMessage(title))), /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { alignItems: "stretch" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { marginRight: 8, direction: "column", justifyContent: "center", minWidth: (0,helper_plugin_esm/* pxToRem */.a8)(30) }, hasSectionAfter && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(StepLine/* default */.A, { type: constants/* IS_DONE */.sO }), hasStepsBefore && /* @__PURE__ */ react.createElement(components_StepNumberWithPadding, { number: nextSectionIndex + 1, type: constants/* IS_ACTIVE */.mY, last: true }))), /* @__PURE__ */ react.createElement(Box/* Box */.a, null, /* @__PURE__ */ react.createElement(components_Content, { ...content }), cta && (cta.target ? /* @__PURE__ */ react.createElement(helper_plugin_esm/* LinkButton */.z9, { endIcon: /* @__PURE__ */ react.createElement(ArrowRight/* default */.A, null), onClick: onCtaClick, to: cta.target }, formatMessage(cta.title)) : /* @__PURE__ */ react.createElement(Button/* Button */.$, { endIcon: /* @__PURE__ */ react.createElement(ArrowRight/* default */.A, null), onClick: onCtaClick }, formatMessage(cta.title))))), hasStepsBefore && hasSectionAfter && /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 3 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { marginRight: 8, justifyContent: "center", width: (0,helper_plugin_esm/* pxToRem */.a8)(30) }, /* @__PURE__ */ react.createElement(StepLine/* default */.A, { type: constants/* IS_DONE */.sO, minHeight: (0,helper_plugin_esm/* pxToRem */.a8)(24) }))));
};
StepperModal.defaultProps = {
  currentStep: null,
  cta: void 0
};
StepperModal.propTypes = {
  sectionIndex: (prop_types_default()).number.isRequired,
  stepIndex: (prop_types_default()).number.isRequired,
  hasSectionAfter: (prop_types_default()).bool.isRequired,
  content: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired
  }).isRequired,
  cta: prop_types_default().shape({
    target: (prop_types_default()).string,
    title: prop_types_default().shape({
      id: (prop_types_default()).string.isRequired,
      defaultMessage: (prop_types_default()).string.isRequired
    })
  }),
  currentStep: (prop_types_default()).string,
  onCtaClick: (prop_types_default()).func.isRequired,
  title: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired
  }).isRequired
};
/* harmony default export */ const Stepper = (StepperModal);

// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(41261);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Modal/reducer.js

const initialState = {
  stepContent: null,
  sectionIndex: null,
  stepIndex: null,
  hasSectionAfter: false,
  hasStepAfter: false
};
const reducer = (state = initialState, action) => (0,immer_esm/* default */.Ay)(state, (draftState) => {
  switch (action.type) {
    case "UPDATE_MODAL": {
      draftState.stepContent = action.content;
      draftState.sectionIndex = action.newSectionIndex;
      draftState.stepIndex = action.newStepIndex;
      draftState.hasSectionAfter = action.newHasSectionAfter;
      draftState.hasStepAfter = action.newHasStepAfter;
      break;
    }
    default: {
      return draftState;
    }
  }
});
/* harmony default export */ const Modal_reducer = (reducer);

;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/Modal/index.js







const GuidedTourModal = () => {
  const {
    currentStep,
    guidedTourState,
    setCurrentStep,
    setStepState,
    isGuidedTourVisible,
    setSkipped
  } = (0,helper_plugin_esm/* useGuidedTour */.Cx)();
  const [isVisible, setIsVisible] = (0,react.useState)(currentStep);
  const [{ stepContent, sectionIndex, stepIndex, hasSectionAfter, hasStepAfter }, dispatch] = (0,react.useReducer)(Modal_reducer, initialState);
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.z1)();
  (0,react.useEffect)(() => {
    if (!currentStep) {
      setIsVisible(false);
      return;
    }
    const [isStepDone] = at_default()(guidedTourState, currentStep);
    setIsVisible(!isStepDone && isGuidedTourVisible);
  }, [currentStep, guidedTourState, isGuidedTourVisible]);
  (0,react.useEffect)(() => {
    if (currentStep) {
      const [content] = at_default()(layout/* default */.A, currentStep);
      const sectionKeys = Object.keys(guidedTourState);
      const [sectionName, stepName] = currentStep.split(".");
      const newSectionIndex = sectionKeys.indexOf(sectionName);
      const newStepIndex = Object.keys(guidedTourState[sectionName]).indexOf(stepName);
      const newHasSectionAfter = newSectionIndex < sectionKeys.length - 1;
      const newHasStepAfter = newStepIndex < Object.keys(guidedTourState[sectionName]).length - 1;
      dispatch({
        type: "UPDATE_MODAL",
        content,
        newSectionIndex,
        newStepIndex,
        newHasSectionAfter,
        newHasStepAfter
      });
    }
  }, [currentStep, guidedTourState]);
  const handleCtaClick = () => {
    setStepState(currentStep, true);
    trackUsage(stepContent.trackingEvent);
    setCurrentStep(null);
  };
  const handleSkip = () => {
    setSkipped(true);
    setCurrentStep(null);
    trackUsage("didSkipGuidedtour");
  };
  if (isVisible && stepContent) {
    return /* @__PURE__ */ react.createElement(
      components_Modal,
      {
        hideSkip: !hasStepAfter && !hasSectionAfter,
        onSkip: handleSkip,
        onClose: handleCtaClick
      },
      /* @__PURE__ */ react.createElement(
        Stepper,
        {
          ...stepContent,
          onCtaClick: handleCtaClick,
          currentStep,
          sectionIndex,
          stepIndex,
          hasSectionAfter
        }
      )
    );
  }
  return null;
};
/* harmony default export */ const GuidedTour_Modal = (GuidedTourModal);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.js
var Divider = __webpack_require__(11744);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/MainNav.js
var MainNav = __webpack_require__(3115);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavBrand.js
var NavBrand = __webpack_require__(52699);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavSections.js
var NavSections = __webpack_require__(53412);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavLink.js
var NavLink = __webpack_require__(26332);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavSection.js
var NavSection = __webpack_require__(47505);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavFooter.js
var NavFooter = __webpack_require__(17495);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavUser.js
var NavUser = __webpack_require__(28007);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/MainNav/NavCondense.js
var NavCondense = __webpack_require__(79419);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Write.js
var Write = __webpack_require__(33566);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Exit.js
var Exit = __webpack_require__(52989);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(54625);
;// CONCATENATED MODULE: ./.cache/admin/src/components/LeftMenu/index.js










const LinkUserWrapper = (0,styled_components_browser_esm/* default */.Ay)((0,Box/* Box */.a))`
  width: ${150 / 16}rem;
  position: absolute;
  bottom: ${({ theme }) => theme.spaces[9]};
  left: ${({ theme }) => theme.spaces[5]};
`;
const LinkUser = (0,styled_components_browser_esm/* default */.Ay)((0,react_router_dom/* NavLink */.k2))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: ${({ theme }) => `${theme.spaces[2]} ${theme.spaces[4]}`};
  border-radius: ${({ theme }) => theme.spaces[1]};

  &:hover {
    background: ${({ theme, logout }) => logout ? theme.colors.danger100 : theme.colors.primary100};
    text-decoration: none;
  }

  svg {
    path {
      fill: ${({ theme }) => theme.colors.danger600};
    }
  }
`;
const LeftMenu = ({ generalSectionLinks, pluginsSectionLinks }) => {
  const buttonRef = (0,react.useRef)();
  const [userLinksVisible, setUserLinksVisible] = (0,react.useState)(false);
  const {
    logos: { menu }
  } = (0,hooks/* useConfigurations */.Bp)();
  const [condensed, setCondensed] = (0,helper_plugin_esm/* usePersistentState */.ud)("navbar-condensed", false);
  const { userDisplayName } = (0,helper_plugin_esm/* useAppInfo */.Xe)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.z1)();
  const { pathname } = (0,react_router/* useLocation */.zy)();
  const history = (0,react_router/* useHistory */.W6)();
  const { post } = (0,helper_plugin_esm/* getFetchClient */.GD)();
  const initials = userDisplayName.split(" ").map((name) => name.substring(0, 1)).join("").substring(0, 2);
  const handleToggleUserLinks = () => setUserLinksVisible((prev) => !prev);
  const handleLogout = async () => {
    await post("/admin/logout");
    helper_plugin_esm/* auth */.j2.clearAppStorage();
    handleToggleUserLinks();
    history.push("/auth/login");
  };
  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget) && e.relatedTarget?.parentElement?.id !== "main-nav-user-button") {
      setUserLinksVisible(false);
    }
  };
  const handleClickOnLink = (destination = null) => {
    trackUsage("willNavigate", { from: pathname, to: destination });
  };
  const menuTitle = formatMessage({
    id: "app.components.LeftMenu.navbrand.title",
    defaultMessage: "Strapi Dashboard"
  });
  return /* @__PURE__ */ react.createElement(MainNav/* MainNav */.N, { condensed }, /* @__PURE__ */ react.createElement(
    NavBrand/* NavBrand */.T,
    {
      as: react_router_dom/* NavLink */.k2,
      workplace: formatMessage({
        id: "app.components.LeftMenu.navbrand.workplace",
        defaultMessage: "Workplace"
      }),
      title: menuTitle,
      icon: /* @__PURE__ */ react.createElement(
        "img",
        {
          src: menu.custom || menu.default,
          alt: formatMessage({
            id: "app.components.LeftMenu.logo.alt",
            defaultMessage: "Application logo"
          })
        }
      )
    }
  ), /* @__PURE__ */ react.createElement(Divider/* Divider */.c, null), /* @__PURE__ */ react.createElement(NavSections/* NavSections */.I, null, /* @__PURE__ */ react.createElement(
    NavLink/* NavLink */.k,
    {
      as: react_router_dom/* NavLink */.k2,
      to: "/content-manager",
      icon: /* @__PURE__ */ react.createElement(Write/* default */.A, null),
      onClick: () => handleClickOnLink("/content-manager")
    },
    formatMessage({ id: "global.content-manager", defaultMessage: "Content manager" })
  ), pluginsSectionLinks.length > 0 ? /* @__PURE__ */ react.createElement(
    NavSection/* NavSection */.R,
    {
      label: formatMessage({
        id: "app.components.LeftMenu.plugins",
        defaultMessage: "Plugins"
      })
    },
    pluginsSectionLinks.map((link) => {
      const Icon = link.icon;
      return /* @__PURE__ */ react.createElement(
        NavLink/* NavLink */.k,
        {
          as: react_router_dom/* NavLink */.k2,
          to: link.to,
          key: link.to,
          icon: /* @__PURE__ */ react.createElement(Icon, null),
          onClick: () => handleClickOnLink(link.to)
        },
        formatMessage(link.intlLabel)
      );
    })
  ) : null, generalSectionLinks.length > 0 ? /* @__PURE__ */ react.createElement(
    NavSection/* NavSection */.R,
    {
      label: formatMessage({
        id: "app.components.LeftMenu.general",
        defaultMessage: "General"
      })
    },
    generalSectionLinks.map((link) => {
      const LinkIcon = link.icon;
      return /* @__PURE__ */ react.createElement(
        NavLink/* NavLink */.k,
        {
          as: react_router_dom/* NavLink */.k2,
          badgeContent: link.notificationsCount > 0 && link.notificationsCount.toString() || void 0,
          to: link.to,
          key: link.to,
          icon: /* @__PURE__ */ react.createElement(LinkIcon, null),
          onClick: () => handleClickOnLink(link.to)
        },
        formatMessage(link.intlLabel)
      );
    })
  ) : null), /* @__PURE__ */ react.createElement(NavFooter/* NavFooter */.L, null, /* @__PURE__ */ react.createElement(
    NavUser/* NavUser */.r,
    {
      id: "main-nav-user-button",
      ref: buttonRef,
      onClick: handleToggleUserLinks,
      initials
    },
    userDisplayName
  ), userLinksVisible && /* @__PURE__ */ react.createElement(
    LinkUserWrapper,
    {
      onBlur: handleBlur,
      padding: 1,
      shadow: "tableShadow",
      background: "neutral0",
      hasRadius: true
    },
    /* @__PURE__ */ react.createElement(FocusTrap/* FocusTrap */.s, { onEscape: handleToggleUserLinks }, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "stretch", gap: 0 }, /* @__PURE__ */ react.createElement(LinkUser, { tabIndex: 0, onClick: handleToggleUserLinks, to: "/me" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, null, formatMessage({
      id: "global.profile",
      defaultMessage: "Profile"
    }))), /* @__PURE__ */ react.createElement(LinkUser, { tabIndex: 0, onClick: handleLogout, logout: "logout", to: "/auth/login" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { textColor: "danger600" }, formatMessage({
      id: "app.components.LeftMenu.logout",
      defaultMessage: "Logout"
    })), /* @__PURE__ */ react.createElement(Exit/* default */.A, null))))
  ), /* @__PURE__ */ react.createElement(NavCondense/* NavCondense */.v, { onClick: () => setCondensed((s) => !s) }, condensed ? formatMessage({
    id: "app.components.LeftMenu.expand",
    defaultMessage: "Expand the navbar"
  }) : formatMessage({
    id: "app.components.LeftMenu.collapse",
    defaultMessage: "Collapse the navbar"
  }))));
};
LeftMenu.propTypes = {
  generalSectionLinks: (prop_types_default()).array.isRequired,
  pluginsSectionLinks: (prop_types_default()).array.isRequired
};
/* harmony default export */ const components_LeftMenu = (LeftMenu);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/SkipToContent.js
var SkipToContent = __webpack_require__(13926);
;// CONCATENATED MODULE: ./.cache/admin/src/layouts/AppLayout/index.js





const FlexBox = (0,styled_components_browser_esm/* default */.Ay)((0,Box/* Box */.a))`
  flex: 1;
`;
const AppLayout = ({ children, sideNav }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ react.createElement(Box/* Box */.a, { background: "neutral100" }, /* @__PURE__ */ react.createElement(SkipToContent/* SkipToContent */.o, null, formatMessage({ id: "skipToContent", defaultMessage: "Skip to content" })), /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { alignItems: "flex-start" }, sideNav, /* @__PURE__ */ react.createElement(FlexBox, null, children)));
};
AppLayout.propTypes = {
  children: (prop_types_default()).node.isRequired,
  sideNav: (prop_types_default()).node.isRequired
};
/* harmony default export */ const layouts_AppLayout = (AppLayout);

// EXTERNAL MODULE: ./.cache/admin/src/pages/App/constants.js
var App_constants = __webpack_require__(45901);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Icon/Icon.js
var Icon = __webpack_require__(41240);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Popover/Popover.js
var Popover = __webpack_require__(48176);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(69688);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Message.js
var Message = __webpack_require__(95274);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Question.js
var Question = __webpack_require__(81813);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Play.js
var Play = __webpack_require__(37259);
;// CONCATENATED MODULE: ./.cache/admin/src/assets/images/onboarding-preview.png
const onboarding_preview_namespaceObject = __webpack_require__.p + "19eb2dfcf2603eb55733.png";
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Book.js
var Book = __webpack_require__(27220);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/PaperPlane.js
var PaperPlane = __webpack_require__(62881);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/Admin/Onboarding/constants.js

const VIDEO_LINKS = [
  {
    label: {
      id: "app.components.Onboarding.link.build-content",
      defaultMessage: "Build a content architecture"
    },
    href: "https://www.youtube.com/watch?v=G9GjN0RxhkE",
    duration: "5:48"
  },
  {
    label: {
      id: "app.components.Onboarding.link.manage-content",
      defaultMessage: "Add & manage content"
    },
    href: "https://www.youtube.com/watch?v=DEZw4KbybAI",
    duration: "3:18"
  },
  {
    label: { id: "app.components.Onboarding.link.manage-media", defaultMessage: "Manage media" },
    href: "https://www.youtube.com/watch?v=-61MuiMQb38",
    duration: "3:41"
  }
];
const WATCH_MORE = {
  href: "https://www.youtube.com/playlist?list=PL7Q0DQYATmvidz6lEmwE5nIcOAYagxWqq",
  label: {
    id: "app.components.Onboarding.link.more-videos",
    defaultMessage: "Watch more videos"
  }
};
const DOCUMENTATION_LINKS = [
  {
    label: { id: "global.documentation", defaultMessage: "documentation" },
    href: "https://docs.strapi.io",
    icon: Book/* default */.A
  },
  {
    label: { id: "app.static.links.cheatsheet", defaultMessage: "cheatsheet" },
    href: "https://strapi-showcase.s3-us-west-2.amazonaws.com/CheatSheet.pdf",
    icon: PaperPlane/* default */.A
  }
];

;// CONCATENATED MODULE: ./.cache/admin/src/pages/Admin/Onboarding/index.js








const HelperButton = (0,styled_components_browser_esm/* default */.Ay)((0,Button/* Button */.$))`
  border-radius: 50%;
  padding: ${({ theme }) => theme.spaces[3]};
  /* Resetting 2rem height defined by Button component */
  height: 100%;
`;
const IconWrapper = (0,styled_components_browser_esm/* default */.Ay)((0,Flex/* Flex */.s))`
  transform: translate(-50%, -50%);
`;
const VideoLinkWrapper = (0,styled_components_browser_esm/* default */.Ay)((0,Flex/* Flex */.s))`
  text-decoration: none;

  :focus-visible {
    outline-offset: ${({ theme }) => `-${theme.spaces[1]}`};
  }

  :hover {
    background: ${({ theme }) => theme.colors.primary100};

    /* Hover style for the number displayed */
    ${Typography/* Typography */.o}:first-child {
      color: ${({ theme }) => theme.colors.primary500};
    }

    /* Hover style for the label */
    ${Typography/* Typography */.o}:nth-child(1) {
      color: ${({ theme }) => theme.colors.primary600};
    }
  }
`;
const Preview = styled_components_browser_esm/* default */.Ay.img`
  width: ${({ theme }) => theme.spaces[10]};
  height: ${({ theme }) => theme.spaces[8]};
  /* Same overlay used in ModalLayout */
  background: ${({ theme }) => `${theme.colors.neutral800}1F`};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
const TypographyLineHeight = (0,styled_components_browser_esm/* default */.Ay)((0,Typography/* Typography */.o))`
  /* line height of label and watch more to 1 so they can be better aligned visually */
  line-height: 1;
`;
const TextLink = (0,styled_components_browser_esm/* default */.Ay)(TypographyLineHeight)`
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
const Onboarding = () => {
  const triggerRef = (0,react.useRef)();
  const [isOpen, setIsOpen] = (0,react.useState)(false);
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { communityEdition } = (0,helper_plugin_esm/* useAppInfo */.Xe)();
  const handlePopoverVisibility = () => {
    setIsOpen((prev) => !prev);
  };
  const docLinks = [
    ...DOCUMENTATION_LINKS,
    {
      label: { id: "Settings.application.get-help", defaultMessage: "Get help" },
      icon: Message/* default */.A,
      href: communityEdition ? "https://discord.strapi.io" : "https://support.strapi.io/support/home"
    }
  ];
  return /* @__PURE__ */ react.createElement(Box/* Box */.a, { as: "aside", position: "fixed", bottom: 2, right: 2 }, /* @__PURE__ */ react.createElement(
    HelperButton,
    {
      "aria-label": formatMessage(
        isOpen ? {
          id: "app.components.Onboarding.help.button-close",
          defaultMessage: "Close help menu"
        } : {
          id: "app.components.Onboarding.help.button",
          defaultMessage: "Open help menu"
        }
      ),
      onClick: handlePopoverVisibility,
      ref: triggerRef
    },
    /* @__PURE__ */ react.createElement(Icon/* Icon */.I, { as: isOpen ? Cross/* default */.A : Question/* default */.A, color: "buttonNeutral0" })
  ), isOpen && /* @__PURE__ */ react.createElement(Portal/* Portal */.Z, null, /* @__PURE__ */ react.createElement(
    Popover/* Content */.UC,
    {
      padding: 0,
      onDimiss: handlePopoverVisibility,
      source: triggerRef,
      placement: "top-end",
      spacing: 12
    },
    /* @__PURE__ */ react.createElement(
      Flex/* Flex */.s,
      {
        justifyContent: "space-between",
        paddingBottom: 5,
        paddingRight: 6,
        paddingLeft: 6,
        paddingTop: 6
      },
      /* @__PURE__ */ react.createElement(TypographyLineHeight, { fontWeight: "bold" }, formatMessage({
        id: "app.components.Onboarding.title",
        defaultMessage: "Get started videos"
      })),
      /* @__PURE__ */ react.createElement(
        TextLink,
        {
          as: "a",
          href: WATCH_MORE.href,
          target: "_blank",
          rel: "noreferrer noopener",
          variant: "pi",
          textColor: "primary600"
        },
        formatMessage(WATCH_MORE.label)
      )
    ),
    /* @__PURE__ */ react.createElement(Divider/* Divider */.c, null),
    VIDEO_LINKS.map(({ href, duration, label }, index) => /* @__PURE__ */ react.createElement(
      VideoLinkWrapper,
      {
        as: "a",
        href,
        target: "_blank",
        rel: "noreferrer noopener",
        key: href,
        hasRadius: true,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 6,
        paddingRight: 11
      },
      /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingRight: 5 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { textColor: "neutral200", variant: "alpha" }, index + 1)),
      /* @__PURE__ */ react.createElement(Box/* Box */.a, { position: "relative" }, /* @__PURE__ */ react.createElement(Preview, { src: onboarding_preview_namespaceObject, alt: "" }), /* @__PURE__ */ react.createElement(
        IconWrapper,
        {
          position: "absolute",
          top: "50%",
          left: "50%",
          background: "primary600",
          borderRadius: "50%",
          justifyContent: "center",
          width: 6,
          height: 6
        },
        /* @__PURE__ */ react.createElement(Icon/* Icon */.I, { as: Play/* default */.A, color: "buttonNeutral0", width: 3, height: 3 })
      )),
      /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "column", alignItems: "start", paddingLeft: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { fontWeight: "bold" }, formatMessage(label)), /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.s, null, ":"), /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { textColor: "neutral600", variant: "pi" }, duration))
    )),
    /* @__PURE__ */ react.createElement(
      Flex/* Flex */.s,
      {
        direction: "column",
        alignItems: "stretch",
        gap: 2,
        paddingLeft: 5,
        paddingTop: 2,
        paddingBottom: 5
      },
      docLinks.map(({ label, href, icon }) => /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { gap: 3, key: href }, /* @__PURE__ */ react.createElement(Icon/* Icon */.I, { as: icon, color: "primary600" }), /* @__PURE__ */ react.createElement(
        TextLink,
        {
          as: "a",
          href,
          target: "_blank",
          rel: "noreferrer noopener",
          variant: "sigma",
          textColor: "primary700"
        },
        formatMessage(label)
      )))
    )
  )));
};
/* harmony default export */ const Admin_Onboarding = (Onboarding);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/Admin/index.js













const CM = (0,react.lazy)(
  () => Promise.all(/* import() | content-manager */[__webpack_require__.e(2959), __webpack_require__.e(6873), __webpack_require__.e(8772), __webpack_require__.e(4492)]).then(__webpack_require__.bind(__webpack_require__, 13352))
);
const HomePage = (0,react.lazy)(() => __webpack_require__.e(/* import() | Admin_homePage */ 7675).then(__webpack_require__.bind(__webpack_require__, 83672)));
const InstalledPluginsPage = (0,react.lazy)(
  () => __webpack_require__.e(/* import() | Admin_pluginsPage */ 2076).then(__webpack_require__.bind(__webpack_require__, 85776))
);
const MarketplacePage = (0,react.lazy)(
  () => __webpack_require__.e(/* import() | Admin_marketplace */ 9140).then(__webpack_require__.bind(__webpack_require__, 80309))
);
const NotFoundPage = (0,react.lazy)(
  () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 57817))
);
const InternalErrorPage = (0,react.lazy)(
  () => __webpack_require__.e(/* import() | Admin_InternalErrorPage */ 6827).then(__webpack_require__.bind(__webpack_require__, 61177))
);
const ProfilePage = (0,react.lazy)(
  () => __webpack_require__.e(/* import() | Admin_profilePage */ 7003).then(__webpack_require__.bind(__webpack_require__, 40025))
);
const SettingsPage = (0,react.lazy)(
  () => __webpack_require__.e(/* import() | Admin_settingsPage */ 4981).then(__webpack_require__.bind(__webpack_require__, 26644))
);
const useTrackUsage = () => {
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.z1)();
  const dispatch = (0,react_redux_es/* useDispatch */.wA)();
  const appStatus = (0,react_redux_es/* useSelector */.d4)((state) => state.admin_app.status);
  (0,react.useEffect)(() => {
    if (appStatus === "init") {
      trackUsage("didAccessAuthenticatedAdministration");
      dispatch({ type: App_constants/* SET_APP_RUNTIME_STATUS */.h$ });
    }
  }, [appStatus]);
};
const Admin = () => {
  useTrackUsage();
  const { isLoading, generalSectionLinks, pluginsSectionLinks } = (0,hooks/* useMenu */.b)();
  const { menu } = (0,helper_plugin_esm/* useStrapiApp */.vD)();
  const { showTutorials } = (0,hooks/* useConfigurations */.Bp)();
  const routes = (0,react.useMemo)(() => {
    return menu.filter((link) => link.Component).map(({ to, Component, exact }) => (0,utils/* createRoute */.un)(Component, to, exact));
  }, [menu]);
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.Bl, null);
  }
  return /* @__PURE__ */ react.createElement(cjs.DndProvider, { backend: dist_cjs/* HTML5Backend */.t2 }, /* @__PURE__ */ react.createElement(
    layouts_AppLayout,
    {
      sideNav: /* @__PURE__ */ react.createElement(
        components_LeftMenu,
        {
          generalSectionLinks,
          pluginsSectionLinks
        }
      )
    },
    /* @__PURE__ */ react.createElement(react.Suspense, { fallback: /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.Bl, null) }, /* @__PURE__ */ react.createElement(react_router/* Switch */.dO, null, /* @__PURE__ */ react.createElement(react_router/* Route */.qh, { path: "/", component: HomePage, exact: true }), /* @__PURE__ */ react.createElement(react_router/* Route */.qh, { path: "/me", component: ProfilePage, exact: true }), /* @__PURE__ */ react.createElement(react_router/* Route */.qh, { path: "/content-manager", component: CM }), routes, /* @__PURE__ */ react.createElement(react_router/* Route */.qh, { path: "/settings/:settingId", component: SettingsPage }), /* @__PURE__ */ react.createElement(react_router/* Route */.qh, { path: "/settings", component: SettingsPage, exact: true }), /* @__PURE__ */ react.createElement(react_router/* Route */.qh, { path: "/marketplace" }, /* @__PURE__ */ react.createElement(MarketplacePage, null)), /* @__PURE__ */ react.createElement(react_router/* Route */.qh, { path: "/list-plugins", exact: true }, /* @__PURE__ */ react.createElement(InstalledPluginsPage, null)), /* @__PURE__ */ react.createElement(react_router/* Route */.qh, { path: "/404", component: NotFoundPage }), /* @__PURE__ */ react.createElement(react_router/* Route */.qh, { path: "/500", component: InternalErrorPage }), /* @__PURE__ */ react.createElement(react_router/* Route */.qh, { path: "", component: NotFoundPage }))),
    /* @__PURE__ */ react.createElement(GuidedTour_Modal, null),
    showTutorials && /* @__PURE__ */ react.createElement(Admin_Onboarding, null)
  ));
};
/* harmony default export */ const pages_Admin = (Admin);


;// CONCATENATED MODULE: ./.cache/admin/src/components/PluginsInitializer/init.js
const init = (plugins) => {
  return {
    plugins: Object.keys(plugins).reduce((acc, current) => {
      acc[current] = { ...plugins[current] };
      return acc;
    }, {})
  };
};
/* harmony default export */ const PluginsInitializer_init = (init);

// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(63560);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
;// CONCATENATED MODULE: ./.cache/admin/src/components/PluginsInitializer/reducer.js


const reducer_initialState = {
  plugins: null
};
const reducer_reducer = (state = reducer_initialState, action) => (
  /* eslint-disable-next-line consistent-return */
  (0,immer_esm/* default */.Ay)(state, (draftState) => {
    switch (action.type) {
      case "SET_PLUGIN_READY": {
        set_default()(draftState, ["plugins", action.pluginId, "isReady"], true);
        break;
      }
      default:
        return draftState;
    }
  })
);

/* harmony default export */ const PluginsInitializer_reducer = (reducer_reducer);

;// CONCATENATED MODULE: ./.cache/admin/src/components/PluginsInitializer/index.js





const PluginsInitializer = () => {
  const { plugins: appPlugins } = (0,helper_plugin_esm/* useStrapiApp */.vD)();
  const [{ plugins }, dispatch] = (0,react.useReducer)(PluginsInitializer_reducer, reducer_initialState, () => PluginsInitializer_init(appPlugins));
  const setPlugin = (0,react.useRef)((pluginId) => {
    dispatch({ type: "SET_PLUGIN_READY", pluginId });
  });
  const hasApluginNotReady = Object.keys(plugins).some(
    (plugin) => plugins[plugin].isReady === false
  );
  if (hasApluginNotReady) {
    const initializers = Object.keys(plugins).reduce((acc, current) => {
      const InitializerComponent = plugins[current].initializer;
      if (InitializerComponent) {
        const key = plugins[current].pluginId;
        acc.push(/* @__PURE__ */ react.createElement(InitializerComponent, { key, setPlugin: setPlugin.current }));
      }
      return acc;
    }, []);
    return /* @__PURE__ */ react.createElement(react.Fragment, null, initializers, /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.Bl, null));
  }
  return /* @__PURE__ */ react.createElement(pages_Admin, null);
};
/* harmony default export */ const components_PluginsInitializer = (PluginsInitializer);

// EXTERNAL MODULE: ./.cache/admin/src/components/RBACProvider/constants.js
var RBACProvider_constants = __webpack_require__(57913);
;// CONCATENATED MODULE: ./.cache/admin/src/components/RBACProvider/actions.js

const resetStore = () => ({ type: RBACProvider_constants/* RESET_STORE */.G });
const setPermissions = (permissions) => ({
  type: RBACProvider_constants/* SET_PERMISSIONS */.w,
  permissions
});


;// CONCATENATED MODULE: ./.cache/admin/src/components/RBACProvider/index.js





const RBACProvider = ({ children, permissions, refetchPermissions }) => {
  const { allPermissions } = (0,react_redux_es/* useSelector */.d4)((state) => state.rbacProvider);
  const dispatch = (0,react_redux_es/* useDispatch */.wA)();
  (0,react.useEffect)(() => {
    dispatch(setPermissions(permissions));
    return () => {
      dispatch(resetStore());
    };
  }, [permissions, dispatch]);
  if (!allPermissions) {
    return /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.Bl, null);
  }
  return /* @__PURE__ */ react.createElement(helper_plugin_esm/* RBACProviderContext */.$.Provider, { value: { allPermissions, refetchPermissions } }, children);
};
RBACProvider.propTypes = {
  children: (prop_types_default()).element.isRequired,
  permissions: (prop_types_default()).array.isRequired,
  refetchPermissions: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_RBACProvider = (RBACProvider);

// EXTERNAL MODULE: ./node_modules/semver/index.js
var semver = __webpack_require__(99589);
var semver_default = /*#__PURE__*/__webpack_require__.n(semver);
;// CONCATENATED MODULE: ./.cache/admin/src/components/AuthenticatedApp/utils/checkLatestStrapiVersion.js

const checkLatestStrapiVersion = (currentPackageVersion, latestPublishedVersion) => {
  if (!semver_default().valid(currentPackageVersion) || !semver_default().valid(latestPublishedVersion)) {
    return false;
  }
  return semver_default().lt(currentPackageVersion, latestPublishedVersion);
};
/* harmony default export */ const utils_checkLatestStrapiVersion = (checkLatestStrapiVersion);

;// CONCATENATED MODULE: ./.cache/admin/src/components/AuthenticatedApp/utils/api.js



const strapiVersion = package_namespaceObject.rE;
const showUpdateNotif = !JSON.parse(localStorage.getItem("STRAPI_UPDATE_NOTIF"));
const { get: api_get } = (0,helper_plugin_esm/* getFetchClient */.GD)();
const fetchStrapiLatestRelease = async (toggleNotification) => {
  try {
    const res = await fetch("https://api.github.com/repos/strapi/strapi/releases/latest");
    if (!res.ok) {
      throw new Error("Failed to fetch latest Strapi version.");
    }
    const { tag_name } = await res.json();
    const shouldUpdateStrapi = utils_checkLatestStrapiVersion(strapiVersion, tag_name);
    if (shouldUpdateStrapi && showUpdateNotif) {
      toggleNotification({
        type: "info",
        message: { id: "notification.version.update.message" },
        link: {
          url: `https://github.com/strapi/strapi/releases/tag/${tag_name}`,
          label: {
            id: "global.see-more"
          }
        },
        blockTransition: true,
        onClose: () => localStorage.setItem("STRAPI_UPDATE_NOTIF", true)
      });
    }
    return tag_name;
  } catch (err) {
    return strapiVersion;
  }
};
const fetchAppInfo = async () => {
  try {
    const { data, headers } = await api_get("/admin/information");
    if (!headers["content-type"].includes("application/json")) {
      throw new Error("Not found");
    }
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};
const fetchCurrentUserPermissions = async () => {
  try {
    const { data, headers } = await api_get("/admin/users/me/permissions");
    if (!headers["content-type"].includes("application/json")) {
      throw new Error("Not found");
    }
    return data.data;
  } catch (err) {
    throw new Error(err);
  }
};
const fetchUserRoles = async () => {
  try {
    const {
      data: {
        data: { roles }
      }
    } = await api_get("/admin/users/me");
    return roles;
  } catch (err) {
    throw new Error(err);
  }
};


;// CONCATENATED MODULE: ./.cache/admin/src/components/AuthenticatedApp/index.js











const AuthenticatedApp_strapiVersion = package_namespaceObject.rE;
const AuthenticatedApp = () => {
  const { setGuidedTourVisibility } = (0,helper_plugin_esm/* useGuidedTour */.Cx)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const userInfo = helper_plugin_esm/* auth */.j2.getUserInfo();
  const userName = get_default()(userInfo, "username") || (0,utils/* getFullName */.dS)(userInfo.firstname, userInfo.lastname);
  const [userDisplayName, setUserDisplayName] = (0,react.useState)(userName);
  const [userId, setUserId] = (0,react.useState)(null);
  const { showReleaseNotification } = (0,hooks/* useConfigurations */.Bp)();
  const [
    { data: appInfos, status },
    { data: tagName, isLoading },
    { data: permissions, status: fetchPermissionsStatus, refetch, isFetching },
    { data: userRoles }
  ] = (0,es.useQueries)([
    { queryKey: "app-infos", queryFn: fetchAppInfo },
    {
      queryKey: "strapi-release",
      queryFn: () => fetchStrapiLatestRelease(toggleNotification),
      enabled: showReleaseNotification,
      initialData: AuthenticatedApp_strapiVersion
    },
    {
      queryKey: "admin-users-permission",
      queryFn: fetchCurrentUserPermissions,
      initialData: []
    },
    {
      queryKey: "user-roles",
      queryFn: fetchUserRoles
    }
  ]);
  const shouldUpdateStrapi = utils_checkLatestStrapiVersion(AuthenticatedApp_strapiVersion, tagName);
  (0,react.useEffect)(() => {
    if (userRoles) {
      const isUserSuperAdmin = userRoles.find(({ code }) => code === "strapi-super-admin");
      if (isUserSuperAdmin && appInfos?.autoReload) {
        setGuidedTourVisibility(true);
      }
    }
  }, [userRoles, appInfos, setGuidedTourVisibility]);
  (0,react.useEffect)(() => {
    const getUserId = async () => {
      const userId2 = await (0,utils/* hashAdminUserEmail */.xQ)(userInfo);
      setUserId(userId2);
    };
    getUserId();
  }, [userInfo]);
  const shouldShowNotDependentQueriesLoader = isFetching || status === "loading" || fetchPermissionsStatus === "loading";
  const shouldShowLoader = isLoading || shouldShowNotDependentQueriesLoader;
  if (shouldShowLoader) {
    return /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.Bl, null);
  }
  if (status === "error") {
    return /* @__PURE__ */ react.createElement("div", null, "error...");
  }
  return /* @__PURE__ */ react.createElement(
    helper_plugin_esm/* AppInfoProvider */.Bc,
    {
      ...appInfos,
      userId,
      latestStrapiReleaseTag: tagName,
      setUserDisplayName,
      shouldUpdateStrapi,
      userDisplayName
    },
    /* @__PURE__ */ react.createElement(components_RBACProvider, { permissions, refetchPermissions: refetch }, /* @__PURE__ */ react.createElement(components_PluginsInitializer, null))
  );
};
/* harmony default export */ const components_AuthenticatedApp = (AuthenticatedApp);


/***/ }),

/***/ 72825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91616);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58528);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28522);





const StepLine = ({ type, ...props }) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .a,
    {
      width: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .a8)(2),
      height: "100%",
      background: type === _constants__WEBPACK_IMPORTED_MODULE_3__/* .IS_NOT_DONE */ .aE ? "neutral300" : "primary500",
      hasRadius: true,
      ...props
    }
  );
};
StepLine.defaultProps = {
  type: _constants__WEBPACK_IMPORTED_MODULE_3__/* .IS_NOT_DONE */ .aE
};
StepLine.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf([_constants__WEBPACK_IMPORTED_MODULE_3__/* .IS_ACTIVE */ .mY, _constants__WEBPACK_IMPORTED_MODULE_3__/* .IS_DONE */ .sO, _constants__WEBPACK_IMPORTED_MODULE_3__/* .IS_NOT_DONE */ .aE])
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepLine);


/***/ }),

/***/ 97734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98016);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41240);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97939);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58528);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26437);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28522);






const StepNumber = ({ type, number }) => {
  if (type === _constants__WEBPACK_IMPORTED_MODULE_2__/* .IS_DONE */ .sO) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .s,
      {
        background: "primary600",
        padding: 2,
        borderRadius: "50%",
        width: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .a8)(30),
        height: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .a8)(30),
        justifyContent: "center"
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Icon */ .I, { as: _strapi_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, "aria-hidden": true, width: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .a8)(16), color: "neutral0" })
    );
  }
  if (type === _constants__WEBPACK_IMPORTED_MODULE_2__/* .IS_ACTIVE */ .mY) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .s,
      {
        background: "primary600",
        padding: 2,
        borderRadius: "50%",
        width: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .a8)(30),
        height: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .a8)(30),
        justifyContent: "center"
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Typography */ .o, { fontWeight: "semiBold", textColor: "neutral0" }, number)
    );
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .s,
    {
      borderColor: "neutral500",
      borderWidth: "1px",
      borderStyle: "solid",
      padding: 2,
      borderRadius: "50%",
      width: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .a8)(30),
      height: (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .a8)(30),
      justifyContent: "center"
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Typography */ .o, { fontWeight: "semiBold", textColor: "neutral600" }, number)
  );
};
StepNumber.defaultProps = {
  number: void 0,
  type: _constants__WEBPACK_IMPORTED_MODULE_2__/* .IS_NOT_DONE */ .aE
};
StepNumber.propTypes = {
  number: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number),
  type: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf([_constants__WEBPACK_IMPORTED_MODULE_2__/* .IS_ACTIVE */ .mY, _constants__WEBPACK_IMPORTED_MODULE_2__/* .IS_DONE */ .sO, _constants__WEBPACK_IMPORTED_MODULE_2__/* .IS_NOT_DONE */ .aE])
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepNumber);


/***/ }),

/***/ 28522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aE: () => (/* binding */ IS_NOT_DONE),
/* harmony export */   mY: () => (/* binding */ IS_ACTIVE),
/* harmony export */   sO: () => (/* binding */ IS_DONE)
/* harmony export */ });
const IS_ACTIVE = "isActive";
const IS_DONE = "isDone";
const IS_NOT_DONE = "isNotDone";


/***/ }),

/***/ 71557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const layout = {
  contentTypeBuilder: {
    home: {
      title: {
        id: "app.components.GuidedTour.home.CTB.title",
        defaultMessage: "\u{1F9E0} Build the content structure"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.home.CTB.cta.title",
          defaultMessage: "Go to the Content type Builder"
        },
        type: "REDIRECT",
        target: "/plugins/content-type-builder"
      },
      trackingEvent: "didClickGuidedTourHomepageContentTypeBuilder"
    },
    create: {
      title: {
        id: "app.components.GuidedTour.CTB.create.title",
        defaultMessage: "\u{1F9E0} Create a first Collection type"
      },
      content: {
        id: "app.components.GuidedTour.CTB.create.content",
        defaultMessage: "<p>Collection types help you manage several entries, Single types are suitable to manage only one entry.</p> <p>Ex: For a Blog website, Articles would be a Collection type whereas a Homepage would be a Single type.</p>"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.CTB.create.cta.title",
          defaultMessage: "Build a Collection type"
        },
        type: "CLOSE"
      },
      trackingEvent: "didClickGuidedTourStep1CollectionType"
    },
    success: {
      title: {
        id: "app.components.GuidedTour.CTB.success.title",
        defaultMessage: "Step 1: Completed \u2705"
      },
      content: {
        id: "app.components.GuidedTour.CTB.success.content",
        defaultMessage: "<p>Good going!</p><b>\u26A1\uFE0F What would you like to share with the world?</b>"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.create-content",
          defaultMessage: "Create content"
        },
        type: "REDIRECT",
        target: "/content-manager"
      },
      trackingEvent: "didCreateGuidedTourCollectionType"
    }
  },
  contentManager: {
    home: {
      title: {
        id: "app.components.GuidedTour.home.CM.title",
        defaultMessage: "\u26A1\uFE0F What would you like to share with the world?"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.create-content",
          defaultMessage: "Create content"
        },
        type: "REDIRECT",
        target: "/content-manager"
      },
      trackingEvent: "didClickGuidedTourHomepageContentManager"
    },
    create: {
      title: {
        id: "app.components.GuidedTour.CM.create.title",
        defaultMessage: "\u26A1\uFE0F Create content"
      },
      content: {
        id: "app.components.GuidedTour.CM.create.content",
        defaultMessage: "<p>Create and manage all the content here in the Content Manager.</p><p>Ex: Taking the Blog website example further, one can write an Article, save and publish it as they like.</p><p>\u{1F4A1} Quick tip - Don't forget to hit publish on the content you create.</p>"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.create-content",
          defaultMessage: "Create content"
        },
        type: "CLOSE"
      },
      trackingEvent: "didClickGuidedTourStep2ContentManager"
    },
    success: {
      title: {
        id: "app.components.GuidedTour.CM.success.title",
        defaultMessage: "Step 2: Completed \u2705"
      },
      content: {
        id: "app.components.GuidedTour.CM.success.content",
        defaultMessage: "<p>Awesome, one last step to go!</p><b>\u{1F680}  See content in action</b>"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.CM.success.cta.title",
          defaultMessage: "Test the API"
        },
        type: "REDIRECT",
        target: "/settings/api-tokens"
      },
      trackingEvent: "didCreateGuidedTourEntry"
    }
  },
  apiTokens: {
    home: {
      title: {
        id: "app.components.GuidedTour.apiTokens.create.title",
        defaultMessage: "\u{1F680} See content in action"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.home.apiTokens.cta.title",
          defaultMessage: "Test the API"
        },
        type: "REDIRECT",
        target: "/settings/api-tokens"
      },
      trackingEvent: "didClickGuidedTourHomepageApiTokens"
    },
    create: {
      title: {
        id: "app.components.GuidedTour.apiTokens.create.title",
        defaultMessage: "\u{1F680} See content in action"
      },
      content: {
        id: "app.components.GuidedTour.apiTokens.create.content",
        defaultMessage: "<p>Generate an authentication token here and retrieve the content you just created.</p>"
      },
      cta: {
        title: {
          id: "app.components.GuidedTour.apiTokens.create.cta.title",
          defaultMessage: "Generate an API Token"
        },
        type: "CLOSE"
      },
      trackingEvent: "didClickGuidedTourStep3ApiTokens"
    },
    success: {
      title: {
        id: "app.components.GuidedTour.apiTokens.success.title",
        defaultMessage: "Step 3: Completed \u2705"
      },
      content: {
        id: "app.components.GuidedTour.apiTokens.success.content",
        defaultMessage: "<p>See content in action by making an HTTP request:</p><ul><li><p>To this URL: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>With the header: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>For more ways to interact with content, see the <documentationLink>documentation</documentationLink>.</p>"
      },
      trackingEvent: "didGenerateGuidedTourApiTokens"
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layout);


/***/ })

}]);