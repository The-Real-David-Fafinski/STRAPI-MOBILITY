"use strict";
(self["webpackChunkurban_cobix"] = self["webpackChunkurban_cobix"] || []).push([[9140],{

/***/ 65123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDebounce);


/***/ }),

/***/ 80309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MarketPlacePage: () => (/* binding */ MarketPlacePage),
  "default": () => (/* binding */ MarketplacePage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js
var Layout = __webpack_require__(63214);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(71808);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(40121);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabGroup.js
var TabGroup = __webpack_require__(8740);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(98016);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/Tabs.js + 1 modules
var Tabs = __webpack_require__(99750);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(91616);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Searchbar/Searchbar.js
var Searchbar = __webpack_require__(78820);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabPanels.js
var TabPanels = __webpack_require__(90480);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(58528);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(68154);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(6442);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(69733);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useDebounce/index.js
var useDebounce = __webpack_require__(65123);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useNavigatorOnLine/index.js

const useNavigatorOnLine = () => {
  const onlineStatus = typeof navigator !== "undefined" && typeof navigator.onLine === "boolean" ? navigator.onLine : true;
  const [isOnline, setIsOnline] = (0,react.useState)(onlineStatus);
  const setOnline = () => setIsOnline(true);
  const setOffline = () => setIsOnline(false);
  (0,react.useEffect)(() => {
    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);
    return () => {
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
  }, []);
  return isOnline;
};
/* harmony default export */ const hooks_useNavigatorOnLine = (useNavigatorOnLine);

// EXTERNAL MODULE: ./.cache/admin/src/pages/App/selectors.js
var selectors = __webpack_require__(71526);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Icon/Icon.js
var Icon = __webpack_require__(41240);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/GlassesSquare.js

const a = (l) => /* @__PURE__ */ (0,jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 32 32", ...l, children: [
  /* @__PURE__ */ (0,jsx_runtime.jsx)("path", { fill: "#AC73E6", d: "M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z" }),
  /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "path",
    {
      fill: "#fff",
      fillRule: "evenodd",
      d: "M15.027 13.839c-3.19-.836-6.305-1.064-10.18-.608-1.215.152-1.063 1.975.076 2.203.304.836.456 2.355.912 3.267.987 2.279 5.622 1.975 7.369.835 1.14-.683 1.443-2.279 1.9-3.494.227-.684 1.595-.684 1.822 0 .38 1.215.76 2.81 1.9 3.494 1.747 1.14 6.381 1.444 7.369-.835.456-.912.607-2.431.911-3.267 1.14-.228 1.216-2.051.076-2.203-3.874-.456-6.989-.228-10.18.608-.455.075-1.519.075-1.975 0Z",
      clipRule: "evenodd"
    }
  )
] }), i = a;


// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ExternalLink.js
var ExternalLink = __webpack_require__(68086);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/MissingPluginBanner/index.js





const MissingPluginBanner = () => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.z1)();
  return /* @__PURE__ */ react.createElement(
    "a",
    {
      href: "https://strapi.canny.io/plugin-requests",
      target: "_blank",
      rel: "noopener noreferrer nofollow",
      style: { textDecoration: "none" },
      onClick: () => trackUsage("didMissMarketplacePlugin")
    },
    /* @__PURE__ */ react.createElement(
      helper_plugin_esm/* ContentBox */.bQ,
      {
        title: formatMessage({
          id: "admin.pages.MarketPlacePage.missingPlugin.title",
          defaultMessage: "Documentation"
        }),
        subtitle: formatMessage({
          id: "admin.pages.MarketPlacePage.missingPlugin.description",
          defaultMessage: "Tell us what plugin you are looking for and we'll let our community plugin developers know in case they are in search for inspiration!"
        }),
        icon: /* @__PURE__ */ react.createElement(i, null),
        iconBackground: "alternative100",
        endAction: /* @__PURE__ */ react.createElement(Icon/* Icon */.I, { as: ExternalLink/* default */.A, color: "neutral600", width: 3, height: 3, marginLeft: 2 })
      }
    )
  );
};
/* harmony default export */ const components_MissingPluginBanner = (MissingPluginBanner);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tag/Tag.js
var Tag = __webpack_require__(64132);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(90954);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cross.js
var Cross = __webpack_require__(9605);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Filter.js
var Filter = __webpack_require__(30195);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(67336);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Popover/Popover.js
var Popover = __webpack_require__(48176);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Select.js
var Select = __webpack_require__(15074);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/Option.js
var Option = __webpack_require__(62431);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/NpmPackagesFilters/FilterSelect.js



const FilterSelect = ({ message, value, onChange, possibleFilters, onClear, customizeContent }) => {
  const computeFilterMessage = (filterName, count) => {
    return `${filterName} (${count})`;
  };
  return /* @__PURE__ */ react.createElement(
    Select/* Select */.l,
    {
      "data-testid": `${message}-button`,
      label: message,
      placeholder: message,
      size: "M",
      onChange,
      onClear,
      value,
      customizeContent,
      multi: true
    },
    Object.entries(possibleFilters).map(([filterName, count]) => {
      return /* @__PURE__ */ react.createElement(Option/* Option */.c, { "data-testid": `${filterName}-${count}`, key: filterName, value: filterName }, computeFilterMessage(filterName, count));
    })
  );
};
FilterSelect.propTypes = {
  message: (prop_types_default()).string.isRequired,
  value: (prop_types_default()).array.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  possibleFilters: (prop_types_default()).object.isRequired,
  onClear: (prop_types_default()).func.isRequired,
  customizeContent: (prop_types_default()).func.isRequired
};
/* harmony default export */ const NpmPackagesFilters_FilterSelect = (FilterSelect);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/NpmPackagesFilters/FiltersPopover.js






