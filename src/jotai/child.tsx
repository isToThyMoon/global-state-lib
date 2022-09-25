/*
 * @Author: 王荣
 * @Date: 2022-09-23 15:17:28
 * @LastEditors: 王荣
 * @LastEditTime: 2022-09-24 17:33:30
 * @Description: 填写简介
 */
import React, { useEffect } from "react";
import { useAtom, useAtomValue } from "jotai";
import {
  regularNumAtom,
  derivedWithImmerNumAtom,
  ImmerNumAtom,
} from "./jotai-immer";

const ChildJotai = React.memo(() => {
  console.log("ChildJotai rerender");
  const originImmerNum = useAtomValue(ImmerNumAtom);

  useEffect(() => {
    console.log("ChildJotai effect");
  });
  return (
    <div>
      <div>ChildJotai: atomWithImmer自主创建的全新atom: {originImmerNum}</div>
    </div>
  );
});

export default ChildJotai;
