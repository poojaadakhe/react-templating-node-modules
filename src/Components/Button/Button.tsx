import React from "react";
import globalStyles from '../../assets/global-styles/bootstrap.min.module.css';
import styles from './Button.module.css';
import cx from 'classnames';

export interface Props {
	label?: string;
	disabled?: boolean;
	classes?: string;
	style?: object;
	dataToggle?: string;
	key?: any;
	clickHandler?: (event: any) => void;
}
const Button: React.FC<Props> = props => {

	
	let {
		label,
		disabled,
		clickHandler,
		children,
		style,
		classes,
		dataToggle,
		key
	} = props;

	const buttonCss = [globalStyles['btn'], globalStyles['btn-primary'], styles.customBtn];

	console.log({styles});
	
	return (
		<button
			data-toggle={dataToggle}
			disabled={disabled}
			onClick={clickHandler}
			key={key}
			className={cx(
				classes || 
				buttonCss.join(' ')
			)}
			style={style}
			title={label || "Add Texttttteeee"}
		>
			{label ? label : < > Add Texttttteeeee </>}
			{children ? children : <></>}
		</button>
	);
};

export default Button;
