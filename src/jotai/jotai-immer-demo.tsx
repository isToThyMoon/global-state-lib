/*
 * @Author: 王荣
 * @Date: 2022-09-22 16:01:08
 * @LastEditors: 王荣
 * @LastEditTime: 2022-09-27 22:32:43
 * @Description: 填写简介
 */

import React, { useEffect } from "react";
import { atom, useAtom, useAtomValue } from "jotai";
import { withImmer, atomWithImmer, useImmerAtom } from "jotai/immer";

// primitive atom and derived atom
const msgAtom = atom("meeesage");

const lowerMsgAtom = atom(
  (get) => get(msgAtom).toLowerCase(),
  (get, set, newValue: string) => {
    set(msgAtom, newValue);
    // set(UpperMsgAtom, newValue);
  }
);

const UpperMsgAtom = atom(
  (get) => get(msgAtom).toUpperCase(),
  (get, set, newValue: string) => {
    // 修改派生atom 调用派生atom的write方法，在write方法中不能set自身
    // x！ set(UpperMsgAtom, newValue); 不能set派生atom自身
    set(lowerMsgAtom, newValue);
  }
);
// atom with immer
export const regularNumAtom = atom(0); // regular atom
export const derivedWithImmerNumAtom = withImmer(regularNumAtom); // derived immer atom from regular atom
export const ImmerNumAtom = atomWithImmer(0); // original immer atom

const JotaiImmerDemo = () => {
  const [msg, setMsg] = useAtom(msgAtom);
  const [lowerMsg, setLowerMsg] = useAtom(lowerMsgAtom);
  const [upperMsg, setUpperMsg] = useAtom(UpperMsgAtom);

  console.log("JotaiImmerDemo rerender", msg);

  const [regularNum, setRegularNum] = useAtom(regularNumAtom);
  const [derivedNum, setDerivedNum] = useAtom(derivedWithImmerNumAtom);
  const [originImmerNum, setOriginImmerNum] = useAtom(ImmerNumAtom);
  const [ImmerNum, setImmerNum] = useImmerAtom(regularNumAtom); // replace the regular write function with new write function(similar to produce in immer)
  /*
  3 ways to have immer:

    atomWithImmer => useAtom or useImmerAtom
          Performance -> useAtom > useImmerAtom
    withImmer => useAtom or useImmerAtom
          Performace -> useAtom > useImmerAtom
    atom => useImmerAtom
          Performance -> useAtom == useImmerAtom

  */
  return (
    <div>
      <div className="split-line">------------jotai派生atom--------------</div>
      <div>------------lowerMsg upperMsg都派生自msg---------------</div>
      <div>
        -----修改派生atom
        调用派生atom的write方法，在write方法中不能set自身---------
      </div>
      <div>
        <div>msg:{msg}</div>
        <div>
          lowerMsg:{lowerMsg}
          <button onClick={() => setLowerMsg("dadada")}>change</button>
        </div>
        <div>
          upperMsg:{upperMsg}
          <button onClick={() => setUpperMsg("dododo")}>change</button>
        </div>
      </div>

      <div className="split-line">------------jotai-immer-------------</div>
      <div>
        常规atom: {regularNum}
        <button
          onClick={() =>
            setRegularNum((num) => {
              return num + 2;
            })
          }
        >
          +
        </button>
      </div>
      <div>
        从常规atom中withImmer派生的atom: {derivedNum}
        <button onClick={() => setDerivedNum((draft) => (draft = draft + 1))}>
          +
        </button>
      </div>
      <div>
        atomWithImmer自主创建的全新atom: {originImmerNum}
        <button
          onClick={() => setOriginImmerNum((draft) => (draft = draft + 1))}
        >
          +
        </button>
      </div>
      <div>
        从常规atom中useImmer派生的atom: {ImmerNum}
        <button onClick={() => setImmerNum((draft) => (draft = draft + 1))}>
          +
        </button>
      </div>
      <ChildJotai></ChildJotai>
    </div>
  );
};

const ChildJotai = React.memo(() => {
  console.log("JotaiDemoChild rerender");
  const originImmerNum = useAtomValue(ImmerNumAtom);

  useEffect(() => {
    console.log("JotaiDemoChild effect");
  });
  return (
    <div>
      <div>ChildJotai: atomWithImmer自主创建的全新atom: {originImmerNum}</div>
    </div>
  );
});

export default JotaiImmerDemo;
