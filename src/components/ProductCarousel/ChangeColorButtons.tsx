import { useColorStore } from '../../store/ColorStore'
import styles from './ChangeColorButtons.module.css'

export default function ChangeColorButtons() {
	const { color, setColor } = useColorStore()
	return (
		<div className={styles.changeColor}>
			<button
				className={styles.blackBtn}
				onClick={() => setColor('Black')}
				aria-label='select black color'
			>
				<span
					className={`${styles.indicator} ${
						color === 'Black' ? styles.current : ''
					}`}
				></span>
			</button>
			<button
				className={styles.greenBtn}
				onClick={() => setColor('Green')}
				aria-label='select green color'
			>
				<span
					className={`${styles.indicator}  ${
						color === 'Green' ? styles.current : ''
					}`}
				></span>
			</button>
		</div>
	)
}
