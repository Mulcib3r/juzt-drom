"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent, useState } from "react";
import styles from "./newCarForm.module.css";
import schema from "./schema";
import { useForm } from "react-hook-form";
import { addNewCar } from "@/app/lib/actions";

const CarForm = () => {
	const [engine, setEngine] = useState("gas");
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

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
					{...register("year")}
				/>
				{errors.year && <p>{errors.year.message}</p>}
			</div>
			<div className={styles.form_field}>
				<label htmlFor="brand">Brand:</label>
				<input
					type="text"
					id="brand"
					required
					{...register("brand")}
				/>
				{errors.brand && <p>{errors.brand.message}</p>}
			</div>
			<div className={styles.form_field}>
				<label htmlFor="model">Model:</label>
				<input
					type="text"
					id="model"
					required
					{...register("model")}
				/>
				{errors.model && <p>{errors.model.message}</p>}
			</div>
			<div className={styles.form_field}>
				<label htmlFor="body">Body:</label>
				<input
					type="text"
					id="body"
					required
					{...register("body")}
				/>
				{errors.body && <p>{errors.body.message}</p>}
			</div>
			<div className={styles.form_field}>
				<label htmlFor="color">Color:</label>
				<input
					type="text"
					id="color"
					required
					{...register("color")}
				/>
				{errors.color && <p>{errors.color.message}</p>}
			</div>
			<div className={styles.form_field}>
				<label htmlFor="price">Price:</label>
				<input
					type="text"
					id="price"
					required
					{...register("price")}
				/>
				{errors.price && <p>{errors.price.message}</p>}
			</div>
			<div className={styles.form_field}>
				<label htmlFor="engine">Engine:</label>
				<select
					id="engine"
					required
					{...register("engine")}
					onChange={handleEngineChange}
				>
					<option value="gas">Gas</option>
					<option value="electro">Electro</option>
				</select>
				{errors.engine && <p>{errors.engine.message}</p>}
			</div>
			{engine === "gas" && (
				<div className={styles.form_field}>
					<label htmlFor="transmission">Transmission:</label>
					<select
						id="transmission"
						required
						{...register("transmission")}
					>
						<option value="manual">Manual</option>
						<option value="automatic">Automatic</option>
					</select>
					{errors.transmission && (
						<p>{errors.transmission.message}</p>
					)}
				</div>
			)}
			{engine === "electro" && (
				<div className={styles.form_field}>
					<label htmlFor="range">Range:</label>
					<input
						required
						type="text"
						id="range"
						{...register("range")}
					/>
					{errors.range && <p>{errors.range.message}</p>}
				</div>
			)}
			<div className={styles.form_field}>
				<label htmlFor="image">Image:</label>
				<input
					type="file"
					id="picture"
					{...register("picture")}
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
