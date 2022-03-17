import { Module } from "vuex";
import { actions } from "./PermissionActions";
import { getters } from "./PermissionGetters";
import { mutations } from "./PermissionMutation";
import { state } from "./PermissionState";
import { PermissionDataType } from "./PermissionDataType";
const namespaced = true as boolean;
export const PermissionModule: Module<PermissionDataType, any> = {
  namespaced,
  state,
  actions,
  getters,
  mutations,
};
