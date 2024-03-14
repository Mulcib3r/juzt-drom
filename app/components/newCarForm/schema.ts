import * as yup from "yup";

const schema = yup.object().shape({
	year: yup
		.string()
		.matches(/^\d+$/, "Year must contain only digits")
		.required(),
	brand: yup
		.string()
		.matches(/^[a-zA-Z]+$/, "Brand must contain only letters")
		.required(),
	model: yup
		.string()
		.matches(/^[a-zA-Z0-9]+$/, "Model must contain only letters and digits")
		.required(),
	body: yup
		.string()
		.matches(/^[a-zA-Z]+$/, "Body must contain only letters")
		.required(),
	color: yup
		.string()
		.matches(/^[a-zA-Z]+$/, "Color must contain only letters")
		.required(),
	price: yup
		.string()
		.matches(/^\d+$/, "Price must contain only digits")
		.required(),
	engine: yup.string().oneOf(["gas", "electro"]).required(),
	transmission: yup.string().oneOf(["manual", "automatic"]).required(),
	range: yup.string().test({
		name: "required-range",
		message: "Range is required when engine is electro",
		test: function (value) {
			const engine = this.resolve(yup.ref("engine"));
			if (engine === "electro") {
				return value !== undefined && value !== "";
			}
			return true;
		},
	}),
	picture: yup.mixed().required("Picture is required"),
});

export default schema;
