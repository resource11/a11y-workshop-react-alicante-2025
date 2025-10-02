import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "./Button";
import styles from "./styles/styles.module.css";
import popover from "../styles/popover.module.css";

/**
 * A control that shows or hides a container of contents.
 */

export const Popover = ({
  "aria-label": ariaLabel,
  buttonClasses,
  buttonIcon,
  buttonId,
  buttonSize,
  buttonText,
  children,
  // defaultExpanded,
  firstItemRef,
  iconOnlyBtnClasses,
  iconOnlyBtn,
  isList,
}) => {
  // const [isOpen, setIsOpen] = useState(defaultExpanded);
  const buttonRef = useRef(null);
  const contentRef = useRef(null);

  /**
   * This useEffect hook sends focus to the element in the disclosure
   * container that has the firstItemRef passed into its ref prop.
   */
  useEffect(() => {
    if (firstItemRef) {
      firstItemRef.current.focus();
    }
  }, [firstItemRef]);

  const buttonClassNames = clsx(styles.button, buttonClasses);
  const popoverClassNames = clsx(styles.dwContainer, styles.popoverWrapper);
  const popoverWrapperClassNames = clsx(
    styles.dwWrapper,
    styles.popoverWrapper
  );

  return (
    <div className={popoverWrapperClassNames}>
      <Button
        aria-label={ariaLabel}
        buttonClasses={buttonClassNames}
        buttonId={buttonId}
        buttonRef={buttonRef}
        icon={buttonIcon}
        iconOnlyBtnClasses={iconOnlyBtnClasses}
        iconOnlyBtn={iconOnlyBtn}
        popovertarget="popoverContainer"
        size={buttonSize}
        type="button"
      >
        {buttonText}
      </Button>
      <div
        className={popoverClassNames}
        ref={contentRef}
        id="popoverContainer"
        popover="auto"
      >
        {children}
      </div>
    </div>
  );
};

export default Popover;

Popover.defaultProps = {
  defaultExpanded: false,
  buttonText: "",
};

Popover.propTypes = {
  /**
   * Popover button aria-label
   */
  "aria-label": PropTypes.string,
  /**
   * Optional CSS classes to add to the Popover button element
   */
  buttonClasses: PropTypes.string,
  /**
   * The icon to show in the Popover button
   */
  buttonIcon: PropTypes.string,
  /**
   * Popover button id
   */
  buttonId: PropTypes.string,
  /**
   * Popover button size
   */
  buttonSize: PropTypes.string,
  /**
   * Popover button text
   */
  buttonText: PropTypes.string,
  /**
   * Popover container contents
   */
  children: PropTypes.node,
  /**
   * Whether the Popover is expanded by default or not
   */
  defaultExpanded: PropTypes.bool,
  /**
   * The ref passed into the Popover for targeted focus management
   */
  firstItemRef: PropTypes.instanceOf(Object),
  /**
   * Optional CSS classes to add to the Popover button icon element
   */
  iconOnlyBtnClasses: PropTypes.string,
  /**
   * Whether the Popover button is an icon-only button
   */
  iconOnlyBtn: PropTypes.bool,
  /**
   * Whether the Popover has a list as the children
   */
  isList: PropTypes.bool,
  /**
   * Whether the popover automatically or manually toggles open
   */
  popover: PropTypes.oneOf(["auto", "manual"]),
};
