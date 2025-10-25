import React from "react";
import { myreducer } from "./Reducer";
import { configureStore } from "@reduxjs/toolkit";



export  const store = configureStore({
    reducer:myreducer

})