const FiltersPopover = ({
  source,
  onToggle,
  query,
  npmPackageType,
  possibleCategories,
  possibleCollections,
  handleSelectChange,
  handleSelectClear
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ react.createElement(Popover/* Popover */.AM, { source, onDismiss: onToggle, padding: 3, spacing: 4 }, /* @__PURE__ */ react.createElement(FiltersFlex, { direction: "column", alignItems: "stretch", gap: 1 }, /* @__PURE__ */ react.createElement(
    NpmPackagesFilters_FilterSelect,
    {
      message: formatMessage({
        id: "admin.pages.MarketPlacePage.filters.collections",
        defaultMessage: "Collections"
      }),
      value: query?.collections || [],
      onChange: (newCollections) => {
        const update = { collections: newCollections };
        handleSelectChange(update);
      },
      onClear: () => handleSelectClear("collections"),
      possibleFilters: possibleCollections,
      customizeContent: (values) => formatMessage(
        {
          id: "admin.pages.MarketPlacePage.filters.collectionsSelected",
          defaultMessage: "{count, plural, =0 {No collections} one {# collection} other {# collections}} selected"
        },
        { count: values.length }
      )
    }
  ), npmPackageType === "plugin" && /* @__PURE__ */ react.createElement(
    NpmPackagesFilters_FilterSelect,
    {
      message: formatMessage({
        id: "admin.pages.MarketPlacePage.filters.categories",
        defaultMessage: "Categories"
      }),
      value: query?.categories || [],
      onChange: (newCategories) => {
        const update = { categories: newCategories };
        handleSelectChange(update);
      },
      onClear: () => handleSelectClear("categories"),
      possibleFilters: possibleCategories,
      customizeContent: (values) => formatMessage(
        {
          id: "admin.pages.MarketPlacePage.filters.categoriesSelected",
          defaultMessage: "{count, plural, =0 {No categories} one {# category} other {# categories}} selected"
        },
        { count: values.length }
      ),
      name: "categories"
    }
  )));
};
FiltersPopover.propTypes = {
  onToggle: (prop_types_default()).func.isRequired,
  source: prop_types_default().shape({ current: prop_types_default().instanceOf(Element) }).isRequired,
  query: (prop_types_default()).object.isRequired,
  npmPackageType: prop_types_default().oneOf(["plugin", "provider"]).isRequired,
  possibleCollections: (prop_types_default()).object.isRequired,
  possibleCategories: (prop_types_default()).object.isRequired,
  handleSelectChange: (prop_types_default()).func.isRequired,
  handleSelectClear: (prop_types_default()).func.isRequired
};
/* harmony default export */ const NpmPackagesFilters_FiltersPopover = (FiltersPopover);
const FiltersFlex = (0,styled_components_browser_esm/* default */.Ay)((0,Flex/* Flex */.s))`
  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/NpmPackagesFilters/index.js







const FilterTag = ({ name, handleRemove }) => {
  return /* @__PURE__ */ react.createElement(Box/* Box */.a, { padding: 1 }, /* @__PURE__ */ react.createElement(Tag/* Tag */.v, { icon: /* @__PURE__ */ react.createElement(Cross/* default */.A, null), onClick: handleRemove }, name));
};
const ButtonToggle = (0,styled_components_browser_esm/* default */.Ay)((0,Button/* Button */.$))`
  height: ${({ theme }) => theme.sizes.input.S};
`;
const NpmPackagesFilters = ({
  possibleCollections,
  possibleCategories,
  npmPackageType,
  query,
  handleSelectClear,
  handleSelectChange
}) => {
  const [isVisible, setIsVisible] = (0,react.useState)(false);
  const buttonRef = (0,react.useRef)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const handleToggle = () => setIsVisible((prev) => !prev);
  const handleTagRemove = (tagToRemove, filterType) => {
    const update = {
      [filterType]: query[filterType].filter((previousTag) => previousTag !== tagToRemove)
    };
    handleSelectChange(update);
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 1, paddingBottom: 1 }, /* @__PURE__ */ react.createElement(
    ButtonToggle,
    {
      variant: "tertiary",
      ref: buttonRef,
      "data-testid": "filters-button",
      startIcon: /* @__PURE__ */ react.createElement(Filter/* default */.A, null),
      onClick: handleToggle,
      size: "S"
    },
    formatMessage({ id: "app.utils.filters", defaultMessage: "Filters" })
  ), isVisible && /* @__PURE__ */ react.createElement(
    NpmPackagesFilters_FiltersPopover,
    {
      onToggle: handleToggle,
      source: buttonRef,
      query,
      handleSelectClear,
      handleSelectChange,
      possibleCollections,
      possibleCategories,
      npmPackageType
    }
  )), query.collections?.map((collection) => /* @__PURE__ */ react.createElement(
    FilterTag,
    {
      name: collection,
      key: collection,
      handleRemove: () => handleTagRemove(collection, "collections")
    }
  )), npmPackageType === "plugin" && query.categories?.map((category) => /* @__PURE__ */ react.createElement(
    FilterTag,
    {
      name: category,
      key: category,
      handleRemove: () => handleTagRemove(category, "categories")
    }
  )));
};
FilterTag.propTypes = {
  name: (prop_types_default()).string.isRequired,
  handleRemove: (prop_types_default()).func.isRequired
};
NpmPackagesFilters.propTypes = {
  npmPackageType: prop_types_default().oneOf(["plugin", "provider"]).isRequired,
  possibleCollections: (prop_types_default()).object.isRequired,
  possibleCategories: (prop_types_default()).object.isRequired,
  query: (prop_types_default()).object.isRequired,
  handleSelectChange: (prop_types_default()).func.isRequired,
  handleSelectClear: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_NpmPackagesFilters = (NpmPackagesFilters);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.js + 1 modules
var Loader = __webpack_require__(10457);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(96630);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(16473);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(97939);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/EmptyDocuments.js
var EmptyDocuments = __webpack_require__(64184);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Layout/GridLayout.js

const GridLayout_a = styled_components_browser_esm/* default */.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({ theme: t }) => t.spaces[4]};
`;


;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/EmptyNpmPackageSearch/EmptyNpmPackageGrid.js



const EmptyPluginCard = (0,styled_components_browser_esm/* default */.Ay)((0,Box/* Box */.a))`
  background: ${({ theme }) => `linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${theme.colors.neutral150} 100%)`};
  opacity: 0.33;
`;
const EmptyNpmPackageGrid = () => {
  return /* @__PURE__ */ react.createElement(GridLayout_a, null, Array(12).fill(null).map((_, idx) => /* @__PURE__ */ react.createElement(
    EmptyPluginCard,
    {
      key: `empty-plugin-card-${idx}`,
      height: "234px",
      hasRadius: true
    }
  )));
};

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/EmptyNpmPackageSearch/index.js





