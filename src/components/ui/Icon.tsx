import { iconMap } from "../../assets/icons"

interface IconProps {
    name: string,
    size?: number,
    style?: string
}

const Icon = ({name, size = 10, style = "bg-white"}: IconProps) => {

  const dimension = `${size * 0.25}rem`;

  return (<div style={{width: dimension, height: dimension}}>
    <img className={"w-full h-full rounded-lg p-0.25 " + style} src={iconMap[name.toLowerCase().replaceAll(' ', '')]} alt="" />
  </div>
  )
}

export default Icon