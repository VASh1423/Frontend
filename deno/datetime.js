import { format, weekOfYear } from "https://deno.land/std@0.90.0/datetime/mod.ts"

console.log(format(new Date(2019, 0, 20), "dd-MM-yyyy"))
console.log(weekOfYear(new Date("2020-12-28T03:24:00")))