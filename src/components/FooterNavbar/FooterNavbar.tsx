import styles from './FooterNavbar.module.css'

export default function FooterNavbar() {
	return (
		<div className={styles.container}>
			<div className={styles.links}>
				<div className={styles.nav}>
					<p>Home</p>
					<p>Product</p>
					<p>About</p>
					<p>Contact</p>
				</div>
				<div className={styles.networksAndHelp}>
					<p>Terms & Conditions</p>
					<p>Shipping & Returns</p>
					<p>FAQ</p>
					<p>Privacy policy</p>
					<p>Account</p>
					<p>Instagram</p>
					<p>LinkedIn</p>
				</div>
			</div>
			<div className={styles.questions}>
				<p>
					Got a question? Check out our handy <span>FAQs page.</span> You can
					also drop us an email to say hi at <span>hello@GoWithOllie.com.</span>
				</p>
				<p>
					Want to talk business? For press, partnerships or distribution, it's
					<span> business@GoWithOllie.com.</span>
				</p>
			</div>
			<div className={styles.copy}>
				<p>Copyright ©2024 Ollie</p>
				<p>Patent pending...</p>
			</div>
		</div>
	)
}