const EmptyNpmPackageSearch = ({ content }) => {
  return /* @__PURE__ */ react.createElement(Box/* Box */.a, { position: "relative", "data-testid": "marketplace-results" }, /* @__PURE__ */ react.createElement(EmptyNpmPackageGrid, null), /* @__PURE__ */ react.createElement(Box/* Box */.a, { position: "absolute", top: 11, width: "100%" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { alignItems: "center", justifyContent: "center", direction: "column" }, /* @__PURE__ */ react.createElement(Icon/* Icon */.I, { as: EmptyDocuments/* default */.A, color: "", width: "160px", height: "88px" }), /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 6 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "delta", as: "p", textColor: "neutral600" }, content)))));
};
EmptyNpmPackageSearch.propTypes = {
  content: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_EmptyNpmPackageSearch = (EmptyNpmPackageSearch);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tooltip/Tooltip.js + 3 modules
var Tooltip = __webpack_require__(43210);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/v2/LinkButton/LinkButton.js
var LinkButton = __webpack_require__(6805);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CheckCircle.js
var CheckCircle = __webpack_require__(6541);
// EXTERNAL MODULE: ./node_modules/pluralize/pluralize.js
var pluralize = __webpack_require__(55127);
var pluralize_default = /*#__PURE__*/__webpack_require__.n(pluralize);
// EXTERNAL MODULE: ./.cache/admin/src/assets/images/logo-strapi-2022.svg
var logo_strapi_2022 = __webpack_require__(58786);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(26437);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Duplicate.js
var Duplicate = __webpack_require__(49464);
// EXTERNAL MODULE: ./node_modules/semver/index.js
var semver = __webpack_require__(99589);
var semver_default = /*#__PURE__*/__webpack_require__.n(semver);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/NpmPackageCard/CardButton.js






const TooltipButton = ({ description, installMessage, disabled, handleCopy, pluginName }) => /* @__PURE__ */ react.createElement(Tooltip/* Tooltip */.m, { "data-testid": `tooltip-${pluginName}`, description }, /* @__PURE__ */ react.createElement(Box/* Box */.a, null, /* @__PURE__ */ react.createElement(
  Button/* Button */.$,
  {
    size: "S",
    startIcon: /* @__PURE__ */ react.createElement(Duplicate/* default */.A, null),
    variant: "secondary",
    disabled,
    onClick: handleCopy
  },
  installMessage
)));
const CardButton = ({ strapiPeerDepVersion, strapiAppVersion, handleCopy, pluginName }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const versionRange = semver_default().validRange(strapiPeerDepVersion);
  const isCompatible = semver_default().satisfies(strapiAppVersion, versionRange);
  const installMessage = formatMessage({
    id: "admin.pages.MarketPlacePage.plugin.copy",
    defaultMessage: "Copy install command"
  });
  if (strapiAppVersion) {
    if (!versionRange) {
      return /* @__PURE__ */ react.createElement(
        TooltipButton,
        {
          installMessage,
          pluginName,
          description: formatMessage(
            {
              id: "admin.pages.MarketPlacePage.plugin.version.null",
              defaultMessage: 'Unable to verify compatibility with your Strapi version: "{strapiAppVersion}"'
            },
            { strapiAppVersion }
          ),
          handleCopy
        }
      );
    }
    if (!isCompatible) {
      return /* @__PURE__ */ react.createElement(
        TooltipButton,
        {
          installMessage,
          pluginName,
          description: formatMessage(
            {
              id: "admin.pages.MarketPlacePage.plugin.version",
              defaultMessage: 'Update your Strapi version: "{strapiAppVersion}" to: "{versionRange}"'
            },
            {
              strapiAppVersion,
              versionRange
            }
          ),
          disabled: true
        }
      );
    }
  }
  return /* @__PURE__ */ react.createElement(Button/* Button */.$, { size: "S", startIcon: /* @__PURE__ */ react.createElement(Duplicate/* default */.A, null), variant: "secondary", onClick: handleCopy }, installMessage);
};
TooltipButton.defaultProps = {
  disabled: false,
  handleCopy: null
};
TooltipButton.propTypes = {
  description: (prop_types_default()).string.isRequired,
  installMessage: (prop_types_default()).string.isRequired,
  disabled: (prop_types_default()).bool,
  handleCopy: (prop_types_default()).func,
  pluginName: (prop_types_default()).string.isRequired
};
CardButton.defaultProps = {
  strapiAppVersion: null,
  strapiPeerDepVersion: null
};
CardButton.propTypes = {
  strapiAppVersion: (prop_types_default()).string,
  strapiPeerDepVersion: (prop_types_default()).string,
  handleCopy: (prop_types_default()).func.isRequired,
  pluginName: (prop_types_default()).string.isRequired
};
/* harmony default export */ const NpmPackageCard_CardButton = (CardButton);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/NpmPackageCard/InstallPluginButton.js







const InstallPluginButton = ({
  isInstalled,
  isInDevelopmentMode,
  commandToCopy,
  strapiAppVersion,
  strapiPeerDepVersion,
  pluginName
}) => {
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.z1)();
  const { copy } = (0,helper_plugin_esm/* useClipboard */.iD)();
  const handleCopy = async () => {
    const didCopy = await copy(commandToCopy);
    if (didCopy) {
      trackUsage("willInstallPlugin");
      toggleNotification({
        type: "success",
        message: { id: "admin.pages.MarketPlacePage.plugin.copy.success" }
      });
    }
  };
  if (isInstalled) {
    return /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingLeft: 4 }, /* @__PURE__ */ react.createElement(Icon/* Icon */.I, { as: Check/* default */.A, marginRight: 2, width: 12, height: 12, color: "success600" }), /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "omega", textColor: "success600", fontWeight: "bold" }, formatMessage({
      id: "admin.pages.MarketPlacePage.plugin.installed",
      defaultMessage: "Installed"
    })));
  }
  if (isInDevelopmentMode) {
    return /* @__PURE__ */ react.createElement(
      NpmPackageCard_CardButton,
      {
        strapiAppVersion,
        strapiPeerDepVersion,
        handleCopy,
        pluginName
      }
    );
  }
  return null;
};
InstallPluginButton.defaultProps = {
  strapiAppVersion: null,
  strapiPeerDepVersion: null
};
InstallPluginButton.propTypes = {
  isInstalled: (prop_types_default()).bool.isRequired,
  isInDevelopmentMode: (prop_types_default()).bool.isRequired,
  commandToCopy: (prop_types_default()).string.isRequired,
  strapiAppVersion: (prop_types_default()).string,
  strapiPeerDepVersion: (prop_types_default()).string,
  pluginName: (prop_types_default()).string.isRequired
};
/* harmony default export */ const NpmPackageCard_InstallPluginButton = (InstallPluginButton);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.js
var Divider = __webpack_require__(11744);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Github.js
var Github = __webpack_require__(59882);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Star.js
var Star = __webpack_require__(93285);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Download.js
var Download = __webpack_require__(88765);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/NpmPackageCard/PackageStats.js







