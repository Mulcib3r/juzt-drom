"use client";

import { ChangeEvent, useState } from "react";
import styles from "./newCarForm.module.css";
import { addNewCar } from "@/app/lib/actions";

const CarForm = () => {
	const [engine, setEngine] = useState("gas");

	const handleEngineChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setEngine(e.target.value);
	};

	return (
		<form
			className={styles.form}
			action={addNewCar}
		>
			<div className={styles.form_field}>
				<label htmlFor="year">Year:</label>
				<input
					type="text"
					id="year"
					required
					name="year"
					maxLength={10}
					placeholder="[0-9]"
				/>
			</div>
			<div className={styles.form_field}>
				<label htmlFor="brand">Brand:</label>
				<input
					type="text"
					id="brand"
					required
					name="brand"
					maxLength={10}
					placeholder="[any]"
				/>
			</div>
			<div className={styles.form_field}>
				<label htmlFor="model">Model:</label>
				<input
					type="text"
					id="model"
					required
					name="model"
					maxLength={10}
					placeholder="[any]"
				/>
			</div>
			<div className={styles.form_field}>
				<label htmlFor="body">Body:</label>
				<input
					type="text"
					id="body"
					required
					name="body"
					maxLength={10}
					placeholder="[A-z]"
				/>
			</div>
			<div className={styles.form_field}>
				<label htmlFor="color">Color:</label>
				<input
					type="text"
					id="color"
					required
					name="color"
					maxLength={10}
					placeholder="[A-z]"
				/>
			</div>
			<div className={styles.form_field}>
				<label htmlFor="price">Price:</label>
				<input
					type="text"
					id="price"
					required
					name="price"
					maxLength={12}
					placeholder="[0-9]"
				/>
			</div>
			<div className={styles.form_field}>
				<label htmlFor="engine">Engine:</label>
				<select
					id="engine"
					required
					name="engine"
					onChange={handleEngineChange}
				>
					<option value="gas">Gas</option>
					<option value="electro">Electro</option>
				</select>
			</div>
			{engine === "gas" && (
				<div className={styles.form_field}>
					<label htmlFor="transmission">Transmission:</label>
					<select
						id="transmission"
						required
						name="transmission"
					>
						<option value="manual">Manual</option>
						<option value="automatic">Automatic</option>
					</select>
				</div>
			)}
			{engine === "electro" && (
				<div className={styles.form_field}>
					<label htmlFor="range">Range:</label>
					<input
						required
						type="text"
						id="range"
						name="range"
						maxLength={7}
						placeholder="[A-z]"
					/>
				</div>
			)}
			<div className={styles.form_field}>
				<label htmlFor="image">Image:</label>
				<input
					type="file"
					id="picture"
				/>
			</div>
			<button
				className={styles.form_submit}
				type="submit"
			>
				add car
			</button>
		</form>
	);
};

export default CarForm;
