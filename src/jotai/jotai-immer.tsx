/*
 * @Author: 王荣
 * @Date: 2022-09-22 16:01:08
 * @LastEditors: 王荣
 * @LastEditTime: 2022-09-24 20:18:57
 * @Description: 填写简介
 */

import React from "react";
import { Provider, atom, useAtom } from "jotai";
import { withImmer, atomWithImmer, useImmerAtom } from "jotai/immer";
import ChildJotai from "./child";

// primitive atom and derived atom
const msgAtom = atom("dididi");

const lowerMsgAtom = atom(
  (get) => get(msgAtom).toLowerCase(),
  (get, set, newValue: string) => {
    console.log("write lowerMsgAtom", newValue);
    set(msgAtom, newValue);
    // set(UpperMsgAtom, newValue);
  }
);

const UpperMsgAtom = atom(
  (get) => get(msgAtom).toUpperCase(),
  (get, set, newValue: string) => {
    // set(msgAtom, newValue);
    set(lowerMsgAtom, newValue);
  }
);
// atom with immer
export const regularNumAtom = atom(0); // regular atom
export const derivedWithImmerNumAtom = withImmer(regularNumAtom); // derived immer atom from regular atom
export const ImmerNumAtom = atomWithImmer(0); // original immer atom

const Add = () => {
  const [msg, setMsg] = useAtom(msgAtom);
  const [lowerMsg, setLowerMsg] = useAtom(lowerMsgAtom);
  const [upperMsg, setUpperMsg] = useAtom(UpperMsgAtom);

  console.log("Add rerender", msg);

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
      <div>
        <div>msg:{msg}</div>
        <div>
          lowerMsg:{lowerMsg}{" "}
          <button onClick={() => setLowerMsg("dadada")}>change</button>
        </div>
        <div>
          upperMsg:{upperMsg}{" "}
          <button onClick={() => setUpperMsg("dododo")}>change</button>
        </div>
      </div>
      <br />
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

export default Add;
