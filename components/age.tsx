"use client";

import { useEffect, useState } from "react";

export function Age() {
  const [age, setAge] = useState("22");

  useEffect(() => {
    const updateAge = () => {
      setAge(
        (
          (Date.now() - new Date("21 Aug 2002").getTime()) /
          (24 * 60 * 60 * 1000 * 365)
        ).toFixed(10),
      );
    };

    const interval = setInterval(() => {
      updateAge();
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return age;
}
