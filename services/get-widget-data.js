import axios from "axios";

export default async function getWidgetData (widgetId) {
  const url = `${process.env.SERVER_URL}widget/${widgetId}`;
  const res = await axios.get(url);

  return res;
}