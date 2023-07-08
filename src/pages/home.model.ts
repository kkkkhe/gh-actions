import { combineReducers } from "@reduxjs/toolkit";
import { counterFactory } from "../features/redux-reducer/model";

export const counterModel = counterFactory()
