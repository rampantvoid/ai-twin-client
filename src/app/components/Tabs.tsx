"use client";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Tabs = ({ children }) => {
  const [active, setActive] = useState(0);
  const router = useRouter();
  const { tab } = router.query;

  useEffect(() => {
    if (!tab) return;

    const idx = children.map((child) => child.key).indexOf(tab);

    if (idx < 0) return;

    setActive(idx);
  }, [router.query]);

  const hadleClick = (e, index, cb = () => {}) => {
    e.preventDefault();

    router.push;
  };

  return <div>Tabs</div>;
};

export default Tabs;
