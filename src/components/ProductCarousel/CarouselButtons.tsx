import { EmblaCarouselType } from 'embla-carousel'
import { useCallback } from 'react'

type UsePrevNextButtonsType = {
	onPrevButtonClick: () => void
	onNextButtonClick: () => void
}

export const usePrevNextButtons = (
	emblaApi: EmblaCarouselType | undefined,
): UsePrevNextButtonsType => {
	const onPrevButtonClick = useCallback(() => {
		if (!emblaApi) return
		emblaApi.scrollPrev()
	}, [emblaApi])

	const onNextButtonClick = useCallback(() => {
		if (!emblaApi) return
		emblaApi.scrollNext()
	}, [emblaApi])

	return {
		onPrevButtonClick,
		onNextButtonClick,
	}
}
