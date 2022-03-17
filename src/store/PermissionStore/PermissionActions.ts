import { ActionTree } from "vuex";
import { PermissionDataType } from "./PermissionDataType";
import axios from "axios";
import { state } from "./PermissionState";
import { RootState } from "../type";
type PermissionActions = ActionTree<PermissionDataType, RootState>;

export const actions: PermissionActions = {
  //Permission Manager
  savePermissions({ commit }, { event, switchVar }) {
    commit("SAVE_PERMISSION", { event, switchVar });
  },
  deleteDataCart({ commit }) {
    commit("DELETE_DATA_CART");
  },
  //Permission Manager
};
