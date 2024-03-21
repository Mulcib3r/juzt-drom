import styles from "./loginForm.module.css";

export function LoginForm() {
	return (
		<form className={styles.form}>
			<label className={styles.form_field}>
				Email
				<input
					required
					type="email"
				/>
			</label>
			<label className={styles.form_field}>
				Password
				<input
					required
					type="password"
				/>
			</label>
			<button
				className={styles.form_submit}
				type="submit"
			>
				LOGIN
			</button>
		</form>
	);
}
