import { useState } from "react"

const useStack = ({ initalActive = 0, totalCount }) => {
  const [activeIndex, setActiveIndex] = useState(initalActive)
  const getBackwardIndex = () => {
    const decrementedIndex = activeIndex - 1
    return decrementedIndex < 0 ? totalCount - 1 : decrementedIndex
  }
  const getForwardIndex = () => {
    const incrementedIndex = activeIndex + 1
    return incrementedIndex >= totalCount ? 0 : incrementedIndex
  }
  const goBackward = () => {
    setActiveIndex(getBackwardIndex())
  }
  const goForward = () => {
    setActiveIndex(getForwardIndex())
  }
  const isActiveIndex = (index) => activeIndex === index
  const isBackwardIndex = (index) => getBackwardIndex() === index
  const isForwardIndex = (index) => getForwardIndex() === index

  return {
    activeIndex,
    getBackwardIndex,
    getForwardIndex,
    goBackward,
    goForward,
    isActiveIndex,
    isBackwardIndex,
    isForwardIndex,
    setActiveIndex,
  }
}

export default useStack
