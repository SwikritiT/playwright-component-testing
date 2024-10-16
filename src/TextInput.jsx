// src/TextInput.js
import PropTypes from "prop-types"

const TextInput = ({ value, onChange, ...props }) => {
	return (
		<input
			type='text'
			value={value}
			onChange={onChange}
			{...props}
			style={{ padding: "8px", marginRight: "5px" }}
		/>
	)
}

TextInput.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
}

export default TextInput
