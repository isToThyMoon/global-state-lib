/*
 * @Author: 王荣
 * @Date: 2022-09-23 13:58:12
 * @LastEditors: tothymoon-mac istothymoon@gmail.com
 * @LastEditTime: 2023-08-23 21:52:54
 * @Description: 填写简介
 */
import { useAtom } from "jotai";
import { useImmerAtom } from "jotai/immer";

import {
  regularNumAtom,
  derivedWithImmerNumAtom,
  ImmerNumAtom,
} from "./jotai-immer-demo";

const JotaiImmerConsumer = () => {
  console.log("JotaiConsumer rerender");
  const [regularNum, setRegularNum] = useAtom(regularNumAtom);
  const [derivedNum, setDerivedNum] = useAtom(derivedWithImmerNumAtom);
  const [originImmerNum, setOriginImmerNum] = useAtom(ImmerNumAtom);
  const [ImmerNum, setImmerNum] = useImmerAtom(regularNumAtom);

  return (
    <div>
      <div>
        <span>Extra regularNum: {regularNum}</span>
      </div>
      <div>
        <span>Extra derivedNum: {derivedNum}</span>
      </div>
      <div>
        <span>Extra originImmerNum: {originImmerNum}</span>
      </div>
      <div>
        <span>Extra ImmerNum: {ImmerNum}</span>
      </div>
    </div>
  );
};

export default JotaiImmerConsumer;