const VerticalDivider = (0,styled_components_browser_esm/* default */.Ay)((0,Divider/* Divider */.c))`
  width: ${(0,helper_plugin_esm/* pxToRem */.a8)(12)};
  transform: rotate(90deg);
`;
const PackageStats = ({ githubStars, npmDownloads, npmPackageType }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { gap: 1 }, !!githubStars && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Icon/* Icon */.I, { as: Github/* default */.A, height: (0,helper_plugin_esm/* pxToRem */.a8)(12), width: (0,helper_plugin_esm/* pxToRem */.a8)(12), "aria-hidden": true }), /* @__PURE__ */ react.createElement(Icon/* Icon */.I, { as: Star/* default */.A, height: (0,helper_plugin_esm/* pxToRem */.a8)(12), width: (0,helper_plugin_esm/* pxToRem */.a8)(12), color: "warning500", "aria-hidden": true }), /* @__PURE__ */ react.createElement(
    "p",
    {
      "aria-label": formatMessage(
        {
          id: `admin.pages.MarketPlacePage.${npmPackageType}.githubStars`,
          defaultMessage: `This {package} was starred {starsCount} on GitHub`
        },
        {
          starsCount: githubStars,
          package: npmPackageType
        }
      )
    },
    /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "pi", textColor: "neutral800" }, githubStars)
  ), /* @__PURE__ */ react.createElement(VerticalDivider, { unsetMargin: false, background: "neutral200" })), /* @__PURE__ */ react.createElement(Icon/* Icon */.I, { as: Download/* default */.A, height: (0,helper_plugin_esm/* pxToRem */.a8)(12), width: (0,helper_plugin_esm/* pxToRem */.a8)(12), "aria-hidden": true }), /* @__PURE__ */ react.createElement(
    "p",
    {
      "aria-label": formatMessage(
        {
          id: `admin.pages.MarketPlacePage.${npmPackageType}.downloads`,
          defaultMessage: `This {package} has {downloadsCount} weekly downloads`
        },
        {
          downloadsCount: npmDownloads,
          package: npmPackageType
        }
      )
    },
    /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { variant: "pi", textColor: "neutral800" }, npmDownloads)
  ));
};
PackageStats.defaultProps = {
  githubStars: 0,
  npmDownloads: 0
};
PackageStats.propTypes = {
  githubStars: (prop_types_default()).number,
  npmDownloads: (prop_types_default()).number,
  npmPackageType: (prop_types_default()).string.isRequired
};
/* harmony default export */ const NpmPackageCard_PackageStats = (PackageStats);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/NpmPackageCard/index.js












const EllipsisText = (0,styled_components_browser_esm/* default */.Ay)((0,Typography/* Typography */.o))`
  /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* stylelint-enable value-no-vendor-prefix, property-no-vendor-prefix */
  overflow: hidden;
`;
const NpmPackageCard = ({
  npmPackage,
  isInstalled,
  useYarn,
  isInDevelopmentMode,
  npmPackageType,
  strapiAppVersion
}) => {
  const { attributes } = npmPackage;
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.z1)();
  const commandToCopy = useYarn ? `yarn add ${attributes.npmPackageName}` : `npm install ${attributes.npmPackageName}`;
  const madeByStrapiMessage = formatMessage({
    id: "admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi",
    defaultMessage: "Made by Strapi"
  });
  const npmPackageHref = `https://market.strapi.io/${pluralize_default().plural(npmPackageType)}/${attributes.slug}`;
  return /* @__PURE__ */ react.createElement(
    Flex/* Flex */.s,
    {
      direction: "column",
      justifyContent: "space-between",
      paddingTop: 4,
      paddingRight: 4,
      paddingBottom: 4,
      paddingLeft: 4,
      hasRadius: true,
      background: "neutral0",
      shadow: "tableShadow",
      height: "100%",
      alignItems: "normal",
      "data-testid": "npm-package-card"
    },
    /* @__PURE__ */ react.createElement(Box/* Box */.a, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { direction: "row", justifyContent: "space-between", alignItems: "flex-start" }, /* @__PURE__ */ react.createElement(
      Box/* Box */.a,
      {
        as: "img",
        src: attributes.logo.url,
        alt: `${attributes.name} logo`,
        hasRadius: true,
        width: 11,
        height: 11
      }
    ), /* @__PURE__ */ react.createElement(
      NpmPackageCard_PackageStats,
      {
        githubStars: attributes.githubStars,
        npmDownloads: attributes.npmDownloads,
        npmPackageType
      }
    )), /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { as: "h3", variant: "delta" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { alignItems: "center" }, attributes.name, attributes.validated && !attributes.madeByStrapi && /* @__PURE__ */ react.createElement(
      Tooltip/* Tooltip */.m,
      {
        description: formatMessage({
          id: "admin.pages.MarketPlacePage.plugin.tooltip.verified",
          defaultMessage: "Plugin verified by Strapi"
        })
      },
      /* @__PURE__ */ react.createElement(Flex/* Flex */.s, null, /* @__PURE__ */ react.createElement(Icon/* Icon */.I, { as: CheckCircle/* default */.A, marginLeft: 2, color: "success600" }))
    ), attributes.madeByStrapi && /* @__PURE__ */ react.createElement(Tooltip/* Tooltip */.m, { description: madeByStrapiMessage }, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, null, /* @__PURE__ */ react.createElement(
      Box/* Box */.a,
      {
        as: "img",
        src: logo_strapi_2022,
        alt: madeByStrapiMessage,
        marginLeft: 1,
        width: 6,
        height: "auto"
      }
    )))))), /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 2 }, /* @__PURE__ */ react.createElement(EllipsisText, { as: "p", variant: "omega", textColor: "neutral600" }, attributes.description))),
    /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { gap: 2, style: { alignSelf: "flex-end" }, paddingTop: 6 }, /* @__PURE__ */ react.createElement(
      LinkButton/* LinkButton */.z,
      {
        size: "S",
        href: npmPackageHref,
        isExternal: true,
        endIcon: /* @__PURE__ */ react.createElement(ExternalLink/* default */.A, null),
        "aria-label": formatMessage(
          {
            id: "admin.pages.MarketPlacePage.plugin.info.label",
            defaultMessage: "Learn more about {pluginName}"
          },
          { pluginName: attributes.name }
        ),
        variant: "tertiary",
        onClick: () => trackUsage("didPluginLearnMore")
      },
      formatMessage({
        id: "admin.pages.MarketPlacePage.plugin.info.text",
        defaultMessage: "More"
      })
    ), /* @__PURE__ */ react.createElement(
      NpmPackageCard_InstallPluginButton,
      {
        isInstalled,
        isInDevelopmentMode,
        commandToCopy,
        strapiAppVersion,
        strapiPeerDepVersion: attributes.strapiVersion,
        pluginName: attributes.name
      }
    ))
  );
};
NpmPackageCard.defaultProps = {
  isInDevelopmentMode: false,
  strapiAppVersion: null
};
NpmPackageCard.propTypes = {
  npmPackage: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    attributes: prop_types_default().shape({
      name: (prop_types_default()).string.isRequired,
      description: (prop_types_default()).string.isRequired,
      slug: (prop_types_default()).string.isRequired,
      npmPackageName: (prop_types_default()).string.isRequired,
      npmPackageUrl: (prop_types_default()).string.isRequired,
      repositoryUrl: (prop_types_default()).string.isRequired,
      logo: (prop_types_default()).object.isRequired,
      developerName: (prop_types_default()).string.isRequired,
      validated: (prop_types_default()).bool.isRequired,
      madeByStrapi: (prop_types_default()).bool.isRequired,
      strapiCompatibility: prop_types_default().oneOf(["v3", "v4"]),
      strapiVersion: (prop_types_default()).string,
      githubStars: (prop_types_default()).number,
      npmDownloads: (prop_types_default()).number
    }).isRequired
  }).isRequired,
  isInstalled: (prop_types_default()).bool.isRequired,
  useYarn: (prop_types_default()).bool.isRequired,
  isInDevelopmentMode: (prop_types_default()).bool,
  npmPackageType: (prop_types_default()).string.isRequired,
  strapiAppVersion: (prop_types_default()).string
};
/* harmony default export */ const components_NpmPackageCard = (NpmPackageCard);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/NpmPackagesGrid/index.js







