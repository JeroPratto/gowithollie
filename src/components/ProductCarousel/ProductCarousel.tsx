import { EmblaOptionsType } from 'embla-carousel'
import Fade from 'embla-carousel-fade'
import useEmblaCarousel from 'embla-carousel-react'
import { useColorStore } from '../../store/ColorStore'
import { useOpenModal } from '../../store/openModal'
import { usePrevNextButtons } from './CarouselButtons'
import CarouselControls from './CarouselControls'
import ChangeColorButtons from './ChangeColorButtons'
import styles from './ProductCarousel.module.css'

export default function ProductCarousel() {
	const images = ['01', '02', '03', '04', '05', '06', '07', '08']
	const options: EmblaOptionsType = {
		loop: true,
	}
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()])
	const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)
	const { color } = useColorStore()
	const { openProduct } = useOpenModal()
	return (
		<section className={styles.container} id='product-section'>
			<div className={styles.emblaViewport} ref={emblaRef}>
				<div className={styles.emblaContainer}>
					{images.map((number, index) => (
						<div className={styles.product} key={index}>
							<img src={`/product/${color}-${number}.webp`} alt='' />
						</div>
					))}
				</div>
				<CarouselControls
					onNext={onNextButtonClick}
					onPrev={onPrevButtonClick}
				/>
				<ChangeColorButtons />
				<button className={styles.purchase} onClick={openProduct}>
					Purchase
				</button>
			</div>
		</section>
	)
}
