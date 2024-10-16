import PropTypes from "prop-types"

const Button = ({ onClick, label, fetchJoke, ...props }) => {
	const handleClick = async () => {
		if (fetchJoke) {
			const joke = await fetchJoke()
			onClick(joke)
		} else {
			onClick()
		}
	}

	return (
		<button
			onClick={handleClick}
			{...props}
		>
			{label}
		</button>
	)
}

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	fetchJoke: PropTypes.func,
}

export default Button