const NpmPackagesGrid = ({
  status,
  npmPackages,
  installedPackageNames,
  useYarn,
  isInDevelopmentMode,
  npmPackageType,
  strapiAppVersion,
  debouncedSearch
}) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  if (status === "error") {
    return /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { paddingTop: 8 }, /* @__PURE__ */ react.createElement(helper_plugin_esm/* AnErrorOccurred */.hH, null));
  }
  if (status === "loading") {
    return /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { justifyContent: "center", paddingTop: 8 }, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, null, "Loading content..."));
  }
  const emptySearchMessage = formatMessage(
    {
      id: "admin.pages.MarketPlacePage.search.empty",
      defaultMessage: 'No result for "{target}"'
    },
    { target: debouncedSearch }
  );
  if (npmPackages.length === 0) {
    return /* @__PURE__ */ react.createElement(components_EmptyNpmPackageSearch, { content: emptySearchMessage });
  }
  return /* @__PURE__ */ react.createElement(Grid/* Grid */.x, { gap: 4, "data-testid": "marketplace-results" }, npmPackages.map((npmPackage) => /* @__PURE__ */ react.createElement(GridItem/* GridItem */.E, { col: 4, s: 6, xs: 12, style: { height: "100%" }, key: npmPackage.id }, /* @__PURE__ */ react.createElement(
    components_NpmPackageCard,
    {
      npmPackage,
      isInstalled: installedPackageNames.includes(npmPackage.attributes.npmPackageName),
      useYarn,
      isInDevelopmentMode,
      npmPackageType,
      strapiAppVersion
    }
  ))));
};
NpmPackagesGrid.defaultProps = {
  npmPackages: [],
  installedPackageNames: [],
  strapiAppVersion: null,
  debouncedSearch: ""
};
NpmPackagesGrid.propTypes = {
  status: (prop_types_default()).string.isRequired,
  npmPackages: (prop_types_default()).array,
  installedPackageNames: prop_types_default().arrayOf((prop_types_default()).string),
  useYarn: (prop_types_default()).bool.isRequired,
  isInDevelopmentMode: (prop_types_default()).bool.isRequired,
  npmPackageType: (prop_types_default()).string.isRequired,
  strapiAppVersion: (prop_types_default()).string,
  debouncedSearch: (prop_types_default()).string
};
/* harmony default export */ const components_NpmPackagesGrid = (NpmPackagesGrid);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/NpmPackagesPagination/index.js




const NpmPackagesPagination = ({ pagination }) => {
  return /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { alignItems: "flex-end", justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(helper_plugin_esm/* PageSizeURLQuery */._u, { options: ["12", "24", "50", "100"], defaultValue: "24" }), /* @__PURE__ */ react.createElement(helper_plugin_esm/* PaginationURLQuery */.W7, { pagination })));
};
NpmPackagesPagination.propTypes = {
  pagination: prop_types_default().shape({
    page: (prop_types_default()).number.isRequired,
    pageCount: (prop_types_default()).number.isRequired,
    pageSize: (prop_types_default()).number.isRequired,
    total: (prop_types_default()).number.isRequired
  }).isRequired
};
/* harmony default export */ const components_NpmPackagesPagination = (NpmPackagesPagination);

;// CONCATENATED MODULE: ./.cache/admin/src/assets/images/icon_offline-cloud.svg
const icon_offline_cloud_namespaceObject = __webpack_require__.p + "9d5d788027e86620c234.svg";
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(7562);
;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/Upload.js

