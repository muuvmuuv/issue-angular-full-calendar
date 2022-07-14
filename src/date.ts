import "dayjs/locale/de"

import { extend, locale } from "dayjs"
import * as localizedFormat from "dayjs/plugin/localizedFormat"
import * as relativeTime from "dayjs/plugin/relativeTime"
import * as utc from "dayjs/plugin/utc"

extend(localizedFormat)
extend(relativeTime)
extend(utc)

locale("de")
