"use client";
import React, { useState, useEffect } from "react";
import {useRouter} from "next/navigation";

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    router.push("/login")
  });
  return <></>;
}
