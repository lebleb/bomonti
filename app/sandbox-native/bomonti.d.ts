import 'bomonti'
import {TTheme} from './theme'

declare module 'bomonti' {
    export interface DefaultTheme extends TTheme {}
}
