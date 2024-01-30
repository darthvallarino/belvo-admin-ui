"use client";
import * as React from "react";
import ThemeProvider from "@/theme";
import SignIn from "@/components/SignIn";
import StoreProvider from "@/app/StoreProvider";
import { ModalStack } from "@mattjennings/react-modal-stack";

export default function Auth() {
  return (
    <SignIn />
  );
}
