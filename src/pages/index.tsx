import { useRouter } from "next/router";
import React, { Fragment, useEffect } from "react";

export default function Start() {
  // Attributes
  const router = useRouter();

  // Effects
  useEffect(() => {
    router.replace("dashboard/add-user");
  }, []);

  return <Fragment />;
}
