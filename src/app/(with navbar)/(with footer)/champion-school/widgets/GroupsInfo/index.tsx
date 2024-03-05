"use client";

import { useState } from "react";
import DaysSwitch from "./DaysSwitch";
import InfoTable from "./InfoTable";

export default function GroupsInfo() {
  const [days, setDays] = useState<1 | 3 | 5>(1);
  return (
    <div className="flex flex-col items-center gap-2">
      <DaysSwitch
        data={[
          {
            id: "1",
            label: "1 день",
            isSelected: days === 1,
            onPress: () => setDays(1),
          },
          {
            id: "3",
            label: "3 дня",
            isSelected: days === 3,
            onPress: () => setDays(3),
          },
          {
            id: "5",
            label: "5 дней",
            isSelected: days === 5,
            onPress: () => setDays(5),
          },
        ]}
      />
      <InfoTable days={days} />
    </div>
  );
}
