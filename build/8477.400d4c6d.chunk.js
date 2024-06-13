"use strict";
(self["webpackChunkurban_cobix"] = self["webpackChunkurban_cobix"] || []).push([[8477],{

/***/ 8477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64132);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88860);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98016);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86612);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44457);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(84868);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9605);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58528);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6442);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67336);







const CustomMultiValueContainer = (props) => {
  const { selectProps } = props;
  const handleTagClick = (value) => (e) => {
    e.preventDefault();
    selectProps.onChange(selectProps.value.filter((v) => v !== value));
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Tag */ .v,
    {
      type: "button",
      tabIndex: -1,
      icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null),
      onClick: handleTagClick(props.data)
    },
    props.data.label
  );
};
const StyleSelect = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay)((0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .ReactSelect */ ._8))`
  .select-control {
    height: auto;

    & > div:first-child {
      padding: 4px;
      gap: 4px;

      & > div {
        padding-left: 8px;
      }
    }

    .select-multi-value-container {
      margin-right: -8px;
    }
  }
`;
const MultiSelect = ({
  value,
  onChange,
  name,
  intlLabel,
  required,
  attribute,
  description,
  placeholder,
  disabled,
  error
}) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)();
  const possibleOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return (attribute["options"] || []).map((option) => {
      const [label, value2] = [...option.split(/:(.*)/s), option];
      if (!label || !value2)
        return null;
      return { label, value: value2 };
    }).filter(Boolean);
  }, [attribute]);
  const sanitizedValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    let parsedValue;
    try {
      parsedValue = JSON.parse(value || "[]");
    } catch (e) {
      parsedValue = [];
    }
    return Array.isArray(parsedValue) ? possibleOptions.filter(
      (option) => parsedValue.some((val) => option.value === val)
    ) : [];
  }, [value, possibleOptions]);
  const fieldError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return error || (required && !possibleOptions.length ? "No options" : null);
  }, [required, error, possibleOptions]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Field */ .D,
    {
      hint: description && formatMessage(description),
      error: fieldError,
      name,
      required
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .s, { direction: "column", alignItems: "stretch", gap: 1 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .FieldLabel */ .d, null, formatMessage(intlLabel)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      StyleSelect,
      {
        isSearchable: true,
        isMulti: true,
        error: fieldError,
        name,
        id: name,
        disabled: disabled || possibleOptions.length === 0,
        placeholder,
        defaultValue: sanitizedValue.map((val) => ({
          label: formatMessage({
            id: val.label,
            defaultMessage: val.label
          }),
          value: val.value
        })),
        components: {
          MultiValueContainer: CustomMultiValueContainer
        },
        options: possibleOptions.map((option) => ({
          ...option,
          label: formatMessage({
            id: option.label,
            defaultMessage: option.label
          })
        })),
        onChange: (val) => {
          onChange({
            target: {
              name,
              value: val?.length && val.filter((v) => !!v) ? JSON.stringify(val.filter((v) => !!v).map((v) => v.value)) : null,
              type: attribute.type
            }
          });
        },
        classNames: {
          control: (_state) => "select-control",
          multiValue: (_state) => "select-multi-value",
          placeholder: (_state) => "select-placeholder"
        }
      }
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .FieldHint */ .o, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .FieldError */ .b, null))
  );
};
MultiSelect.defaultProps = {
  description: null,
  disabled: false,
  error: null,
  labelAction: null,
  required: false,
  value: ""
};
MultiSelect.propTypes = {
  intlLabel: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object).isRequired,
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func).isRequired,
  attribute: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object).isRequired,
  name: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string).isRequired,
  description: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),
  error: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),
  labelAction: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiSelect);


/***/ })

}]);