const o = (e) => /* @__PURE__ */ (0,jsx_runtime.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 25", ...e, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
  "path",
  {
    fill: "#212134",
    fillRule: "evenodd",
    d: "M13.571 18.272H10.43v-8.47H2.487a.2.2 0 0 1-.14-.343L11.858.058a.2.2 0 0 1 .282 0l9.513 9.4a.2.2 0 0 1-.14.343H13.57v8.47ZM2.2 21.095a.2.2 0 0 0-.2.2v2.424c0 .11.09.2.2.2h19.6a.2.2 0 0 0 .2-.2v-2.424a.2.2 0 0 0-.2-.2H2.2Z",
    clipRule: "evenodd"
  }
) }), v = o;


;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/PageHeader/index.js







const PageHeader = ({ isOnline, npmPackageType }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.z1)();
  const tracking = npmPackageType === "provider" ? "didSubmitProvider" : "didSubmitPlugin";
  return /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.Q,
    {
      title: formatMessage({
        id: "global.marketplace",
        defaultMessage: "Marketplace"
      }),
      subtitle: formatMessage({
        id: "admin.pages.MarketPlacePage.subtitle",
        defaultMessage: "Get more out of Strapi"
      }),
      primaryAction: isOnline && /* @__PURE__ */ react.createElement(
        LinkButton/* LinkButton */.z,
        {
          startIcon: /* @__PURE__ */ react.createElement(v, null),
          variant: "tertiary",
          href: `https://market.strapi.io/submit-${npmPackageType}`,
          onClick: () => trackUsage(tracking),
          isExternal: true
        },
        formatMessage({
          id: `admin.pages.MarketPlacePage.submit.${npmPackageType}.link`,
          defaultMessage: `Submit ${npmPackageType}`
        })
      )
    }
  );
};
/* harmony default export */ const components_PageHeader = (PageHeader);
PageHeader.defaultProps = {
  npmPackageType: "plugin"
};
PageHeader.propTypes = {
  isOnline: (prop_types_default()).bool.isRequired,
  npmPackageType: (prop_types_default()).string
};

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/OfflineLayout/index.js






const OfflineLayout = () => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.P, null, /* @__PURE__ */ react.createElement(Main/* Main */.g, null, /* @__PURE__ */ react.createElement(components_PageHeader, { isOnline: false }), /* @__PURE__ */ react.createElement(
    Flex/* Flex */.s,
    {
      width: "100%",
      direction: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: (0,helper_plugin_esm/* pxToRem */.a8)(120)
    },
    /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingBottom: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { textColor: "neutral700", variant: "alpha" }, formatMessage({
      id: "admin.pages.MarketPlacePage.offline.title",
      defaultMessage: "You are offline"
    }))),
    /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingBottom: 6 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.o, { textColor: "neutral700", variant: "epsilon" }, formatMessage({
      id: "admin.pages.MarketPlacePage.offline.subtitle",
      defaultMessage: "You need to be connected to the Internet to access Strapi Market."
    }))),
    /* @__PURE__ */ react.createElement("img", { src: icon_offline_cloud_namespaceObject, alt: "offline", style: { width: "88px", height: "88px" } })
  )));
};
/* harmony default export */ const components_OfflineLayout = (OfflineLayout);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/components/SortSelect/index.js





