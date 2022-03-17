import { Module } from "vuex";

import { getters } from "./StyleGetters";

import { state } from "./StyleState";
import { StyleDataType } from "./StyleDataType";
const namespaced = true as boolean;

export const StyleModule: Module<StyleDataType, any> = {
  namespaced,
  state,
  getters,
};
