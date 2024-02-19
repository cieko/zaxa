import { Redirect } from "expo-router";

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

export default function TabIndex() {
    return <Redirect href={'/menu/'} />
}