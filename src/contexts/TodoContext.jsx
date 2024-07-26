import { createContext } from "react";

// 컨텍스트 생성
export const TodoContext = createContext(); // Todos 데이터 제공용 컨텍스트
export const TodoDispatchContext = createContext();     // Todos DIspatch용 컨텍스트