import { extendObservable, computed } from 'mobx';
import debounce from 'lodash/debounce'
import inRange from 'lodash/inRange'
import reduce from 'lodash/reduce'

export default class WindowSizeStore {
  constructor(){
    extendObservable(this, {
      windowWidth: null,
      screenWindow: null,
      windowSizes: computed(() => {
        const SIZES = {
          'sm': inRange(this.windowWidth, 0, 639),
          'm': inRange(this.windowWidth, 640, 1023),
          'l': inRange(this.windowWidth, 1024, 1250),
          'xl': inRange(this.windowWidth, 1250, Number.POSITIVE_INFINITY),
          'ns': inRange(this.windowWidth, 640, Number.POSITIVE_INFINITY)
        }
    
        return reduce(SIZES, (result, value, key) => {
          if (value){
            result = [...result, key]
          }
          return result
        }, [])
      })
    })
  }

  setWindow = () => {
    if (typeof window === 'object'){
      this.screenWindow = window
      this.handleWindowWidthChange()
      this.screenWindow.addEventListener("resize", this.handleWindowWidthChange)
    }
  }

  handleWindowWidthChange = debounce(() => {
    const width = this.screenWindow.innerWidth
    this.setWindowWidth(width)
  }, 100)

  setWindowWidth = (width) => {
    this.windowWidth = width
    return this.windowWidth
  }
}