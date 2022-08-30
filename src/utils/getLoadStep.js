
export function getLoadStep(width) {

  if(width<700){
    return 5
  }
  else if(width>=700 && width<850){
    return 2
  }
  else if(width>=850 && width<1140){
    return 3
  }
  else {
    return 4
  }

}

export function getInitialCount(width) {
  if(width>= 1280){
    return 12
  }
  if(width>= 768){
    return 8
  }
  return 5
}
