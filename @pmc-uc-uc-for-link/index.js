"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useInfo = exports.InfoProvider = exports.InfoContext = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const InfoContext = /*#__PURE__*/(0, _react.createContext)(null);
exports.InfoContext = InfoContext;
const initialValues = {
  productsCount: 19,
  lastLooged: 0
};

const InfoProvider = ({
  children
}) => {
  const [info, setInfo] = (0, _react.useState)(initialValues);
  const value = (0, _react.useMemo)(() => ({
    info,
    setInfo
  }), [info, setInfo]);
  return /*#__PURE__*/_react.default.createElement(InfoContext.Provider, {
    value: value
  }, children);
};

exports.InfoProvider = InfoProvider;

const useInfo = () => {
  const context = (0, _react.useContext)(InfoContext);

  if (!context) {
    throw Error('dah dah daaaah');
  }

  return context;
};

exports.useInfo = useInfo;

/*

import React, { useMemo, createContext, useContext, useState, useEffect, useCallback } from 'react'


export const InfoContext = createContext(null)

const initialValues = {
  productsCount: 19,
  lastLooged: 0,
}

export const InfoProvider = ({ children }) => {
  const [info, setInfo] = useState(initialValues)

  const value = useMemo(
    () => ({ info, setInfo}),
    [info, setInfo]
  )

  return (
    <InfoContext.Provider value={value}>{children}</InfoContext.Provider>
  )
}

export const useInfo = () => {
  const context = useContext(InfoContext)
  if (!context) {
    throw Error('dah dah daaaah')
  }
  return context
}


export const info = {
  count: 19
}

export const InfoContext = createContext(info)


*/