export const calcElements = ():number => {
    if(document.body.offsetWidth < 576) return 2
    else if(document.body.offsetWidth >= 576 && document.body.offsetWidth < 768) return 3
    else if(document.body.offsetWidth >= 768 && document.body.offsetWidth < 992) return 4
    else if(document.body.offsetWidth >= 992 && document.body.offsetWidth < 1200) return 5
    else if(document.body.offsetWidth >= 1200) return 6
    else return 2
}

export const isMobileDevice = () => {
    if(window.outerWidth > 1200) return false
    else return true
}

export const getVW = (percent:number):number => {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const res = ((percent * w) / 100)
  return Math.trunc(res);
}

export function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number,
): (...args: Params) => void {
  let timer: NodeJs.Timeout
  return (...args: Params) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
    }, timeout)
  }
}

export const acumulativeOffset = (element:HTMLDivElement) => { //Acumulador de posiciones relativas
  let top = 0, left = 0;
  do {
      top += element.offsetTop  || 0;
      left += element.offsetLeft || 0;
      element = element.offsetParent as HTMLDivElement;
  } while(element);
  return {
      top: top,
      left: left
  }
};

export function isBigCardOpen ():boolean {
  const children = document.getElementById('bigCardModals')
  if( children && children.children.length === 0) return false
  else return true
}