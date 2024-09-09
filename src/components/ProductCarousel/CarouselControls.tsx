import styles from './CarouselControls.module.css'
import arrow from '/product/arrow.svg'

export default function CarouselControls({
	onPrev,
	onNext,
}: {
	onPrev: () => void
	onNext: () => void
}) {
	return (
		<div className={styles.controls}>
			<button
				className={styles.leftBtn}
				onClick={onPrev}
				aria-label='go to prev image'
			>
				<span className={styles.arrow}>
					<img src={arrow} alt='' />
				</span>
			</button>
			<button
				className={styles.rightBtn}
				onClick={onNext}
				aria-label='go to next image'
			>
				<span className={styles.arrow}>
					<img src={arrow} alt='' />
				</span>
			</button>
		</div>
	)
}
