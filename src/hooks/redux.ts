import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store";


// создам свой кастомный который позволяет забирать данные из store:
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