const SelectWrapper = (0,styled_components_browser_esm/* default */.Ay)((0,Box/* Box */.a))`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  span {
    font-size: ${({ theme }) => theme.fontSizes[1]};
  }

  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;
const SortSelect = ({ sortQuery, handleSelectChange }) => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const sortTypes = {
    "name:asc": {
      selected: {
        id: "admin.pages.MarketPlacePage.sort.alphabetical.selected",
        defaultMessage: "Sort by alphabetical order"
      },
      option: {
        id: "admin.pages.MarketPlacePage.sort.alphabetical",
        defaultMessage: "Alphabetical order"
      }
    },
    "submissionDate:desc": {
      selected: {
        id: "admin.pages.MarketPlacePage.sort.newest.selected",
        defaultMessage: "Sort by newest"
      },
      option: {
        id: "admin.pages.MarketPlacePage.sort.newest",
        defaultMessage: "Newest"
      }
    },
    "githubStars:desc": {
      selected: {
        id: "admin.pages.MarketPlacePage.sort.githubStars.selected",
        defaultMessage: "Sort by GitHub stars"
      },
      option: {
        id: "admin.pages.MarketPlacePage.sort.githubStars",
        defaultMessage: "Number of GitHub stars"
      }
    },
    "npmDownloads:desc": {
      selected: {
        id: "admin.pages.MarketPlacePage.sort.npmDownloads.selected",
        defaultMessage: "Sort by npm downloads"
      },
      option: {
        id: "admin.pages.MarketPlacePage.sort.npmDownloads",
        defaultMessage: "Number of downloads"
      }
    }
  };
  return /* @__PURE__ */ react.createElement(SelectWrapper, null, /* @__PURE__ */ react.createElement(
    Select/* Select */.l,
    {
      size: "S",
      id: "sort-by-select",
      value: sortQuery,
      customizeContent: () => formatMessage(sortTypes[sortQuery].selected),
      onChange: (sortName) => {
        handleSelectChange({ sort: sortName });
      },
      label: formatMessage({
        id: "admin.pages.MarketPlacePage.sort.label",
        defaultMessage: "Sort by"
      })
    },
    Object.entries(sortTypes).map(([sortName, messages]) => {
      return /* @__PURE__ */ react.createElement(Option/* Option */.c, { key: sortName, value: sortName }, formatMessage(messages.option));
    })
  ));
};
SortSelect.propTypes = {
  sortQuery: (prop_types_default()).string.isRequired,
  handleSelectChange: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_SortSelect = (SortSelect);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LiveRegions/useNotifyAT.js
var useNotifyAT = __webpack_require__(99532);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(55373);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var react_query_es = __webpack_require__(75942);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/marketplace/constants.js
const MARKETPLACE_API_URL = "https://market-api.strapi.io";

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/marketplace/useFetchMarketplacePlugins/index.js




const fetchMarketplacePlugins = async (params = {}) => {
  try {
    const queryString = lib_default().stringify(lib_default().parse(params));
    const res = await fetch(`${MARKETPLACE_API_URL}/plugins?${queryString}`);
    if (!res.ok) {
      throw new Error("Failed to fetch marketplace plugins.");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  return null;
};
const useFetchMarketplacePlugins = (notifyLoad, params) => {
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  return (0,react_query_es.useQuery)(["list-marketplace-plugins", params], () => fetchMarketplacePlugins(params), {
    onSuccess() {
      if (notifyLoad) {
        notifyLoad();
      }
    },
    onError() {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error", defaultMessage: "An error occured" }
      });
    }
  });
};
/* harmony default export */ const marketplace_useFetchMarketplacePlugins = (useFetchMarketplacePlugins);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/marketplace/useFetchMarketplaceProviders/index.js




const fetchMarketplaceProviders = async (params = {}) => {
  try {
    const queryString = lib_default().stringify(lib_default().parse(params));
    const res = await fetch(`${MARKETPLACE_API_URL}/providers?${queryString}`);
    if (!res.ok) {
      throw new Error("Failed to fetch marketplace providers.");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  return null;
};
const useFetchMarketplaceProviders = (notifyLoad, params) => {
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  return (0,react_query_es.useQuery)(["list-marketplace-providers", params], () => fetchMarketplaceProviders(params), {
    onSuccess() {
      if (notifyLoad) {
        notifyLoad();
      }
    },
    onError() {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error", defaultMessage: "An error occured" }
      });
    }
  });
};
/* harmony default export */ const marketplace_useFetchMarketplaceProviders = (useFetchMarketplaceProviders);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/utils/useMarketplaceData.js





function useMarketplaceData({ npmPackageType, debouncedSearch, query, tabQuery }) {
  const { notifyStatus } = (0,useNotifyAT/* useNotifyAT */.W)();
  const { formatMessage } = (0,useIntl/* default */.A)();
  const marketplaceTitle = formatMessage({
    id: "global.marketplace",
    defaultMessage: "Marketplace"
  });
  const notifyMarketplaceLoad = () => {
    notifyStatus(
      formatMessage(
        {
          id: "app.utils.notify.data-loaded",
          defaultMessage: "The {target} has loaded"
        },
        { target: marketplaceTitle }
      )
    );
  };
  const paginationParams = {
    page: query?.page || 1,
    pageSize: query?.pageSize || 24
  };
  const { data: pluginsResponse, status: pluginsStatus } = marketplace_useFetchMarketplacePlugins(
    notifyMarketplaceLoad,
    {
      ...tabQuery.plugin,
      pagination: paginationParams,
      search: debouncedSearch
    }
  );
  const { data: providersResponse, status: providersStatus } = marketplace_useFetchMarketplaceProviders(
    notifyMarketplaceLoad,
    {
      ...tabQuery.provider,
      pagination: paginationParams,
      search: debouncedSearch
    }
  );
  const npmPackageTypeResponse = npmPackageType === "plugin" ? pluginsResponse : providersResponse;
  const npmPackageTypeStatus = npmPackageType === "plugin" ? pluginsStatus : providersStatus;
  const [possibleCollections, setPossibleCollections] = (0,react.useState)({});
  const [possibleCategories, setPossibleCategories] = (0,react.useState)({});
  (0,react.useEffect)(() => {
    if (npmPackageTypeStatus === "success") {
      setPossibleCollections(npmPackageTypeResponse.meta.collections);
    }
    if (pluginsStatus === "success") {
      setPossibleCategories(pluginsResponse.meta.categories);
    }
  }, [
    pluginsResponse?.meta.categories,
    pluginsStatus,
    npmPackageTypeResponse?.meta.collections,
    npmPackageTypeStatus
  ]);
  const { pagination } = npmPackageTypeStatus === "success" ? npmPackageTypeResponse.meta : {};
  return {
    pluginsResponse,
    providersResponse,
    pluginsStatus,
    providersStatus,
    possibleCollections,
    possibleCategories,
    pagination
  };
}
/* harmony default export */ const utils_useMarketplaceData = (useMarketplaceData);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/MarketplacePage/index.js

















const MarketPlacePage = () => {
  const { formatMessage } = (0,useIntl/* default */.A)();
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.z1)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.hN)();
  const [{ query }, setQuery] = (0,helper_plugin_esm/* useQueryParams */.sq)();
  const debouncedSearch = (0,useDebounce/* default */.A)(query?.search, 500) || "";
  const { autoReload: isInDevelopmentMode, dependencies, useYarn, strapiVersion } = (0,helper_plugin_esm/* useAppInfo */.Xe)();
  const isOnline = hooks_useNavigatorOnLine();
  const npmPackageType = query?.npmPackageType || "plugin";
  const [tabQuery, setTabQuery] = (0,react.useState)({
    plugin: npmPackageType === "plugin" ? { ...query } : {},
    provider: npmPackageType === "provider" ? { ...query } : {}
  });
  (0,helper_plugin_esm/* useFocusWhenNavigate */.L4)();
  (0,react.useEffect)(() => {
    trackUsageRef.current("didGoToMarketplace");
  }, []);
  (0,react.useEffect)(() => {
    if (!isInDevelopmentMode) {
      toggleNotification({
        type: "info",
        message: {
          id: "admin.pages.MarketPlacePage.production",
          defaultMessage: "Manage plugins from the development environment"
        },
        blockTransition: true
      });
    }
  }, [toggleNotification, isInDevelopmentMode]);
  const {
    pluginsResponse,
    providersResponse,
    pluginsStatus,
    providersStatus,
    possibleCollections,
    possibleCategories,
    pagination
  } = utils_useMarketplaceData({ npmPackageType, debouncedSearch, query, tabQuery });
  if (!isOnline) {
    return /* @__PURE__ */ react.createElement(components_OfflineLayout, null);
  }
  const handleTabChange = (selected) => {
    const selectedTab = selected === 0 ? "plugin" : "provider";
    const hasTabQuery = tabQuery[selectedTab] && Object.keys(tabQuery[selectedTab]).length;
    if (hasTabQuery) {
      setQuery({
        // Keep filters and search
        ...tabQuery[selectedTab],
        search: query?.search || "",
        // Set tab and reset page
        npmPackageType: selectedTab,
        page: 1
      });
    } else {
      setQuery({
        // Set tab
        npmPackageType: selectedTab,
        // Clear filters
        collections: [],
        categories: [],
        sort: "name:asc",
        page: 1,
        // Keep search
        search: query?.search || ""
      });
    }
  };
  const handleSelectChange = (update) => {
    setQuery({ ...update, page: 1 });
    setTabQuery((prev) => ({
      ...prev,
      [npmPackageType]: { ...prev[npmPackageType], ...update }
    }));
  };
  const handleSelectClear = (filterType) => {
    setQuery({ [filterType]: [], page: null }, "remove");
    setTabQuery((prev) => ({ ...prev, [npmPackageType]: {} }));
  };
  const installedPackageNames = Object.keys(dependencies);
  return /* @__PURE__ */ react.createElement(Layout/* Layout */.P, null, /* @__PURE__ */ react.createElement(Main/* Main */.g, null, /* @__PURE__ */ react.createElement(
    Helmet/* Helmet */.m,
    {
      title: formatMessage({
        id: "admin.pages.MarketPlacePage.helmet",
        defaultMessage: "Marketplace - Plugins"
      })
    }
  ), /* @__PURE__ */ react.createElement(components_PageHeader, { isOnline, npmPackageType }), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.s, null, /* @__PURE__ */ react.createElement(
    TabGroup/* TabGroup */.f,
    {
      label: formatMessage({
        id: "admin.pages.MarketPlacePage.tab-group.label",
        defaultMessage: "Plugins and Providers for Strapi"
      }),
      id: "tabs",
      variant: "simple",
      initialSelectedTabIndex: ["plugin", "provider"].indexOf(npmPackageType),
      onTabChange: handleTabChange
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { justifyContent: "space-between", paddingBottom: 4 }, /* @__PURE__ */ react.createElement(Tabs/* Tabs */.t, null, /* @__PURE__ */ react.createElement(Tabs/* Tab */.o, null, formatMessage({
      id: "admin.pages.MarketPlacePage.plugins",
      defaultMessage: "Plugins"
    }), " ", pluginsStatus === "success" ? `(${pluginsResponse.meta.pagination.total})` : "..."), /* @__PURE__ */ react.createElement(Tabs/* Tab */.o, null, formatMessage({
      id: "admin.pages.MarketPlacePage.providers",
      defaultMessage: "Providers"
    }), " ", providersStatus === "success" ? `(${providersResponse.meta.pagination.total})` : "...")), /* @__PURE__ */ react.createElement(Box/* Box */.a, { width: "25%" }, /* @__PURE__ */ react.createElement(
      Searchbar/* Searchbar */.S,
      {
        name: "searchbar",
        onClear: () => setQuery({ search: "", page: 1 }),
        value: query?.search,
        onChange: (e) => setQuery({ search: e.target.value, page: 1 }),
        clearLabel: formatMessage({
          id: "admin.pages.MarketPlacePage.search.clear",
          defaultMessage: "Clear the search"
        }),
        placeholder: formatMessage({
          id: "admin.pages.MarketPlacePage.search.placeholder",
          defaultMessage: "Search"
        })
      },
      formatMessage({
        id: "admin.pages.MarketPlacePage.search.placeholder",
        defaultMessage: "Search"
      })
    ))),
    /* @__PURE__ */ react.createElement(Flex/* Flex */.s, { paddingBottom: 4, gap: 2 }, /* @__PURE__ */ react.createElement(
      components_SortSelect,
      {
        sortQuery: query?.sort || "name:asc",
        handleSelectChange
      }
    ), /* @__PURE__ */ react.createElement(
      components_NpmPackagesFilters,
      {
        npmPackageType,
        possibleCollections,
        possibleCategories,
        query: query || {},
        handleSelectChange,
        handleSelectClear
      }
    )),
    /* @__PURE__ */ react.createElement(TabPanels/* TabPanels */.T, null, /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.K, null, /* @__PURE__ */ react.createElement(
      components_NpmPackagesGrid,
      {
        npmPackages: pluginsResponse?.data,
        status: pluginsStatus,
        installedPackageNames,
        useYarn,
        isInDevelopmentMode,
        npmPackageType: "plugin",
        strapiAppVersion: strapiVersion,
        debouncedSearch
      }
    )), /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.K, null, /* @__PURE__ */ react.createElement(
      components_NpmPackagesGrid,
      {
        npmPackages: providersResponse?.data,
        status: providersStatus,
        installedPackageNames,
        useYarn,
        isInDevelopmentMode,
        npmPackageType: "provider",
        debouncedSearch
      }
    )))
  ), pagination && /* @__PURE__ */ react.createElement(components_NpmPackagesPagination, { pagination }), /* @__PURE__ */ react.createElement(Box/* Box */.a, { paddingTop: 8 }, /* @__PURE__ */ react.createElement(components_MissingPluginBanner, null)))));
};
const ProtectedMarketPlace = () => {
  const permissions = (0,es/* useSelector */.d4)(selectors/* selectAdminPermissions */.G);
  return /* @__PURE__ */ react.createElement(helper_plugin_esm/* CheckPagePermissions */.kz, { permissions: permissions.marketplace.main }, /* @__PURE__ */ react.createElement(MarketPlacePage, null));
};

/* harmony default export */ const MarketplacePage = (ProtectedMarketPlace);


/***/ }),

/***/ 63214:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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

/***/ 59882:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);

const e = (i) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...i, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#161614",
    d: "M12 0C5.373 0 0 5.501 0 12.288c0 5.43 3.438 10.035 8.206 11.66.6.114.82-.266.82-.59 0-.294-.01-1.262-.016-2.289-3.338.744-4.043-1.45-4.043-1.45-.546-1.42-1.332-1.797-1.332-1.797-1.089-.763.082-.747.082-.747 1.205.086 1.84 1.266 1.84 1.266 1.07 1.878 2.807 1.335 3.491 1.021.108-.794.42-1.336.762-1.643-2.665-.31-5.467-1.364-5.467-6.073 0-1.341.469-2.437 1.236-3.298-.124-.31-.535-1.56.117-3.252 0 0 1.007-.33 3.3 1.26A11.25 11.25 0 0 1 12 5.942c1.02.005 2.047.141 3.006.414 2.29-1.59 3.297-1.26 3.297-1.26.653 1.693.242 2.943.118 3.252.77.86 1.235 1.957 1.235 3.298 0 4.72-2.808 5.76-5.48 6.063.43.382.814 1.13.814 2.276 0 1.644-.014 2.967-.014 3.372 0 .327.216.71.825.59C20.566 22.32 24 17.715 24 12.288 24 5.501 18.627 0 12 0Z"
  }
) }), o = e;



/***/ }),

/***/ 93285:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);

const r = (l) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...l, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#212134",
    d: "m12 18.26-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26Z"
  }
) }), o = r;



/***/ })

}]);