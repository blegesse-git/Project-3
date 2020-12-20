import React, { useContext } from "react";
import { EventContext } from "../context/EventContext";

export function useEventHook() {
    return useContext(EventContext)
}