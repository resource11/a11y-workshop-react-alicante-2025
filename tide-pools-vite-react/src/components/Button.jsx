import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Icon } from "./Icon";
import styles from "../styles/Button.module.css";

export const ButtonSizes = {
	small: "small",
	large: "large"
};

export const Button = ({
	"aria-controls": ariaControls,
	"aria-expanded": ariaExpanded,
	"aria-label": ariaLabel,
	buttonClasses,
	buttonId,
	buttonRef,
	children,
	disabled,
	icon,
	iconOnlyBtnClasses,
	iconOnlyBtn,
	onClick,
	size,
	type,
	...props
}) => {
	return (
		<button
			{...props}
			aria-controls={ariaControls}
			aria-expanded={ariaExpanded}
			aria-label={ariaLabel}
			id={buttonId}
			className={clsx(styles.root, styles[size], buttonClasses)}
			disabled={disabled}
			onClick={onClick}
			ref={buttonRef}
			type={type}
		>
			<span className={styles.btnContentWrap}>
				{children}
				{icon && (
					<Icon
						icon={icon}
						iconClasses={iconOnlyBtn ? iconOnlyBtnClasses : styles.icon}
						size={size !== ButtonSizes.small ? "lg" : "sm"}
					/>
				)}
			</span>
		</button>
	);
};

export default Button;

Button.defaultProps = {
	"aria-controls": null,
	"aria-expanded": null,
	"aria-label": null,
	buttonId: "id",
	disabled: null,
	iconOnlyBtn: false
};

Button.propTypes = {
	/**
	 * Informs assistive technology that the button is controlling the element associated with the id passed in here
	 */
	"aria-controls": PropTypes.string,

	/**
	 * Allows the button to act as a toggle for a sibling container
	 */
	"aria-expanded": PropTypes.oneOf([false, null, true]),

	/**
	 * Applies a visually-hidden label for screen readers
	 */
	"aria-label": PropTypes.string,

	/**
	 * A map of CSS classes used to override button-specific CSS in the component
	 */
	buttonClasses: PropTypes.string,

	/**
	 * Button id
	 */
	buttonId: PropTypes.string,

	/**
	 * Attaches a reference to this component
	 */
	buttonRef: PropTypes.instanceOf(Object),

	/**
	 * Button label
	 */
	children: PropTypes.node,

	/**
	 * Determines if this button is disabled
	 */
	disabled: PropTypes.bool,

	/**
	 * Show an icon in your button. This value should exactly match a name in the Icon component
	 */
	icon: PropTypes.string,

	/**
	 * A map of CSS classes used to override icon-specific CSS in the component
	 */
	iconClasses: PropTypes.string,

	/**
	 * Show a button with an icon and without visible text. Pair this with ariaLabel to customize what is announced to screen readers
	 */
	iconOnlyBtn: PropTypes.bool,

	/**
	 * Called when this button is clicked
	 */
	onClick: PropTypes.func,

	/**
	 * Button size
	 */
	size: PropTypes.oneOf(Object.keys(ButtonSizes)),

	/**
	 * Button type
	 */
	type: PropTypes.oneOf(["button", "reset", "submit"])
};
