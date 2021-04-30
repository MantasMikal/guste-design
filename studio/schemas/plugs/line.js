import { AiOutlineLine } from "react-icons/ai";

export default {
  type: 'object',
  name: 'line',
  title: 'Line',
  icon: AiOutlineLine,
  fields: [
    {
      type: 'string',
      name: 'lineStyle',
      title: 'Line style',
      description: 'Adds line. Example: 2px solid black. More info: https://www.w3schools.com/css/css_border.asp'
    }
  ]
}