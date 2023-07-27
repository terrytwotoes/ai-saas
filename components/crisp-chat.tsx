"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("1f9d9f27-bca6-4551-85cb-bdc5023e4dd1");
  }, []);

  return null;
};
